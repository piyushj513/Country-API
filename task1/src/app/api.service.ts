import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://restcountries.com/v3/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching countries:', error);
        return throwError(()=>'Something went wrong.');
      })
    );
  }
}
