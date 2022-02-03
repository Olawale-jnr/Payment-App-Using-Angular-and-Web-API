import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }

  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(paymentDetailId: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(paymentDetailId)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }

  // resetForm(form: NgForm) {
  //   form.form.reset();
  //   this.service.formData = new PaymentDetail();
  // }

  // clickEvent(form: NgForm){

  //   if (confirm('Are you sure to Update this record ?')) {
  //     this.service.putPaymentDetail().subscribe(
  //       res => {
  //         this.resetForm(form);
  //         this.service.refreshList();
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     )
  //   }
  // }

  

}
