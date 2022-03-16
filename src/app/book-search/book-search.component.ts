import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  totalAngularPackages!: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe({
      next: data => this.totalAngularPackages = data.total,
      error: error => console.error('There was an error!', error)
    })
  };
}

interface SearchResults {
  total: number;
  results: Array<object>;
}
