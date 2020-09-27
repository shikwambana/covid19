import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from "../api.service";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hopitals',
  templateUrl: './hopitals.component.html',
  styleUrls: ['./hopitals.component.scss']
})
export class HopitalsComponent implements OnInit, AfterViewInit {
  hospitals: any[];
  displayedColumns: string[] = ['Name', 'Province', 'District', 'Subdistrict', 'Category', 'Long', 'Lat',];
  provinces = [
    {
      province: 'Gauteng',
      number: 0
    },
    {
      province: 'Limpopo',
      number: 0
    },
    {
      province: 'KwaZuluNatal',
      number: 0
    },
    {
      province: 'Free State',
      number: 0
    },
    {
      province: 'Mpumalanga',
      number: 0
    },
    {
      province: 'North West',
      number: 0
    },
    {
      province: 'Eastern Cape',
      number: 0
    },
    {
      province: 'Western Cape',
      number: 0
    },
    {
      province: 'Northern Cape',
      number: 0
    }]
  dataSource;
  noInternet = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.extractData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  extractData() {
    this.api.getHospitals().subscribe(res => {
      this.csvJSON(res)
    }, err => {
      this.noInternet = true
      alert('Check internet connection and reload')
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
    this.hospitals = result;
    this.dataSource = new MatTableDataSource(this.hospitals);
    console.log(result)
  }

  sortHospitals(){

    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(this.showPosition)
    }

    for(var i=0; i< this.provinces.length; i++){
      let result = this.hospitals.filter(item =>{
        return item['Province'] == this.provinces[i]['province']
      })
      this.provinces[i]['number'] = result.length;
    }
  }

  showPosition(position){
    console.log(position)
  }
}
