import { Component, input, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-card-book',
  imports: [],
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css',
})
export class CardBookComponent {
  book = input.required<Book>();

  modal = signal(false);

  onViewBook(book: Book): void {
    // this.modal.update((current) => !current);
    this.controlModal();
  }

  controlModal(): void {
    this.modal.update((current) => !current);
  }

  getRatingArray(rating: number): any[] {
    return Array(Math.floor(rating));
  }
}
