import { Component } from '@angular/core';
import { Book } from "../../book"
@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book : Book = { //criando um livro - deve seguir os atributos que estão na interface book.ts
    id: 1,
    title: "Angular",
    author: "Nikola Tesla",
    price: 50.00
  };
  
}
