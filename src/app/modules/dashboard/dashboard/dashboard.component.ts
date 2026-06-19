import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Chart } from 'chart.js/auto';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dashboardService: DashboardService,  private router: Router) {}

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe((res) => {
      this.data = res;
      console.log('API DATA:', this.data);
      this.buildBarChart();
      this.buildDonutChart();
    });
  }

  buildBarChart() {
    const chartBar = this.data?.chartBar || [];

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: chartBar.map((x: any) => x.name),
        datasets: [
          {
            label: 'Bar Data',
            data: chartBar.map((x: any) => x.value),
             backgroundColor: [
            '#adb5bd',
          ]
          },
        ],
      },
    });
  }

  buildDonutChart() {
  new Chart('donutChart', {
    type: 'doughnut',
    data: {
      labels: this.data.chartDonut.map((x: any) => x.name),
      datasets: [
        {
          data: this.data.chartDonut.map((x: any) => x.value),
          backgroundColor: [
            '#e9ecef',
            '#495057',
            '#6c757d',
            '#adb5bd',
            '#ced4da',
            '#dee2e6'
          ]
        }
      ]
    }
  });
}
  logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}
}
