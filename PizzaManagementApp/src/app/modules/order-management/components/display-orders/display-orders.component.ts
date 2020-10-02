import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { PizzaOrderReceivedModel, Status } from '../../models/pizza-order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.scss']
})
export class DisplayOrdersComponent implements OnInit {
  @ViewChild('menu',{static: false}) clickMatMenuTrigger: MatMenuTrigger;
  dataToPassChild;
  ordersRecievedData: PizzaOrderReceivedModel[];
  constructor(
    private OrderSevice: OrderService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.OrderSevice.getAllReceivedOrders().subscribe(data => {
      if(data){
        const ordersData = data;
        this.ordersRecievedData = this.tranformData(ordersData);
        console.log(this.ordersRecievedData);
      }
    })
  }
  tranformData(data: PizzaOrderReceivedModel[]){
    data.forEach(ele => {
      if(ele.CurrentStatus === Status.Recieved){
        ele.CurrentStatus = Status.Recieved;
      } else if(ele.CurrentStatus === Status.Preparing){
        ele.CurrentStatus = Status.Preparing;
      } else {
        ele.CurrentStatus = Status.Ready;
      }
    });

    return data;
  }

  // passing the order data through route
  openOrderDetails(order: PizzaOrderReceivedModel){
    console.log(this.router);
    this.router.navigate(["/order-management/OrderDetails"],
    {
      state: {
        data: order
      }
    });
  }

  selectedStatus(value:string , id: number){
    console.log(value, id);
    this.ordersRecievedData.forEach(el => {
      if(el.Id === id){
        el.CurrentStatus = value;
      }
    });
    console.log(this.ordersRecievedData);
    }
}
