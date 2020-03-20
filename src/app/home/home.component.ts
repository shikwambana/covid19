import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  countries;
  updated;
  searchCountry = new FormControl();
  filteredOptions //: Observable<string[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getInfo()

    this.searchCountry.valueChanges
      .subscribe(userInput => { this._filter(userInput) })
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredOptions = this.countries.filter(option => { return option.country.toLowerCase().includes(filterValue) });

    console.log(value, this.filteredOptions)
  }

  getInfo() {
    this.api.getCoronaData().subscribe(res => {
      this.countries = res;
      console.log(res)
      // this.updated = res['statistic_taken_at']
      if (sessionStorage.getItem('country')) {
        this.showCountryData(sessionStorage.getItem('country'));
      } else {
        this.showCountryData("South Africa")
      }
    }, err => {
      console.log(err)
    })
  }

  showCountryData(selected) {

    this.data = this.countries.filter(country => {
      return country['country'] == selected
    })
    this.data = this.data[0];

    sessionStorage.setItem('country', this.data['country'])
  }

  updateCountry(country, element) {
    console.log('got it', country)
    this.showCountryData(country)
    this.hideKeyboard(element)
  }

  clearText() {
    this.searchCountry.patchValue('')
  }

  hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}
}
