import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private http = inject(HttpClient);

  private dataUrl = 'public/data/books-db.json';

  getBooks() {
    return this.http.get(this.dataUrl);
  }
}
