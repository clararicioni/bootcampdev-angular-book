import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  standalone: true, // Necessário para usar imports
  imports: [CommonModule], // Adiciona suporte ao *ngFor
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [
    { id: 1, title: "Java 24 horas", author: "Albert Einstein", price: 40.00 },
    { id: 2, title: "Programação linear 24 horas", author: "Ana Carolina", price: 60.00 },
    { id: 3, title: "POO 24 horas", author: "Dimas Cardoso", price: 45.00 }
  ];
}
