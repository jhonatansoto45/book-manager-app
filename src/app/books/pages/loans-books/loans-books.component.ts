import {
  Component,
  inject,
  OnInit,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from '../../services/books.service';
import type { Book } from '../../interfaces/books.interfaces';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-loans-books',
  imports: [JsonPipe],
  templateUrl: './loans-books.component.html',
})
export class LoansBooksComponent implements OnInit {
  @ViewChild('reservarBook')
  reservarBook!: TemplateRef<LoansBooksComponent>;

  loading = signal(true);
  books = signal<Book[]>([]);
  booksService = inject(BooksService);

  readonly dialog = inject(MatDialog);

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

  openDialogBook(book: Book) {
    this.dialog.open(this.reservarBook, {
      minWidth: '1100px',
      maxWidth: '1100px',
      minHeight: '380px',
      maxHeight: '380px',
      data: {
        book,
      },
    });
  }

  closeDialogBook() {
    this.dialog.closeAll();
  }
}
