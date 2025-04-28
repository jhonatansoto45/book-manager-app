import { Component, inject, OnInit, signal } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';
import { BooksService } from '../../services/books.service';
import { CardBookComponent } from '../../components/card-book/card-book.component';
import { Book } from '../../interfaces/books.interfaces';
import { HeaderComponent } from './components/header/header.component';
import { PopularBooksComponent } from './components/popular-books/popular-books.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AsideComponent,
    CardBookComponent,
    HeaderComponent,
    PopularBooksComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  loading = signal(true);
  books = signal<Book[]>([]);
  popularBooks = signal<Book[]>([]);

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
    });
  }

  getPopularBooks(): void {
    const popularBooks = this.books().sort((a, b) => b.rating - a.rating);
    this.popularBooks.set(popularBooks.slice(0, 3));
  }
}
