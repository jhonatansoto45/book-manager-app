import { Component, input, output } from '@angular/core';
import { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  book = input.required<Book>();
  modal = input.required<boolean>();

  closeModal = output<boolean>();

  getRatingArray(rating: number): any[] {
    return Array(Math.floor(rating));
  }

  controlModal(): void {
    this.closeModal.emit(this.modal());
  }
}
