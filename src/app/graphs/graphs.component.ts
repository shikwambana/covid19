import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  timelineCases: any[];
  data: any[] = [];
  graph: { name: string; series: any[]; }[];
  confirmedCases: any[] = [];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Confirmed Cases';
  timeline: boolean = true;
  view: any[] = [350, 400];
  colorScheme = {
    domain: ['#5AA454', '#4fb3bf', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.extractData()
  }

  extractData() {
    this.api.getConfirmedCaseTimeLine().subscribe(res => {
      this.csvJSON(res)
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
    console.log(result)
    this.timelineCases = result;

    // this.data = 
    this.buildData();
  }

  buildData() {

    this.timelineCases.forEach(info => {

      let item = this.timelineCases.filter(obj => {
        return obj['date'] === info['date']
      })

      let obj = {
        value: item.length,
        name: item[0]['date']
      }
      console.log(!this.data.includes(obj))

      if (!this.data.some(info => info['name'] === obj['name'])) {
        this.data.push(obj)
      }

    });

    this.graph = [{
      name: "Confirmed Cases",
      series: this.data
    }]

    console.log(this.data)

    let tempData = this.data
    let arr = []

    for (var i = 0; i < tempData.length; i++) {
      if (!tempData[i - 1]) {
        this.confirmedCases.push(tempData[i])
      } else {
        let temp = 0;
        for (var j = i; j >= 0; j--) {
          temp += tempData[j]['value'];
        }
        let obj = {
          name: tempData[i]['name'],
          value: temp
        }
        this.confirmedCases.push(obj)
      }
    }
    this.graph.push({
      name: "Total Cases per Day",
      series: this.confirmedCases
    })
    console.log(this.confirmedCases)
  }
}
