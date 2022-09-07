import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { NgChartsModule } from 'ng2-charts';
// import { NgChartsModule } from 'ng2-charts/ng2-charts';
import { Label, Color } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { CountryInfoService, StateInfo } from '../../services/country-info.service';
import { Subscriber } from 'rxjs';

// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
// next: (data: Config) => this.config = { ...data }, // success path
// error: error => this.error = error, // error path

export class HomepageComponent implements OnInit {
  statesData: StateInfo[] | undefined;
  error: any;
  headers: string[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartDataValues = [];
  chartLabel = 'Media das notas entre estados'
  barChartData: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colors: Color[] = [
    {
      backgroundColor:'#56814f'
    }
  ];

  displayDetails: boolean;
  constructor(private stateInfoService: CountryInfoService) {
     this.displayDetails = false;
  }

  clear() {
    this.error = undefined;
    this.headers = [];
  }

  ngOnInit(): void {
    this.stateInfoService.getStates().subscribe((statesData) => {
        this.statesData = JSON.parse(statesData);
        let chartData = [];
        let chartLabels = [];
        for (const k in this.statesData) {
          chartData.push(this.statesData[k]['nuNotaMt'])
          chartLabels.push(this.statesData[k].stateSigla)
        }
        this.barChartDataValues = chartData
        this.barChartLabels = chartLabels
        console.log(chartData)
        this.barChartData  = [
          { data: this.barChartDataValues, label: this.chartLabel},
        ];
      }
    );
  }
}
