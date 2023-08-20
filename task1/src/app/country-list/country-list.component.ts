import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  public countries: any[] = [];
  public gridView: any[] = [];
  public pageSize = 20;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCountries().subscribe({
      next: (data) => {
        const sortedData = data.sort((a, b) => b.population - a.population);
        this.countries = sortedData.map((country, index) => ({
          sno: index + 1,
          ...country,
          currenciesInfo: this.getCurrenciesInfo(country.currencies),
        }));
        this.gridView = this.countries;
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    }
    );
  }

  private getCurrenciesInfo(currencies: any): string {
    if (!currencies) {
      return '';
    }
    const currencyKeys = Object.keys(currencies);
    const currencyList = currencyKeys.map((key) => {
      return `(${currencies[key].symbol}) ${currencies[key].name}`;
    });
    return currencyList.join(', ');
  }
}
