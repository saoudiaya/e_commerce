import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AppComponent } from './app.component';
import { DetailshopComponent } from './detailshop/detailshop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { CommandeComponent } from './commande/commande.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'shop',component: ShopComponent},
  {path: 'detail/:id/:color',component: DetailshopComponent},
  {path:  'login',component:LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'commande/:id',component: CommandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
