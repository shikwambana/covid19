import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  timelineCases: any[];
  data: any[] = [];
  confirmedCases: any[] = [];
  casePerProvince;
  provinces
  //============================================================================
  // Line chart
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Total Cases' },
    // { data: [], label: 'New Cases per Day' }
  ];
  public lineChartOptions: (ChartOptions) = {
    responsive: true
  }
  anotherList = [];
  listOfProvinces = ['GP', 'KZN', 'WC', 'LP', 'EC', 'FS', 'NC', 'NW', 'MP', 'UNK']
  SAProvinces = ['EC', 'FS', 'GP', 'KZN', 'LP', 'MP', 'NC', 'NW', 'WC']
  gender = [{name:'Male',value:'male'},{name:'Female',value:'female'},{name:'Not Specified',value:'not specified'}]

  //==================================================================================
  // Province chart

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'bar';
  public pieChartLegend = false;
  public pieChartColors = [
    {
      backgroundColor: ['#520180','#56d4c3','#af92bf','#4cda31','#b96ae8','#52c7f5','#46a291','#131d7a','#c35647','#669fbc'],
    },
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  }

  //============================================================================
  // gender type chart
  public genderChartLabels: Label[] = [];
  public genderChartData: number[] = [];
  public genderChartType = 'pie';
  public genderChartLegend = true;
  public genderChartColors = [
    {
      backgroundColor: ['#52c7f5','#4ec054'],
    },
  ];

  genderType: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.extractData()
  }

  extractData() {
    // this.api.getConfirmedCaseTimeLine().subscribe(res => {
    //   this.csvJSON(res)
    // })

    this.api.getProvinces().subscribe(res =>{
      let data = this.csvJSON(res);
      this.casePerProvince = data;
      this.lineChartLabels = data.map(res =>{
        return res['date']
      })
      console.log(data)
      this.lineChartData[0]['data'] = data.map(res =>{
        return res['total']
      })

      this.calcByProvince();
    })
  }

  // convert csv to json
  csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    // loop through all the lines excpet the first 1 (index = 0) 
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      // loop through the skipped line (headers = lines[0])
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    // call filter function
    result.pop();
    // console.log(result)
    // this.timelineCases = result;

    // this.sortByProvince()
    // this.buildData();

    return result
  }

  calcByProvince(){
    let data = []
    
    this.SAProvinces.forEach((element,index) => {
      data.push(this.casePerProvince[this.casePerProvince.length-2][element])

      this.anotherList.push({
        name: element,
        number: this.casePerProvince[this.casePerProvince.length-2][element],
        color: this.pieChartColors[0].backgroundColor[index]
      })
    });

    this.pieChartData = data;
    this.pieChartLabels = this.SAProvinces;
    this.anotherList.pop()
    console.log(this.anotherList)
  }

  sortByProvince() {

    this.listOfProvinces.forEach(prov => {

      let item = this.timelineCases.filter(obj => {
        return obj['province'] === prov
      })

      let obj = {
        y: item.length,
        label: item[0]['province']
      }

      this.provinces.push(obj)
    })
    this.pieChartLabels = this.provinces.map(res => {
      return res['label']
    })

    this.pieChartData = this.provinces.map(res => {
      return res['y']
    })

    this.gender.forEach(gender =>{
      let item = this.timelineCases.filter(obj =>{
        return obj['gender'] === gender['value']
      })

      let obj = {
        y: item.length,
        label: item[0]['gender']
      }

      this.genderType.push(obj)
    })

    this.genderChartLabels = this.genderType.map(res => {
      return res['label']
    })

    this.genderChartData = this.genderType.map(res => {
      return res['y']
    })
    console.log(this.genderType)
  }


  buildData() {

    this.timelineCases.forEach(info => {

      let item = this.timelineCases.filter(obj => {
        return obj['date'] === info['date']
      })

      let obj = {
        y: item.length,
        label: item[0]['date']
      }

      if (!this.data.some(info => info['label'] === obj['label'])) {
        this.data.push(obj)
      }

    });

    console.log(this.data)

    let tempData = this.data
    let arr = []

    for (var i = 0; i < tempData.length; i++) {
      if (!tempData[i - 1]) {
        this.confirmedCases.push(tempData[i])
      } else {
        let temp = 0;
        for (var j = i; j >= 0; j--) {
          temp += tempData[j]['y'];
        }
        let obj = {
          label: tempData[i]['label'],
          y: temp
        }
        this.confirmedCases.push(obj)
      }
    }

    this.lineChartLabels = this.confirmedCases.map(res => {
      return res['label']
    })

    this.lineChartData[0]['data'] = this.confirmedCases.map(res => {
      return res['y']
    })

    this.lineChartData[1]['data'] = this.data.map(res => {
      return res['y']
    })

    console.log(this.lineChartLabels, this.lineChartData)
  }

  changeGraph(type){
    this.lineChartType = type;
  }

  changeProvGraph(type){
    this.pieChartType = type;
  }
}
