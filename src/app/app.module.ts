// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Make sure this import is correct
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule], // Make sure AppRoutingModule is included here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
