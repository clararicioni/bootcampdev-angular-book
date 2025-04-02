import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from "../../book"
@Component({
  selector: 'app-book',
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  bookFilho : Book = {} as Book; //no TS precisa declarar que o objeto criado é do tipo Book ao inicializa-lo
}
