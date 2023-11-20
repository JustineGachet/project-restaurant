import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    ConfirmationPageComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    LoginComponent,
    AppRoutingModule,
    HomePageComponent,
    AdminPageComponent,
    AdminTableComponent,
    CardComponent,
    MenuPageComponent,
    FoodPageComponent,
    MatCardModule,  
    MatDialogModule,
    RouterModule,
    ReservationPageComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
