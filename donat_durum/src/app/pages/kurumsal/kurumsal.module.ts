import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KurumsalRoutingModule } from './kurumsal-routing.module';
import { KurumsalComponent } from './kurumsal.component';

@NgModule({
  imports: [CommonModule, KurumsalRoutingModule],
  declarations: [KurumsalComponent],
})
export class KurumsalModule {}
