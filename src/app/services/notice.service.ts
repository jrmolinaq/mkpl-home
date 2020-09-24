import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  ListNoticeResponse,
  NoticePaginator,
  ListManualPurchaseResponse,
  ManualPurchasePaginator
} from '../interfaces/notices.interface';

import { Provider } from '../interfaces/provider.interface';
import { Subsidiaries } from '../interfaces/subsidiaries.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getPathByRole } from '../utils/request';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  constructor(private http: HttpClient) {}

  getNotices(
    status: string,
    page = 0,
    limit = 10,
    orderBy = 'descending',
    order = 'id'
  ): Observable<NoticePaginator> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('order_by', orderBy.toString())
      .set('order', order.toString())
      .set('limit', limit.toString());
      // TODO actualizar ruta endpoint
    return this.http
      .get<ListNoticeResponse>(
        `rutaEndpoint/notice/status/${status}`,
        { params }
      )
      .pipe(
        map(({ content, ...noticeDataPaginator }) => ({
          data: content,
          ...noticeDataPaginator,
        }))
      );
  }

  getManualPurchases(
    page = 0,
    limit = 10,
    order: string,
    orderBy: string
  ): Observable<ManualPurchasePaginator> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
      // .set('order', order)
      // .set('orderBy', orderBy);
      // TODO actualizar ruta endpoint David
    return this.http
      .get<ListManualPurchaseResponse>(
        `http://localhost:8080/o/ProviderCompraDigitalPortlet/api/order/pagemanualpurchase/${orderBy}`,
        { params }
      )
      .pipe(
        map(({ content, ...manualPurchasesDataPaginator }) => ({
          data: content,
          ...manualPurchasesDataPaginator,
        }))
      );
  }

  getNoticesFilter(
    filter: string,
    page = 0,
    limit = 10,
    orderBy = 'descending',
    order = 'id'
  ): Observable<NoticePaginator> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('order_by', orderBy.toString())
      .set('order', order.toString())
      .set('limit', limit.toString());
      // TODO actualizar ruta endpoint
    return this.http
      .get<ListNoticeResponse>(
        `rutaEndpoint/notice/filter/${filter}`,
        { params }
      )
      .pipe(
        map(({ content, ...noticeDataPaginator }) => ({
          data: content,
          ...noticeDataPaginator,
        }))
      );
  }
  getNoticeDetail(id: number | string) {
    // TODO actualizar ruta endpoint
    return this.http.get(`rutaEndpoint/notice/${id}`);
  }

  getProvider() {
    return this.http.get<Provider>(
      // TODO actualizar ruta endpoint
      `rutaEndpoint/subocol/provider`
    );
  }

  getSubsidiary(id: any) {
    return this.http.get<Subsidiaries>(
      // TODO actualizar ruta endpoint
      `rutaEndpoint/subsidiary/provider/${id}`
    );
  }

  manualPurchase(body: any) {
    // TODO actualizar ruta endpoint
    return this.http.post(`rutaEndpoint/order/manual`, body);
  }

  getNoticesByProvider(
    currentRole: string | number,
    currentUserId: any,
    status: string,
    page = 0,
    orderBy = 'descending',
    limit = 10
  ) {
    const path = getPathByRole(currentRole, currentUserId);
    const params = new HttpParams()
      .set('status', status)
      .set('orderBy', orderBy)
      .set('limit', limit.toString())
      .set('page', page.toString());
    // TODO actualizar ruta endpoint
    return this.http
      .get<ListNoticeResponse>(`http://localhost:8080/o/ProviderCompraDigitalPortlet/api/notice/${path}`, {
        params,
      })
      .pipe(
        map(({ content, ...dataPaginator }) => ({
          data: content,
          dataPaginator,
        }))
      );
  }
}