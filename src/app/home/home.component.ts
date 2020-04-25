import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormControl } from "@angular/forms";
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ObjectUnsubscribedError } from 'rxjs';
import { faSkull, faHandHoldingMedical, faProcedures, 
      faUserCheck, faLungsVirus, faSkullCrossbones, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //===================
  faSkull = faSkull;
  faSkullCrossbones = faSkullCrossbones;
  faHandHoldingMedical = faHandHoldingMedical;
  faProcedures = faProcedures;
  faUserCheck = faUserCheck;
  faLungsVirus = faLungsVirus;
  faQuestionCircle = faQuestionCircle;
  info : boolean = false;
  data: any;
  countries;
  updated;
  searchCountry = new FormControl();
  filteredOptions //: Observable<string[]>;
  noInternet = false;
  percent: number;

  //============================================================================
  // Line chart
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'cases' },
    { data: [], label: 'deaths' },
    { data: [], label: 'recovered' },
  ];
  backupdata = [
    { data: [], label: 'cases' },
    { data: [], label: 'deaths' },
    { data: [], label: 'recovered' },
  ];
  public lineChartOptions: (ChartOptions) = {
    responsive: true
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getInfo()

    this.searchCountry.valueChanges
      .subscribe(userInput => { this._filter(userInput) })
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredOptions = this.countries.filter(option => { return option.country.toLowerCase().includes(filterValue) });
  }

  getInfo() {
    this.api.getAllCountries().subscribe(res => {
      this.countries = res;
      if (sessionStorage.getItem('country')) {
        this.showCountryData(sessionStorage.getItem('country'));
      } else {
        this.showCountryData("South Africa")
      }
    }, err => {
      this.noInternet = true
      alert('Check internet connection and reload')
      console.log(err)
    })
  }

  showCountryData(selected) {

    this.data = this.countries.filter(country => {
      return country['country'] == selected
    })
    if (this.data[0]) {
      this.data = this.data[0];
      this.percent = ((this.data.cases / this.data.tests) * 100);
      sessionStorage.setItem('country', this.data['country'])
      console.log(this.data)
      this.getHistoricData(this.data['country'])
    }

  }
  getHistoricData(country) {
    this.api.getHistoricalData(country).subscribe(res => {
      console.log(res)
      for (var i = 0; i < 3; i++) {
        this.lineChartData[i]['data'] = Object.keys(res['timeline'][this.lineChartData[i]['label']]).map((key) => {

          return res['timeline'][this.lineChartData[i]['label']][key];
        })
      }

      for (var i = 0; i < 3; i++) {
        this.backupdata[i]['data'] = this.lineChartData[i]['data'];
      }
      // if (this.backupdata.length == 0) {
      //   this.backupdata = this.lineChartData;
      // }
      console.log(this.lineChartData, this.backupdata)


      this.lineChartLabels = Object.keys(res['timeline']['cases']).map((key) => {
        return key
      })

      console.log(this.lineChartLabels)

    }, err => {
      console.log(err)
    })
  }

  updateCountry(country, element) {
    this.showCountryData(country)
  }

  clearText() {
    this.searchCountry.patchValue('')
  }

  changeGraph(index) {

    let backup = this.backupdata;

    if (this.lineChartData[index]['data'].length !== 0) {
      this.lineChartData[index]['data'] = []
    } else {
      this.lineChartData[index]['data'] = backup[index]['data']
    }

  }

}
