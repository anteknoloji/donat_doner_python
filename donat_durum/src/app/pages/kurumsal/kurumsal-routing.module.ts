import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from 'src/app/layout/public-layout/public-layout.component';
import { KurumsalComponent } from './kurumsal.component';

const routes: Routes = [
  {
    path: 'kurumsal',
    component: PublicLayoutComponent,
    children: [{ path: '', component: KurumsalComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurumsalRoutingModule {}
