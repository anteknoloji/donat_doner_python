import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [PublicLayoutComponent],
  declarations: [PublicLayoutComponent, FooterComponent, HeaderComponent],
})
export class LayoutModule {}
