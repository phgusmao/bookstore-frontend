import { GenresListComponent } from './components/genres-list/genres-list.component';
import { GenresInfoComponent } from './components/genres-info/genres-info.component';
import { GenresCreateComponent } from './components/genres-create/genres-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    GenresCreateComponent,
    GenresInfoComponent,
    GenresListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GenresModule { }
