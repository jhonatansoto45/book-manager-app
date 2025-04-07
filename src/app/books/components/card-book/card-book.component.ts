import { Component, input } from '@angular/core';
import { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-card-book',
  imports: [],
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css',
})
export class CardBookComponent {
  book = input.required<Book>();
}
