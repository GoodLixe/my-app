import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html'
})
export class BookComponent {

  book: any;

  constructor(private booksService: BooksService) {
    this.book = this.booksService.getBook();
  }
}