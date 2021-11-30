import { PublishresListComponent } from './components/publishres-list/publishres-list.component';
import { PublishresInfoComponent } from './components/publishres-info/publishres-info.component';
import { PublishersCreateComponent } from './components/publishers-create/publishers-create.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PublishresListComponent
  },
  {
    path: 'cadastrar',
    component: PublishersCreateComponent
  },
  {
    path: 'info',
    component: PublishresInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
