import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from "../../book"
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-book',
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() //o input é do pai para o filho
  bookFilho : Book = {} as Book; //no TS precisa declarar que o objeto criado é do tipo Book ao inicializa-lo

  @Output() //o output é do filho para o pai
  saveEmitter = new EventEmitter();

  save(){
    this.saveEmitter.emit();
  }
}
