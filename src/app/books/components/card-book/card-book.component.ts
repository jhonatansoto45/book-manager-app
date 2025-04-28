import { Component, input, signal } from '@angular/core';
import { Book } from '../../interfaces/books.interfaces';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-book',
  imports: [ModalComponent],
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
}
