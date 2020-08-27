import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TABLE_HEADERS } from './constants/purchase-notices-constant';
import { ManualPurchase } from './interfaces/notices.interface';
import { NoticeService } from './services/notice.service';

declare const Liferay: any;

@Component({
  selector: 'purchase-notices',
  templateUrl:
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-home/app/purchase-notices.component.html'
})
export class PurchaseNoticesComponent implements OnInit {
  manualPurchases: any[];
  configTable = TABLE_HEADERS;
  orderBy = true;
  order = 'date';
  limit = 10;
  // TODO se cambian nombres con guión bajo
  paginatorData: { 
    number: number; 
    size: number; 
    total_elements: number; 
    sort: string; 
    last: boolean; 
    number_of_elements: number; 
    total_pages: number; 
    first: boolean;
  };

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.orderBy = true;
    this.order = 'date';
    this.getManualPurchases();
  }

  getManualPurchases(page = 0) {
    const orderBy = this.orderBy ? 'asc' : 'desc';

    /* TODO service
    this.noticeService.getManualPurchases(page, this.limit, this.order, orderBy)
      .pipe(map(({ data, ...paginatorData }) => {
        return {
          manualp: this.tranformData(data),
          paginatorData
        };
    })).subscribe(({ manualp, paginatorData }) => {
      this.manualPurchases = manualp;
      this.paginatorData = paginatorData;
    });*/

    // TODO borrar dummy
    this.noticeService.getManualPurchases(page, this.limit, this.order, orderBy)
      .pipe(map(({ data, ...paginatorData }) => {
        return {
          manualp: this.tranformData(data),
          paginatorData
        };
    })).subscribe(({ manualp, paginatorData }) => {
      this.manualPurchases = manualp;
      this.paginatorData = paginatorData;
    });
  }

  currentPageChange(page: number) {
    this.getManualPurchases(page);
  }

  handleOrder(orderKey: string) {
    this.order = orderKey;
    this.orderBy = !this.orderBy;
    this.getManualPurchases();
  }

  tranformData(manualp: ManualPurchase[]) {
    return manualp.map( (manual: any) => ({
      date: manual.date,
      orderId: manual.order_id,
      noticeId: manual.notice_id,
      cantProducts: manual.cant_products,
      cantManualProducts: manual.cant_manual_products
    }));
  }

}
