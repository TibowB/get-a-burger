import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersListComponent } from './burgers-list/burgers-list.component';
import { CartComponent } from './cart/cart.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { CheckOutComponent } from "./check-out/check-out.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { NewBurgerComponent } from './new-burger/new-burger.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: BurgersListComponent },
  { path: 'burger/:burgerId', component: BurgerDetailComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'new', component: NewBurgerComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
