import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  cases: any;
  countries: any;
  allCountries: any;
  lowValue: number = 0;
  highValue: number;
  searchCountry = new FormControl();
  isYesterday = false;

  sortOrder = [
    'cases', 'todayCases', 'deaths', 'recovered', 'active', 'critical', 'casesPerOneMillion', 'deathsPerOneMillion'
  ]

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  sort: string = 'cases';
  constructor(private api: ApiService, private router : Router) { }

  ngOnInit() {
    this.getNumbers()

  }

  getNumbers() {
    this.api.getGlobal().subscribe(res => {
      this.cases = res;
      console.log(res)
    })
    this.getCountryStats()

    this.searchCountry.valueChanges
      .subscribe(userInput => { this._filter(userInput) })
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.countries = this.allCountries.filter(option => { return option.country.toLowerCase().includes(filterValue) });
  }

  view(item){
    sessionStorage.setItem('country', item['country'])
    this.router.navigate(['/'])
  }

  clearText() {
    this.searchCountry.patchValue('')
  }

  getCountryStats() {
    if (!this.api.countries) {

      this.api.getAllCountries(this.isYesterday,this.sort).subscribe(res => {
        this.countries = res
        this.allCountries = res
        this.countries.paginator = this.paginator
        this.highValue = this.countries.length

        let body = {
          length: this.highValue,
          pageIndex: 0,
          pageSize: 10,
          previousPageIndex: 1
        }

        this.getPaginatorData(body)
      })
    } else {
      this.countries = this.api.countries
      this.allCountries = this.countries
      this.highValue = this.countries.length

      let body = {
        length: this.highValue,
        pageIndex: 0,
        pageSize: 10,
        previousPageIndex: 1
      }

      this.getPaginatorData(body)

    }
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

}
