import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsInfoComponent } from './components/authors-info/authors-info.component';
import { AuthorsCreateComponent } from './components/authors-create/authors-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AuthorsCreateComponent,
    AuthorsInfoComponent,
    AuthorsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorsModule { }
