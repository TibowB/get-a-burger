import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { BurgersListComponent } from './burgers-list/burgers-list.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewBurgerComponent } from './new-burger/new-burger.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CartComponent,
    BurgersListComponent,
    BurgerDetailComponent,
    CheckOutComponent,
    AdminPageComponent,
    NewBurgerComponent,
    FourOhFourComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
