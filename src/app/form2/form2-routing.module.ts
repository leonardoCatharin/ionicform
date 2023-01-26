import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form2Page } from './form2.page';

const routes: Routes = [
  {
    path: '',
    component: Form2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form2PageRoutingModule {}
