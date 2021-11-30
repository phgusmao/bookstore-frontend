import { BooksCreateComponent } from './components/books-create/books-create.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BooksInfoComponent } from './components/books-info/books-info.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: 'cadastrar',
    component: BooksCreateComponent
  },
  {
    path: 'info',
    component: BooksInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
