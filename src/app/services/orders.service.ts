import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { OrderModel } from '../models/order-model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
 
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl: string;
  constructor(private http: HttpClient) { this.baseUrl = environment.api_url + "Orders" }

  public addOrder(order: OrderModel): Observable<ApiResponse<OrderModel>>{
    return this.http.post<ApiResponse<OrderModel>>(this.baseUrl + "/AddOrder", order)
  }

}
