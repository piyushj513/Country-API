import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Country } from '../country';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  public countries: Country[] = [];
  public gridView: Country[] = [];
  public pageSize = 20;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCountries().subscribe({
      next: (data) => {
        //Sort acc to population in descending order
        const sortedData = data.sort((a, b) => b.population - a.population);
        //Add index for Sno
        this.countries = sortedData.map((country, index) => ({
          sno: index + 1,
          ...country,
          capital: country.capital || 'Not Available',
          currenciesInfo: this.getCurrenciesInfo(country.currencies),
          timezonesInfo: this.getTimezonesInfo(country.timezones),
        }));
        this.gridView = this.countries;
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      },
    });
  }

  private getCurrenciesInfo(currencies: any): string {
    if (!currencies) {
      return 'Not Available';
    }
    const currencyKeys = Object.keys(currencies); //Get each currency key
    const currencyList = currencyKeys.map((key) => {
      //Map each key to currency data
      return `(${currencies[key].symbol}) ${currencies[key].name}`;
    });
    return currencyList.join(', ');
  }

  private getTimezonesInfo(timezones: string[]): string {
    if (!timezones || timezones.length === 0) {
      return 'Not Available';
    }
    const timezonesPerLine = 3;
    const groupedTimezones = [];
    //Create group of 3 timezones followed by nextline
    for (let i = 0; i < timezones.length; i += timezonesPerLine) {
      const group = timezones.slice(i, i + timezonesPerLine);
      groupedTimezones.push(group.join(', '));
    }

    return groupedTimezones.join(',\n');
  }
}
