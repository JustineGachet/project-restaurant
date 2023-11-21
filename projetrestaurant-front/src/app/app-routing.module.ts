import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component'
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:"home-page",component:HomePageComponent},
  {path:"food-page",component:FoodPageComponent},
  {path:"login-page",component:LoginPageComponent},
  {path:"menu-page",component:MenuPageComponent},
  {path:"reservation-page", component:ReservationPageComponent},
  {path:"login",component:LoginComponent},
  {path:"reservation-confirmation-page",component:ConfirmationPageComponent},
  {path:"admin-page", component: AdminPageComponent, canActivate: [AdminGuard]},
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
