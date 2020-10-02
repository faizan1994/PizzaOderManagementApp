import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayOrdersComponent } from '../components/display-orders/display-orders.component';
import { OrderDetailsComponent } from '../components/order-details/order-details.component';


const routes: Routes = [
  {
    path:'',
    component:DisplayOrdersComponent
  },
  {
    path:'DisplayOrders',
    component:DisplayOrdersComponent
  },
  {
    path:'OrderDetails',
    component:OrderDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class OrderManagementRoutingModule { }
