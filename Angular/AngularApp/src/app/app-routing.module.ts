import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetail } from './shared/payment-detail.model';

const routes: Routes = [
{path: '', component: PaymentDetailFormComponent},
{path: 'records', component: PaymentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
