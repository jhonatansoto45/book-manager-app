import { Component, inject, OnInit } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-dashboard',
  imports: [AsideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  booksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => {
      console.log(data);
    });
  }
}
