import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BookComponent } from "./components/book/book.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
