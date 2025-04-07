import { Component, inject, OnInit, signal } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';
import { BooksService } from '../../services/books.service';
import { CardBookComponent } from '../../components/card-book/card-book.component';
import { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-dashboard',
  imports: [AsideComponent, CardBookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  loading = signal(true);
  books = signal<Book[]>([]);

  booksService = inject(BooksService);

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
