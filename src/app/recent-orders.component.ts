import { Component, OnInit } from '@angular/core';
import { NoticeService } from './services/notice.service';
import { ROLES } from './constants/auth';

import { Observable } from 'rxjs';

declare const Liferay: any;

@Component({
  selector: 'recent-orders',
  templateUrl:
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-home/app/recent-orders.component.html'
})
export class RecentOrdersComponent implements OnInit {
  dataPaginator: any;
  // TODO se quita observable $recentOrders: Observable<any>;
  recentOrders: any;
  currentUserId: number;
  userRole: string;

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    // TODO traer de la sesión datos de rol
    //let user = {'role': ROLES.provider, 'providerId': 1, 'subsidiaryId': 1};
    let user = {'role': ROLES.subsidiary, 'providerId': 1, 'subsidiaryId': 1};

    this.currentUserId = user.role === ROLES.provider ? user.providerId : user.subsidiaryId;
    this.userRole = user.role;
    this.getRecentNotices();
  }

  getRecentNotices(page?: number) {
    /* TODO comentado normal 
    this.$recentOrders = this.noticeService
    .getNoticesByProvider(this.userRole, this.currentUserId, 'recent', page);*/

    let data = this.noticeService.getNoticesByProvider2();
    
    let datos = {
      data: data,
      dataPaginator: {
        "last":true,
        "total_pages":1,
        "total_elements":2,
        "size":10,
        "number":0,
        "sort":"",
        "first":true,
        "number_of_elements":2
      } 
    };
      
    this.recentOrders = datos;
  }

  currentPageChange(page: number) {
    this.getRecentNotices(page);
  }
}
