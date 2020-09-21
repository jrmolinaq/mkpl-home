import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './interfaces/order.interface';
import { OrderService } from './services/order.service';
import { STATES } from './constants/states';

declare const Liferay: any;

@Component({
  selector: 'order-incidents',
  templateUrl:
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-home/app/order-incidents.component.html'
})

export class OrderIncidentsComponent implements OnInit {
  states = STATES;
  notData = false;
  criticalOrders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getCriticalOrders().subscribe( orders => {
      this.criticalOrders = orders;
    });
  }
}
