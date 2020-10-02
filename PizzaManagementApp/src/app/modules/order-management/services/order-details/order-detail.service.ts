import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetailModel } from '../../models/order-detail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  private url = "api/OrderDetails";
  constructor(private http: HttpClient) { }

  getOrdersDetails(): Observable<OrderDetailModel[]> {
    return this.http.get<OrderDetailModel[]>(this.url);
  }
}
