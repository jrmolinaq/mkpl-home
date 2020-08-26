import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { getPathByRole } from '../utils/request';
import { formatDate } from '../utils/date.utils';
import { ROLES } from '../constants/auth';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  // TODO service
  getDashboardInfo(role: string, currentUserId: any) {
    const pathByRole = getPathByRole(role, currentUserId);
    return this.http.get(`rutaEndpoint/info/${pathByRole}`).pipe(map((response: any) => {
      if (role !== ROLES.backoffice) {
        return {
          inventory: {
            totalItems: response.totalProducts,
            updateDate: formatDate(response.productsLastUpdate)
          },
          order: {
            ongoingOrders: response.ordersOnRoute,
            ordersToReview: response.ordersDelayed,
            totalOrders: response.totalOrders,
            ordersAccepted: response.ordersAccepted
          }
        };
      }
      return {
        backOfficeData: {
          notices: response.noticesOnRoute,
          providers: response.providers,
          totalNotices: response.totalNotices,
          noticesAccepted: response.noticesAccepted
        }
      };
    }));
  }

  // TODO Servicio dummy
  getDashboardInfo2(role: string, currentUserId: any) {    
    if (role !== ROLES.backoffice) {
      return {
        inventory: {
          totalItems: 10,
          updateDate: formatDate(new Date('2020-07-31'))
        },
        order: {
          ongoingOrders: 2,
          ordersToReview: 2,
          totalOrders: 6,
          ordersAccepted: 2
        }
      };
    }
    return {
      backOfficeData: {
        notices: 2,
        providers: 2,
        totalNotices: 6,
        noticesAccepted: 2
      }
    };
  }
}
