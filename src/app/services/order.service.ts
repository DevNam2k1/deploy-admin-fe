import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  urlOD = 'https://deploy-backend-production-4592.up.railway.app/api/order-detail';

  urlO = 'https://deploy-backend-production-4592.up.railway.app/api/orders';

  constructor(private httpClient: HttpClient) { }

  getOrder(id:number) {
    return this.httpClient.get(this.urlO+'/'+id);
  }

  update(id:number, order:Order) {
    return this.httpClient.put(this.urlO+'/'+id, order);
  }

  getByOrder(id:number) {
    return this.httpClient.get(this.urlOD+'/order/'+id);
  }

  getAllOrder() {
    return this.httpClient.get(this.urlO);
  }

  getWait() {
    return this.httpClient.get(this.urlO+'/wait');
  }
}
