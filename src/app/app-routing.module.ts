import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from "./pages/home/home.component";
import { ContactComponent }     from "./pages/contact/contact.component";
import { ShopComponent }        from "./pages/shop/shop.component";
import { AboutComponent }       from "./pages/about/about.component";

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'index',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
