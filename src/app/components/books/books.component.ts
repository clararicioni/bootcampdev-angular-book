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
  book: Book = {} as Book; //vou passar esse objeto book do componente pai para o componente filho.
  isUpdate: boolean = false; //vai mudar o comportamento do botão Salvar se estiver true.
  idCount: number = 4;

  books: Book[] = [
    { id: 1, title: "Java 24 horas", author: "Albert Einstein", price: 40.00 },
    { id: 2, title: "Programação linear 24 horas", author: "Ana Carolina", price: 60.00 },
    { id: 3, title: "POO 24 horas", author: "Dimas Cardoso", price: 45.00 }
  ];

  saveBook() {
    if (!this.isUpdate) { //se é um update,
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book); //o objeto book é adicionado ao array
    } 
      this.book = {} as Book; //para limpar o formulario, cria um novo objeto Book após salvar 
      this.isUpdate = false;
  }

  update(selectedBook: Book) {
    this.book = selectedBook; //vai ir para os inputs do form para ser alterado
    this.isUpdate = true;
  }

  remove(removeBook: Book) {
    this.books = this.books.filter( b => b !== removeBook); //arrow function que vai retornar somente os livros que não sao o removido
  }
}
