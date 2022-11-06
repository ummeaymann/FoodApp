import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderComponent } from './order/order.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddfoodprodComponent } from './addfoodprod/addfoodprod.component';
import { EditfoodprodComponent } from './editfoodprod/editfoodprod.component';
import { FoodOrderDetailsComponent } from './food-order-details/food-order-details.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';

import { EditstaffComponent } from './editstaff/editstaff.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { SearchPipe } from './Pipes/search.pipe'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductDetailComponent,
    OrderComponent,
    CustomerDetailComponent,
    AddfoodprodComponent,
    EditfoodprodComponent,
    FoodOrderDetailsComponent,
    StaffdetailComponent,

    EditstaffComponent,
     AddstaffComponent,
     SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
