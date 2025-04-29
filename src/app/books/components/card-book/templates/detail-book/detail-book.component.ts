import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import type { Book } from '../../../../interfaces/books.interfaces';

@Component({
  selector: 'app-detail-book',
  imports: [],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.css',
})
export class DetailBookComponent {
  book = signal<Book>({
    autor: '',
    comentarios: [],
    descripcionBreve: '',
    descripcionCorta: '',
    enPrestamo: false,
    portada: '',
    rating: 0,
    titulo: '',
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { book: Book }) {
    this.book.set(data.book);
  }

  getRatingArray(rating: number): any[] {
    return Array(Math.floor(rating));
  }
}
