import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BookComponent } from "./components/book/book.component";
import { BooksComponent } from './components/books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BookComponent, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
