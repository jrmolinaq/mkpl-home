import { Component, OnInit } from '@angular/core';

import { ROLES } from './constants/auth';
import { CHART_CONFIG, FULL_PERCENTAGE } from './constants/cards-home-constants';
import { DashboardService } from './services/dashboard.service';
// dummy
import { UserService } from './services/user.service';

const {
  firstColor,
  secondColor,
  borderChartColor,
  firtsChartLabel,
  secondChartLabel,
  chartOptions,
  initialDonutColors,
  initialChartLabels,
  chartType
} = CHART_CONFIG;

declare const Liferay: any;

@Component({
  selector: 'cards-home',
  templateUrl:
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-home/app/cards-home.component.html'
})
export class CardsHomeComponent implements OnInit {
  isBackoffice: boolean;
  isProvider: boolean;
  graphTitle: string;
  accepted = 0;
  rejected = 0;
  pieChartOptions = chartOptions;
  pieChartLabels = initialChartLabels;
  pieChartData = [100];
  pieChartType = chartType;
  pieChartLegend = true;
  doughnutColors = initialDonutColors;
  inventory = {
    totalItems: 0,
    updateDate: '00/00/0000'
  };
  order = {
    ongoingOrders: 0,
    ordersToReview: 0,
  };
  backOfficeData = {
    notices: 0,
    providers: 0,
  };
  acceptanceLevel = {
    accepted: 0,
    total: 0
  };

  constructor(
    private dashboardService: DashboardService, 
    private userService: UserService
  ) { }

  ngOnInit() {
    /* TODO llamado a servicio
    this.auth0Service.getProfile().subscribe(({ role, subsidiaryId, providerId }) => {
      this.isProvider = role === ROLES.provider;
      this.isBackoffice = role === ROLES.backoffice;
      this.graphTitle = this.isBackoffice ? 'avisos' : 'pedidos';
      this.dashboardService.getDashboardInfo(role, subsidiaryId || providerId).subscribe((response) => {
        if (!this.isBackoffice) {
          this.inventory = response.inventory;
          this.order = response.order;
          this.acceptanceLevel = {
            accepted: response.order.ordersAccepted,
            total: response.order.totalOrders
          };
        } else {
          this.backOfficeData = response.backOfficeData;
          this.acceptanceLevel = {
            accepted: response.backOfficeData.noticesAccepted,
            total: response.backOfficeData.totalNotices
          };
        }
        if (this.acceptanceLevel.accepted || this.acceptanceLevel.total) {
          this.accepted = Number(Math.floor(((this.acceptanceLevel.accepted / this.acceptanceLevel.total) * 100)).toFixed(1));
          this.rejected = FULL_PERCENTAGE - this.accepted;
          this.pieChartData = [this.accepted, this.rejected];
          this.pieChartLabels = [firtsChartLabel, secondChartLabel];
          this.doughnutColors = [
            {
              backgroundColor: [firstColor, secondColor],
              hoverBackgroundColor: [firstColor, secondColor],
              borderColor: borderChartColor
            }
          ];
        }
      });
    });*/

    // TODO llamado a dummy
    let user = this.userService.getProfile();
    let role = user.role;
    let subsidiaryId = user.subsidiaryId;
    let providerId = user.providerId;

    this.isProvider = role === ROLES.provider;
    this.isBackoffice = role === ROLES.backoffice;
    this.graphTitle = this.isBackoffice ? 'avisos' : 'pedidos';

    let response: any = this.dashboardService.getDashboardInfo2(role, subsidiaryId || providerId);

    if (!this.isBackoffice) {
      this.inventory = response.inventory;
      this.order = response.order;
      this.acceptanceLevel = {
        accepted: response.order.ordersAccepted,
        total: response.order.totalOrders
      };
    } else {
      this.backOfficeData = response.backOfficeData;
      this.acceptanceLevel = {
        accepted: response.backOfficeData.noticesAccepted,
        total: response.backOfficeData.totalNotices
      };
    }
    
    if (this.acceptanceLevel.accepted || this.acceptanceLevel.total) {
      this.accepted = Number(Math.floor(((this.acceptanceLevel.accepted / this.acceptanceLevel.total) * 100)).toFixed(1));
      this.rejected = FULL_PERCENTAGE - this.accepted;
      this.pieChartData = [this.accepted, this.rejected];
      this.pieChartLabels = [firtsChartLabel, secondChartLabel];
      this.doughnutColors = [
        {
          backgroundColor: [firstColor, secondColor],
          hoverBackgroundColor: [firstColor, secondColor],
          borderColor: borderChartColor
        }
      ];
    }
  }
}
