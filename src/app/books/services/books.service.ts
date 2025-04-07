import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/books.interfaces';
import { Observable } from 'rxjs';

/**
 * Servicio encargado de obtener información sobre libros.
 * Utiliza HttpClient para hacer peticiones HTTP.
 */
@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible de forma global
})
export class BooksService {
  /**
   * URL del archivo JSON que contiene la base de datos de libros.
   */
  private readonly dataUrl = 'data/books-db.json';

  /**
   * Inyección del servicio HttpClient para realizar solicitudes HTTP.
   */
  private http = inject(HttpClient);

  /**
   * Obtiene el listado de libros desde un archivo JSON local.
   *
   * @returns Observable que emite un array de objetos tipo `Book`.
   */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.dataUrl);
  }
}
