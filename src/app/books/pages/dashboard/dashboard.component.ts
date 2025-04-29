import { Component, inject, OnInit, signal } from '@angular/core';
import { BooksService } from '../../services/books.service';
import type { Book } from '../../interfaces/books.interfaces';
import { PopularBooksComponent } from '../../components/popular-books/popular-books.component';
import { CardBookComponent } from '../../components/card-book/card-book.component';

@Component({
  selector: 'app-dashboard',
  imports: [PopularBooksComponent, CardBookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  loading = signal(true);
  books = signal<Book[]>([]);
  popularBooks = signal<Book[]>([]);
  mainBooks = signal<Book[]>([]);
  booksService = inject(BooksService);

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.loading.set(true);
    this.booksService.getBooks().subscribe((data) => {
      this.books.set(data);
      this.loading.set(false);
      this.getPopularBooks();
      this.getMainBooks();
    });
  }

  getPopularBooks(): void {
    const popularBooks = this.books().sort((a, b) => b.rating - a.rating);
    this.popularBooks.set(popularBooks.slice(0, 3));
  }

  getMainBooks(): void {
    const mainBooks = this.books().sort((a, b) => b.rating - a.rating);
    this.mainBooks.set(mainBooks.slice(0, 8));
  }
}
