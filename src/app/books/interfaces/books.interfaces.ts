export interface Book {
  titulo: string;
  portada: string;
  rating: number;
  descripcionCorta: string;
  descripcionBreve: string;
  enPrestamo: boolean;
  comentarios: Comentarios[];
}


export interface Comentarios {
  usuario:string;
  valoracion: number;
  descripcion: string;
}