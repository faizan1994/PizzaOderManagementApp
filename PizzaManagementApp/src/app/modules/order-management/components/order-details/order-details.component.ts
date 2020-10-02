import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailModel } from '../../models/order-detail.model';
import { OrderDetailService } from '../../services/order-details/order-detail.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id',  'image','name', 'cost'];
  dataFromRoute: any;
  routeState: any;
  totalCost:number = 0;
  dataSource;
  addressFormatter;
  orderDetailsData: OrderDetailModel[];
  filteredOrderDetailsData: OrderDetailModel[] = [];
  constructor(
    private router: Router,
    private orderDetailService: OrderDetailService
    ) { 

    // to get data from route
    if(this.router.getCurrentNavigation().extras.state){
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if(this.routeState){
        this.dataFromRoute = this.routeState.data? this.routeState.data: null;
        console.log("data from route", this.dataFromRoute);
      }
    }
  }

  ngOnInit(): void {
    //order detail service
    this.orderDetailService.getOrdersDetails().subscribe(data => {
      if(data){
        this.orderDetailsData = data;
        this.getFilteredData(data);
      }
    });
    
  }

  async getFilteredData(data: OrderDetailModel[]){
    if(this.dataFromRoute){
      this.filteredOrderDetailsData = data
      .filter(el => el.Id === this.dataFromRoute.Id);
       console.log("filtered data", this.filteredOrderDetailsData);
       // assign the details of orders to datasource
       this.dataSource = this.filteredOrderDetailsData[0]? this.filteredOrderDetailsData[0].Items : []; 
    console.log(this.dataSource);
      
      // total cost
      this.filteredOrderDetailsData[0].Items.forEach(ele => {
        this.totalCost += ele.price
      });
    }
  }
  goToDisplay(){
    this.router.navigate(["/order-management/DisplayOrders"]);
  }
}
