import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  total: any;
  orderConfirmationNumber: string;

  constructor(private route: ActivatedRoute) {
    let confirmationCode = '';
    for(let i = 0; i < 12; i++){
      confirmationCode += Math.round(Math.random() * 100).toString();
    }
    this.orderConfirmationNumber = confirmationCode;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const passedTotal = params['params'].total;
      const formattedTotal = parseFloat(passedTotal).toFixed(2);
      this.total = formattedTotal;
    })
  }
}
