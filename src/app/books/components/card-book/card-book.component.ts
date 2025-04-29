import {
  Component,
  ElementRef,
  inject,
  input,
  signal,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailBookComponent } from './templates/detail-book/detail-book.component';
import type { Book } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
})
export class CardBookComponent {
  @ViewChild('openDialogButton') openDialogButton!: ElementRef;

  book = input.required<Book>();

  readonly dialog = inject(MatDialog);

  openDialogBook(book: Book) {
    const dialogRef = this.dialog.open(DetailBookComponent, {
      minWidth: '1100px',
      maxWidth: '1100px',
      minHeight: '600px',
      maxHeight: '600px',
      data: {
        book,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.openDialogButton.nativeElement.focus();
    });
  }
}
