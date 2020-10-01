import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayOrdersComponent } from '../components/display-orders/display-orders.component';


const routes: Routes = [
  {
    path:'',
    component:DisplayOrdersComponent
  },
  {
    path:'DisplayOrders',
    component:DisplayOrdersComponent
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
