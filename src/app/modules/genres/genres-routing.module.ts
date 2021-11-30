import { GenresListComponent } from './components/genres-list/genres-list.component';
import { GenresInfoComponent } from './components/genres-info/genres-info.component';
import { GenresCreateComponent } from './components/genres-create/genres-create.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GenresListComponent
  },
  {
    path: 'cadastrar',
    component: GenresCreateComponent
  },
  {
    path: 'info',
    component: GenresInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
