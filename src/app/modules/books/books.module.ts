import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksCreateComponent } from './components/books-create/books-create.component';
import { BooksInfoComponent } from './components/books-info/books-info.component';



@NgModule({
  declarations: [
    BooksListComponent,
    BooksCreateComponent,
    BooksInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
