// src/app/book-detail/book-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bookId = params['id'];
      if (bookId) {
        this.loadBook(bookId);
      }
    });
  }

  loadBook(id: string): void {
    this.http.get<any>(`http://localhost:3000/api/books/${id}`).subscribe(
      (book) => {
        this.book = book;
      },
      (error) => {
        console.error('Error loading book:', error);
      }
    );
  }
}
