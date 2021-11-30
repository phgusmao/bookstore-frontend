import { PublishersCreateComponent } from './components/publishers-create/publishers-create.component';
import { PublishresInfoComponent } from './components/publishres-info/publishres-info.component';
import { PublishresListComponent } from './components/publishres-list/publishres-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PublishresListComponent,
    PublishresInfoComponent,
    PublishersCreateComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PublishersModule { }
