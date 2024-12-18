import {Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ShopPageComponent} from './pages/shop-page/shop-page.component';
import {CarrelloPageComponent} from './pages/carrello-page/carrello-page.component';
import {OrdinePageComponent} from './pages/ordine-page/ordine-page.component';

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: 'carrello', component: CarrelloPageComponent},
  {path: 'checkout', component: OrdinePageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
