import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component"
import { LoginViewComponent } from "./public/components/login-view/login-view.component";
import { RegisterViewComponent } from "./public/components/register-view/register-view.component";
import { ServicesContentViewComponent } from "./services-content/pages/services-content-view/services-content-view.component";
import { BookingViewComponent } from "./booking/pages/booking-view/booking-view.component";
import { VeterinaryManagementComponent } from "./veterinary/pages/veterinary-management/veterinary-management.component";
import { RequestViewComponent } from "./support/pages/request-view/request-view.component";
import { NotFoundComponent } from "./public/pages/not-found/not-found.component";
import {ProductsViewComponent} from "./shop/pages/products-view/products-view.component";
import {ProductsListComponent} from "./shop/components/products-list/products-list.component";
import {VeterinaryListComponent} from "./veterinary/components/veterinary-list/veterinary-list.component";
import {BookingCreateComponent} from "./booking/components/booking-create/booking-create.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'signup', component: RegisterViewComponent },
  { path: 'services', component: ServicesContentViewComponent },
  { path: 'veterinary', component: VeterinaryListComponent },
  { path: 'products', component: ProductsViewComponent },
  { path: 'contact-us', component: RequestViewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
