import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  countries : Array<any> = [];
  updated;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getInfo()
  }

  getInfo(){
    this.api.getCoronaData().subscribe(res =>{
      this.countries = res['countries_stat'];
      this.updated = res['statistic_taken_at']
      this.showCountryData("South Africa")
    },err=>{
      console.log(err)
    })
  }

  showCountryData(selected){

   this.data = this.countries.filter(country =>{
      return country['country_name'] == selected
    })
    this.data = this.data[0];
    console.log(this.data)

  }

}
