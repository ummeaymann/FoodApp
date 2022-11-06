import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodprodComponent } from './addfoodprod/addfoodprod.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { EditfoodprodComponent } from './editfoodprod/editfoodprod.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { FoodOrderDetailsComponent } from './food-order-details/food-order-details.component';
import { AuthGuard } from './Guard/auth.guard';
import { StaffDetailsGuard } from './Guard/staff-details.guard';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';

const routes: Routes = [{path:"login",component:LoginComponent},
                        {path:"reg",component:RegistrationComponent},
                      {path:"products",component:ProductDetailComponent,canActivate:[AuthGuard]},
                      {path:"order",component:OrderComponent},
                      {path:"customer",component:CustomerDetailComponent},
                      {path:"add-product",component:AddfoodprodComponent},
                      {path:"edit-product/:id",component:EditfoodprodComponent},
                      {path:"staff-detail",component:StaffdetailComponent,canActivate:[StaffDetailsGuard]},
                      {path:"editstaff/:id",component:EditstaffComponent},
                      {path:"addstaff",component:AddstaffComponent},
                      {path:"foododerdetails",component:FoodOrderDetailsComponent}

                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
