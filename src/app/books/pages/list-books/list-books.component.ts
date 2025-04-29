import { Component, inject, OnInit, signal } from '@angular/core';
import { CardBookComponent } from '../../components/card-book/card-book.component';
import { BooksService } from '../../services/books.service';
import type { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-list-books',
  imports: [CardBookComponent],
  templateUrl: './list-books.component.html',
})
export class ListBooksComponent implements OnInit {
  books = signal<Book[]>([]);
  booksService = inject(BooksService);
  loading = signal(true);

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.loading.set(true);
    this.booksService.getBooks().subscribe((data) => {
      this.books.set(data);
      this.loading.set(false);
    });
  }
}
