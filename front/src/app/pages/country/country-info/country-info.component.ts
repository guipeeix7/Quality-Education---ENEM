import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { CountryInfoService, CountryInfo } from '../../../services/country-info.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  constructor(private CountryInfoService: CountryInfoService) {
  }

  infoTabs: string[] = ['Nota geral', 'Por raça', 'Relacionamento', 'Tipo de escola','Escola e Raça'];

  colorPallet: string[] = ['#ff6384','#4bc0c0', '#ff9e41', '#9966ff', '#36a2eb', '#ffcd56', '#c9cbcf']


  /* Chart 1 */
  statesData: CountryInfo[] | undefined;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartDataValues = [];
  chartLabel = 'Media das notas entre estados'
  barChartData: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colors: Color[] = [{
    backgroundColor:this.colorPallet[4]
  }];
  selectedInforBars:string = this.infoTabs[0]
  /**End chart 1 */

  /** Chart 2 */
  data2: CountryInfo[] | undefined;
  barChartOptions2: ChartOptions = {
    responsive: true,
  };
  barChartLabels2: Label[] = [];
  barChartType2: ChartType = 'bar';
  barChartDataValues2 = [];
  chartLabel2 = 'Media das notas entre raças'
  barChartData2: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colors2: Color[] = [{
    backgroundColor: [
      this.colorPallet[0],
      this.colorPallet[1],
      this.colorPallet[2],
      this.colorPallet[3],
      this.colorPallet[4],
      this.colorPallet[5],
      // (colorPallet) => this.colorPallet = this.colorPallet
      // 'Red',
      // 'Grey',
      // 'Black',
      // 'Purple',
      // 'Yellow',
      // 'Green',
    ]
  }];

  datab2: CountryInfo[] | undefined;
  barChartOptionsb2: ChartOptions = {
    responsive: true,
  };
  barChartLabelsb2: Label[] = [];
  barChartTypeb2: ChartType = 'doughnut';
  barChartDataValuesb2 = [];
  chartLabelb2 = 'Media das notas por raças'
  barChartDatab2: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colorsb2: Color[] = [{
    backgroundColor: [
      this.colorPallet[0],
      this.colorPallet[1],
      this.colorPallet[2],
      this.colorPallet[3],
      this.colorPallet[4],
      this.colorPallet[5],
    ]
  }];
  /** End chart 2 */

  /** Chart 3 */
  data3: CountryInfo[] | undefined;
  barChartOptions3: ChartOptions = {
    responsive: true,
  };
  barChartLabels3: Label[] = [];
  barChartType3: ChartType = 'bar';
  barChartDataValues3 = [];
  chartLabel3 = 'Media das notas de acordo com o estado civil'
  barChartData3: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colors3: Color[] = [{
    backgroundColor: [
      this.colorPallet[0],
      this.colorPallet[1],
      this.colorPallet[2],
      this.colorPallet[3],
      this.colorPallet[4],
    ]
  }];

  datab3: CountryInfo[] | undefined;
  barChartOptionsb3: ChartOptions = {
    responsive: true,
  };
  barChartLabelsb3: Label[] = [];
  barChartTypeb3: ChartType = 'doughnut';
  barChartDataValuesb3 = [];
  // chartLabelb3 = 'Media das notas entre estados'
  barChartDatab3: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colorsb3: Color[] = [{
    backgroundColor: [
      this.colorPallet[0],
      this.colorPallet[1],
      this.colorPallet[2],
      this.colorPallet[3],
      this.colorPallet[4],
    ]
  }];
  /** End of chart 3 */

  /** Chart 4 */
  data4: CountryInfo[] | undefined;
  barChartOptions4: ChartOptions = {
    responsive: true,
  };
  barChartLabels4: Label[] = [];
  barChartType4: ChartType = 'bar';
  barChartDataValues4 = [];
  chartLabel4 = 'Media das notas entre escolas'
  barChartData4: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colors4: Color[] = [{
    backgroundColor:[
      this.colorPallet[0],
      this.colorPallet[1],
      this.colorPallet[2],
    ]
  }];

  datab4: CountryInfo[] | undefined;
  barChartOptionsb4: ChartOptions = {
    responsive: true,
  };
  barChartLabelsb4: Label[] = [];
  barChartTypeb4: ChartType = 'doughnut';
  barChartDataValuesb4 = [];
  chartLabelb4 = 'Media das notas entre estados'
  barChartDatab4: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  colorsb4: Color[] = [{
    backgroundColor:[
      this.colorPallet[0],
      this.colorPallet[1],
      this.colorPallet[2],
    ]
  }];
  /** end chart 4 */

  /** Begin bunch of charts 5 (: */
    data5: CountryInfo[] | undefined;
    barChartOptions5: ChartOptions = {
      responsive: true,
    };
    barChartLabels5: Label[] = [];
    barChartType5: ChartType = 'bar';
    barChartDataValues5 = [];
    chartLabel5 = 'Media das notas entre escolas por raça'
    barChartData5: ChartDataSets[] = [
      { data: [], label: '' },
    ];
    colors5: Color[] = [{
      backgroundColor:[
        this.colorPallet[0],
        this.colorPallet[1],
        this.colorPallet[2],
        this.colorPallet[3],
        this.colorPallet[4],
      ]
    }];

    data5a: CountryInfo[] | undefined;
    barChartOptions5a: ChartOptions = {
      responsive: true,
    };
    barChartLabels5a: Label[] = [];
    barChartType5a: ChartType = 'pie';
    barChartDataValues5a = [];
    chartLabel5a = 'Proporção de raça por tipo de escola'
    barChartData5a: ChartDataSets[] = [
      { data: [], label: '' },
    ];
    colors5a: Color[] = [{
      backgroundColor:[
        this.colorPallet[0],
        this.colorPallet[1],
        this.colorPallet[2],
        this.colorPallet[3],
        this.colorPallet[4],
      ]
    }];


    data5b1: CountryInfo[] | undefined;
    barChartOptions5b1: ChartOptions = {
      responsive: true,
    };
    barChartLabels5b1: Label[] = [];
    barChartType5b1: ChartType = 'bar';
    barChartDataValues5b1 = [];
    chartLabel5b1 = 'Media das notas entre escolas por raça'
    barChartData5b1: ChartDataSets[] = [
      { data: [], label: '' },
    ];
    colors5b1: Color[] = [{
      backgroundColor:[
        this.colorPallet[0],
        this.colorPallet[1],
        this.colorPallet[2],
        this.colorPallet[3],
        this.colorPallet[4],
      ]
    }];

    data5b2: CountryInfo[] | undefined;
    barChartOptions5b2: ChartOptions = {
      responsive: true,
    };
    barChartLabels5b2: Label[] = [];
    barChartType5b2: ChartType = 'pie';
    barChartDataValues5b2 = [];
    chartLabel5b2 = 'Proporção de raça por tipo de escola'
    barChartData5b2: ChartDataSets[] = [
      { data: [], label: '' },
    ];
    colors5b2: Color[] = [{
      backgroundColor:[
        this.colorPallet[0],
        this.colorPallet[1],
        this.colorPallet[2],
        this.colorPallet[3],
        this.colorPallet[4],
      ]
    }];


    data5c1: CountryInfo[] | undefined;
    barChartOptions5c1: ChartOptions = {
      responsive: true,
    };
    barChartLabels5c1: Label[] = [];
    barChartType5c1: ChartType = 'bar';
    barChartDataValues5c1 = [];
    chartLabel5c1 = 'Media das notas entre escolas por raça'
    barChartData5c1: ChartDataSets[] = [
      { data: [], label: '' },
    ];
    colors5c1: Color[] = [{
      backgroundColor:[
        this.colorPallet[0],
        this.colorPallet[1],
        this.colorPallet[2],
        this.colorPallet[3],
        this.colorPallet[4],
    ]
    }];

    data5c2: CountryInfo[] | undefined;
    barChartOptions5c2: ChartOptions = {
      responsive: true,
    };
    barChartLabels5c2: Label[] = [];
    barChartType5c2: ChartType = 'pie';
    barChartDataValues5c2 = [];
    chartLabel5c2 = 'Proporção de raça por tipo de escola'
    barChartData5c2: ChartDataSets[] = [
      { data: [], label: '' },
    ];
    colors5c2: Color[] = [{
      backgroundColor:[
        this.colorPallet[0],
        this.colorPallet[1],
        this.colorPallet[2],
        this.colorPallet[3],
        this.colorPallet[4],
    ]
    }];
  /** End of a bunch of charts 5 */



  ngOnInit(): void {
    this.CountryInfoService.getStates().subscribe((statesData) => {
        this.statesData = JSON.parse(statesData);
        let chartData = [];
        let chartLabels = [];
        for (const k in this.statesData) {
          chartData.push(this.statesData[k]['nuNotaMt'])
          chartLabels.push(this.statesData[k].stateSigla)
        }
        this.barChartDataValues = chartData
        this.barChartLabels = chartLabels
        this.barChartData  = [
          { data: this.barChartDataValues, label: this.chartLabel},
        ];
      }
    );

    this.getChartData2()
    this.getChartData3()
    this.getChartData4()
    this.getChartData5()
  }

  getChartData2 = () => {
    this.CountryInfoService.getColors().subscribe((data) => {
      this.data2 = JSON.parse(data);

      let chartData = [];
      let chartLabels = [];

      let chartData2 = [];
      for (const k in this.data2) {
        chartData.push(this.data2[k]['nuNotaCh'])
        chartLabels.push(this.data2[k]['tpCorRaca'])
        chartData2.push(this.data2[k]['nSamples'])
      }
      this.barChartDataValues2 = chartData
      this.barChartLabels2 = chartLabels
      this.barChartData2  = [
        { data: this.barChartDataValues2, label: this.chartLabel2},
      ];

      this.barChartLabelsb2 = chartLabels
      this.barChartDatab2  = [
        { data: chartData2, label: this.chartLabel2},
      ];
    }
  );
  }

  getChartData3 = () => {
      this.CountryInfoService.getMaritalStatus().subscribe((data) => {
      this.data3 = JSON.parse(data);

      let chartData = [];
      let chartData2 = [];
      let chartLabels = [];
      for (const k in this.data3) {
        chartData.push(this.data3[k]['nuNotaCh'])
        chartLabels.push(this.data3[k]['tpEstadoCivil'])
        chartData2.push(this.data3[k]['nSamples'])

      }

      this.barChartDataValues3 = chartData
      this.barChartLabels3 = chartLabels
      this.barChartData3  = [
        { data: this.barChartDataValues3, label: this.chartLabel3},
      ];

      this.barChartLabelsb3 = chartLabels
      this.barChartDatab3  = [
        { data: chartData2, label: this.chartLabel3},
      ];
    })
  }

  getChartData4 = () => {
    this.CountryInfoService.getSchoolType().subscribe((data) => {
      this.data4 = JSON.parse(data);

      let chartData = [];
      let chartData2 = [];
      let chartLabels = [];
      for (const k in this.data4) {
        chartData.push(this.data4[k]['nuGeralTipoEscola'])
        chartLabels.push(this.data4[k]['tpEscola'])
        chartData2.push(this.data2[k]['nSamples'])

      }
      this.barChartDataValues4 = chartData
      this.barChartLabels4 = chartLabels
      this.barChartData4  = [
        { data: this.barChartDataValues4, label: this.chartLabel4},
      ];


      this.barChartLabelsb4 = chartLabels
      this.barChartDatab4  = [
        { data: chartData2, label: this.chartLabel4},
      ];
    })
  }

  getChartData5 = () => {
    this.CountryInfoService.getSchoolColors().subscribe((data) => {
      let jsonObj = JSON.parse(data);

      let type1 = jsonObj[0]

      let chart1Data = []
      let chart1Labels = []
      let chart1Btotal = []
      for (const k in type1) {
        chart1Data.push(type1[k]['nuGeralTipoEscola'])
        chart1Labels.push(type1[k]['tpCorRaca'])
        chart1Btotal.push(type1[k]['nSamples'])
      }
      console.log(chart1Btotal)
      this.barChartLabels5 = chart1Labels
      this.barChartData5  = [
        { data: chart1Data, label: this.chartLabel5},
      ];

      this.barChartLabels5a = chart1Labels
      this.barChartData5a  = [
        { data: chart1Btotal, label: this.chartLabel5},
      ];

      let type2 = jsonObj[1]
      // let type1b1 = jsonObj[1]

      let chart1Datab1 = []
      let chart1Labelsb1 = []
      let chart1Btotalb2 = []
      for (const k in type2) {
        chart1Datab1.push(type2[k]['nuGeralTipoEscola'])
        chart1Labelsb1.push(type2[k]['tpCorRaca'])
        chart1Btotalb2.push(type2[k]['nSamples'])
      }
      console.log(chart1Btotalb2)
      this.barChartLabels5b1 = chart1Labelsb1
      this.barChartData5b1 = [
        { data: chart1Datab1, label: this.chartLabel5b1},
      ];

      this.barChartLabels5b2 = chart1Labelsb1
      this.barChartData5b2  = [
        { data: chart1Btotalb2, label: this.chartLabel5b1},
      ];



      let type3 = jsonObj[2]
      let chart1Datac1 = []
      let chart1Labelsc1 = []
      let chart1Btotalc1 = []
      for (const k in type3) {
        chart1Datac1.push(type3[k]['nuGeralTipoEscola'])
        chart1Labelsc1.push(type3[k]['tpCorRaca'])
        chart1Btotalc1.push(type3[k]['nSamples'])
      }
      this.barChartLabels5c1 = chart1Labelsb1
      this.barChartData5c1 = [
        { data: chart1Datac1, label: this.chartLabel5c1},
      ];

      this.barChartLabels5c2 = chart1Labelsc1
      this.barChartData5c2  = [
        { data: chart1Btotalc1, label: this.chartLabel5c1},
      ];
    })

  }

}
