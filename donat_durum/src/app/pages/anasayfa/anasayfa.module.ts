import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnasayfaRoutingModule } from './anasayfa-routing.module';
import { AnasayfaComponent } from './anasayfa.component';

@NgModule({
  imports: [CommonModule, AnasayfaRoutingModule],
  declarations: [AnasayfaComponent],
})
export class AnasayfaModule {}
