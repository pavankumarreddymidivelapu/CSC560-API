// src/app/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.http.get<any[]>('http://localhost:3000/api/books').subscribe(
      (books) => {
        this.books = books;
      },
      (error) => {
        console.error('Error loading books:', error);
      }
    );
  }
}
