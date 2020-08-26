export const CHART_CONFIG = {
  firstColor: '#EFA51E',
  secondColor: '#E24D56',
  borderChartColor: '#E7ECEF',
  firtsChartLabel: 'Aceptados',
  secondChartLabel: 'No aceptados',
  chartOptions: {
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      bodyFontSize: 10
    }
  },
  initialDonutColors: [
    {
      backgroundColor: ['#DCDCDE', '#DCDCDE'],
      hoverBackgroundColor: ['#DCDCDE', '#DCDCDE'],
      borderColor: '#DCDCDE'
    }
  ],
  initialChartLabels: ['Sin datos'],
  chartType: 'doughnut'
};

export const FULL_PERCENTAGE = 100;
