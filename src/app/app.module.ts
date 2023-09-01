import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { StringComponent } from './components/home/string/string.component';
import { DatabindingComponent } from './components/home/databinding/databinding.component';
import { EventbindingComponent } from './components/home/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './components/home/twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    StringComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
