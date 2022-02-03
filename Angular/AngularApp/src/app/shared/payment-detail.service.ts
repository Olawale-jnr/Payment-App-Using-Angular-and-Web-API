import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  
  formData: PaymentDetail= new PaymentDetail();
  //readonly baseURL = 'http://localhost:61236/api/PaymentDetail';
  readonly baseURL = 'http://localhost:65510/Paymentdetail';
  list! : PaymentDetail[];


  constructor( private http: HttpClient ) { }

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }
}
