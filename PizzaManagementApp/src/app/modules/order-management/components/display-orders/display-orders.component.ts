import { Component, OnInit } from '@angular/core';
import { PizzaOrderReceivedModel } from '../../models/pizza-order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.scss']
})
export class DisplayOrdersComponent implements OnInit {
  ordersRecievedData: PizzaOrderReceivedModel[];
  constructor(private OrderSevice: OrderService) { }

  ngOnInit(): void {
    this.OrderSevice.getAllReceivedOrders().subscribe(data => {
      if(data){
        this.ordersRecievedData = data;
        console.log(this.ordersRecievedData);
      }
    })
  }

}
