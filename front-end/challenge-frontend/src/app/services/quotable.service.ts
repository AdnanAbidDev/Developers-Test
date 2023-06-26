import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../interfaces/quote';
import { Quote_List } from '../interfaces/quote-list';
@Injectable({
  providedIn: 'root',
})
export class QuotableService {
  apiUrl = 'https://api.quotable.io/';
  constructor(private httpClient: HttpClient) {}
  getRandomQuote() {
    return this.httpClient.get<Quote[]>(this.apiUrl + 'quotes/random');
  }
  getAlbertEinsteinQoutes() {
    return this.httpClient.get<Quote_List>(
      this.apiUrl + 'quotes?author=albert-einstein&limit=30'
    );
  }
}
