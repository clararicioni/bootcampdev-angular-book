import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { Book } from '../../book';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-books',
  standalone: true, // Necessário para usar imports
  imports: [CommonModule, BookComponent], // Adiciona suporte ao *ngFor
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  bookPai: Book = {
    title:"angular"
  } as Book; //vou passar esse objeto book do componente pai para o componente filho.
  books: Book[] = [
    { id: 1, title: "Java 24 horas", author: "Albert Einstein", price: 40.00 },
    { id: 2, title: "Programação linear 24 horas", author: "Ana Carolina", price: 60.00 },
    { id: 3, title: "POO 24 horas", author: "Dimas Cardoso", price: 45.00 }
  ];
}
