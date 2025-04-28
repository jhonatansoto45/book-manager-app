import { SafeHtml } from '@angular/platform-browser';

export interface Book {
  autor: string;
  comentarios: Comentarios[];
  descripcionBreve: string;
  descripcionCorta: string;
  enPrestamo: boolean;
  portada: string;
  rating: number;
  titulo: string;
}

export interface Comentarios {
  usuario: string;
  valoracion: number;
  descripcion: string;
}

export interface Icon {
  name: string;
  icon: SafeHtml;
  route: string;
}
