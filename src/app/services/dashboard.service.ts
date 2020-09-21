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

  getDashboardInfo(role: string, currentUserId: any) {
    const pathByRole = getPathByRole(role, currentUserId);
    console.log('----', role, currentUserId);
    return this.http.get(`http://localhost:8080/o/ProviderCompraDigitalPortlet/api/cardsinfo/${pathByRole}`).pipe(map((response: any) => {
      console.log('----', response);
      if (role !== ROLES.backoffice) {
        return {
          inventory: {
            totalItems: response.total_products,
            updateDate: formatDate(response.products_last_update)
          },
          order: {
            ongoingOrders: response.orders_on_route,
            ordersToReview: response.orders_delayed,
            totalOrders: response.total_orders,
            ordersAccepted: response.orders_accepted
          }
        };
      }
      return {
        backOfficeData: {
          notices: response.notices_on_route,
          providers: response.providers,
          totalNotices: response.total_notices,
          noticesAccepted: response.notices_accepted
        }
      };
    }));
  }

}
