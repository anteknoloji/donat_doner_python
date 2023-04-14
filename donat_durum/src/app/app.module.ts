import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutModule } from './layout/layout.module';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { KurumsalComponent } from './pages/kurumsal/kurumsal.component';
import { AnasayfaModule } from './pages/anasayfa/anasayfa.module';
import { KurumsalModule } from './pages/kurumsal/kurumsal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AnasayfaModule,
    KurumsalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
