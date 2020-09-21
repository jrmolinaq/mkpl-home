import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ChartsModule } from 'ng2-charts';
//import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CardsHomeComponent } from './cards-home.component';
import { OrderIncidentsComponent } from './order-incidents.component';
import { OrderItemComponent } from './item.component';
import { OrderTableComponent } from './order-table.component';
import { PurchaseNoticesComponent } from './purchase-notices.component';
import { PaginatorComponent } from './paginator.component';
import { RecentOrdersComponent } from './recent-orders.component';

import { CountDaysPipe } from './pipes/count-days.pipe';
import { ShortLargeStringsPipe } from './pipes/short-large-strings.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
		//ChartsModule
	],
	declarations: [
		AppComponent,
		CardsHomeComponent,
		OrderIncidentsComponent,
		OrderItemComponent,
		OrderTableComponent,
		PaginatorComponent,
		PurchaseNoticesComponent,
		RecentOrdersComponent,
		CountDaysPipe,
		ShortLargeStringsPipe
	],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [
		CountDaysPipe,
		ShortLargeStringsPipe
	],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}
