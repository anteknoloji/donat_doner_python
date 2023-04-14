import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from 'src/app/layout/public-layout/public-layout.component';
import { AnasayfaComponent } from './anasayfa.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{ path: '', component: AnasayfaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnasayfaRoutingModule {}
