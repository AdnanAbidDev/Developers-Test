import { Component } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { Quote_List } from 'src/app/interfaces/quote-list';
import { QuotableService } from 'src/app/services/quotable.service';
@Component({
  selector: 'app-quotable',
  templateUrl: './quotable.component.html',
  styleUrls: ['./quotable.component.css'],
})
export class QuotableComponent {
  constructor(private quotableService: QuotableService) {}
  randomQuote?: Quote;
  einsteinsQuotes?: Quote[];
  ngOnInit() {
    this.getRandomQuote();
  }
  getRandomQuote() {
    this.quotableService.getRandomQuote().subscribe((quote) => {
      this.randomQuote = quote[0];
    });
  }
  getEinsteinsQuotes() {
    this.quotableService.getAlbertEinsteinQoutes().subscribe((quote) => {
      this.einsteinsQuotes = quote.results;
    });
  }
}
