import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginator } from "@angular/material/paginator";
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  cases: any;
  countries: any;
  @ViewChild('paginator',{ static: true}) paginator : MatPaginator;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getNumbers()

  }

  getNumbers(){
    this.api.getGlobal().subscribe(res =>{
      this.cases = res;
      console.log(res)
    })
    this.getCountryStats()
  }

  getCountryStats(){
    if(!this.api.countries){

      this.api.getAllCountries().subscribe(res =>{
        this.countries = res
        this.countries.paginator = this.paginator
      })
    }else{
      this.countries = this.api.countries
    }
  }
}
