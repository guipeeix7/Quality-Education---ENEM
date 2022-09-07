import { Component, OnInit } from '@angular/core';
import {StatesMapComponent} from './states-map/states-map.component'
import { StatesInfoService, StateInfoData,StateMoneyInfoData,ColotByStateInfoData, SchoolTypeByState } from '../../services/states-info.service';
import { ActivatedRoute } from '@angular/router'
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],

})
export class StatesComponent implements OnInit {


  public sigla: string
  public AvarageNote: string
  public doughnutChartLabelsRacialIdentity  : Label[] = ['identidade racial', 'Treineiros'];
  public doughnutChartDataRacialIdentity: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartTypeRacialIdentity: ChartType = 'doughnut';



  public doughnutChartLabelsTypeTest: Label[] = ['Etinias', 'Treineiros'];
  public doughnutChartDataTypeTest: MultiDataSet = [
    [350, 450, 400],
  ];
  public doughnutChartTypeTypeTest: ChartType = 'doughnut';



  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public color = '#665';


  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Media das notas entre estados' },
  ];
  stateData: StateInfoData[];
  moneyInfoData: StateMoneyInfoData[];
  ColorsBySatateData: ColotByStateInfoData[];
  SchoolByTypeData: SchoolTypeByState[];


  constructor(private route: ActivatedRoute,private StateService: StatesInfoService) { }

  ngOnInit(): void {
    this.sigla = this.route.snapshot.paramMap.get('sigla')
    this.getStateData()
    this.getMoneyInfo()
    this.getColorsBySatateData()
    this.getSchoolByTypeData()
  }

  getStateData = () => {
    this.StateService.getStateData(this.sigla).subscribe((data) => {
      this.stateData = JSON.parse(data)

      this.setPieData(this.stateData, ['bunda', 'Bunda2']);
      this.AvarageNote = this.stateData[0]['NU_GERAL'].toFixed(1);

    })
  }

  getMoneyInfo = () => {
    this.StateService.getMoneyInfo(this.sigla).subscribe((data) => {
      this.moneyInfoData = JSON.parse(data)
    })
  }

  getColorsBySatateData = () => {
    this.StateService.getColorsByStateInfo(this.sigla).subscribe((data) => {
      this.moneyInfoData = JSON.parse(data)
    })
  }

  getSchoolByTypeData = () => {
    this.StateService.getSchoolTypeByState(this.sigla).subscribe((data) => {
      this.moneyInfoData = JSON.parse(data)
    })
  }

  setPieData = (data, varNames) => {
    console.log(data)
    // let chartData = [];
    // let chartLabels = [];

    // let chartData2 = [];
    // for (const k in data) {
    //   chartData.push(data[k][varNames[0]])
    //   chartLabels.push(data[k][varNames[1]])
    // }
    // this.barChartDataValues2 = chartData
    // this.barChartLabels2 = chartLabels
    // this.barChartData2  = [
    //   { data: this.barChartDataValues2, label: this.chartLabel2},
    // ];

    // this.barChartLabelsb2 = chartLabels
    // this.barChartDatab2  = [
    //   { data: chartData2, label: this.chartLabel2},
    // ];
  }

}
