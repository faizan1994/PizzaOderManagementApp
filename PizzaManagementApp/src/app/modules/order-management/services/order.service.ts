import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaOrderReceivedModel } from '../models/pizza-order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = "api/PizzaOrders";
  constructor(private http: HttpClient) { }

  getAllReceivedOrders(): Observable<PizzaOrderReceivedModel[]>{
    return this.http.get<PizzaOrderReceivedModel[]>(this.url);
  }
}
