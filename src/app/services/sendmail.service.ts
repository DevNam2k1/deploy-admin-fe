import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/Order';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  url = 'https://deploy-backend-production-4592.up.railway.app/api/send-mail'

  constructor(private httpClient: HttpClient) { }

  sendMailOrder(order:Order) {
    return this.httpClient.post(this.url+'/order', order);
  }
}
