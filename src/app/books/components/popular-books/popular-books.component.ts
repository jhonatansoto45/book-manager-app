import { Component, input } from '@angular/core';
import type { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-popular-books',
  imports: [],
  templateUrl: './popular-books.component.html',
  styleUrl: './popular-books.component.css',
})
export class PopularBooksComponent {
  popularBooks = input<Book[]>();
}
