import { STATES } from './constants/states';
import { Component, Input, Output, EventEmitter } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'order-table',
  templateUrl:
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-home/app/order-table.component.html'
})
export class OrderTableComponent {
  states = STATES;
  @Input() withOutTimer = false;
  @Input() paginateEnd = 10;
  @Input() paginateStart = 0;
  @Input() configTable: any[] = [];
  @Input() keyId: string;
  @Input() data: any[] = [];
  @Output() handleOrder = new EventEmitter<string>();
}
