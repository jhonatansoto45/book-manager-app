import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../../interfaces/books.interfaces';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-loans-books',
  imports: [],
  templateUrl: './loans-books.component.html',
})
export class LoansBooksComponent implements OnInit {
  loading = signal(true);
  books = signal<Book[]>([]);
  booksService = inject(BooksService);

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.loading.set(true);
    this.booksService.getBooks().subscribe((data) => {
      const booksLoans = this.booksService.getBooksLoans(data);
      this.books.set(booksLoans);
      this.loading.set(false);
    });
  }
}
