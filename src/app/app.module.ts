import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServicesContentViewComponent } from './services-content/pages/services-content-view/services-content-view.component';
import { VeterinaryListComponent } from './veterinary/components/veterinary-list/veterinary-list.component';
import { VeterinaryManagementComponent } from './veterinary/pages/veterinary-management/veterinary-management.component';
import { BookingCreateComponent } from './booking/components/booking-create/booking-create.component';
import { BookingViewComponent } from './booking/pages/booking-view/booking-view.component';
import { AppointmentListComponent } from './appointment/components/appointment-list/appointment-list.component';
import { BillingEditComponent } from './billing/components/billing-edit/billing-edit.component';
import { BillingViewComponent } from './billing/pages/billing-view/billing-view.component';
import { RequestAddComponent } from './support/components/request-add/request-add.component';
import { RequestViewComponent } from './support/pages/request-view/request-view.component';
import { ProfileViewAndEditComponent } from './profile/components/profile-view-and-edit/profile-view-and-edit.component';
import { ProductsListComponent } from './shop/components/products-list/products-list.component';
import { ProductsViewComponent } from './shop/pages/products-view/products-view.component';
import { HomeComponent } from './public/pages/home/home.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { PaymentConfirmationComponent } from './public/pages/payment-confirmation/payment-confirmation.component';
import { LoginViewComponent } from './public/components/login-view/login-view.component';
import { RegisterViewComponent } from './public/components/register-view/register-view.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton, MatButtonModule, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatToolbar} from "@angular/material/toolbar";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgOptimizedImage} from "@angular/common";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatDivider} from "@angular/material/divider";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    ServicesContentViewComponent,
    VeterinaryListComponent,
    VeterinaryManagementComponent,
    BookingCreateComponent,
    BookingViewComponent,
    AppointmentListComponent,
    BillingEditComponent,
    BillingViewComponent,
    RequestAddComponent,
    RequestViewComponent,
    ProfileViewAndEditComponent,
    ProductsListComponent,
    ProductsViewComponent,
    HomeComponent,
    NotFoundComponent,
    PaymentConfirmationComponent,
    LoginViewComponent,
    RegisterViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatInput,
    MatIcon,
    MatIconModule,
    MatIconButton,
    MatCheckbox,
    MatSlideToggle,
    MatButton,
    MatButtonModule,
    MatLabel,
    MatCard,
    MatCardModule,
    MatCardContent,
    MatFabButton,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatToolbar,
    MatHint,
    MatFormFieldModule,
    MatGridTile,
    MatGridList,
    NgOptimizedImage,
    MatButtonToggle,
    MatDivider,
    MatRadioGroup,
    MatRadioButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
