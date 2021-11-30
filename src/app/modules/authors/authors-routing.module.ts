import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorsCreateComponent } from './components/authors-create/authors-create.component';
import { AuthorsInfoComponent } from './components/authors-info/authors-info.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorsListComponent
  },
  {
    path: 'cadastrar',
    component: AuthorsCreateComponent
  },
  {
    path: 'info',
    component: AuthorsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
