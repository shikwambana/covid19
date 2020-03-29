import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../api.service";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-hopitals',
  templateUrl: './hopitals.component.html',
  styleUrls: ['./hopitals.component.scss']
})
export class HopitalsComponent implements OnInit {
  hospitals: any[];
  displayedColumns: string[] = ['Name','Province','District','Subdistrict', 'Category','Long','Lat', ];
  dataSource = new MatTableDataSource(this.hospitals);
  noInternet = false;
  //: MatTableDataSource<any>  = new MatTableDataSource<any>(this.hospitals);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.extractData()
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  extractData() {
    this.api.getHospitals().subscribe(res => {
      this.csvJSON(res)
    },err=>{
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
    this.dataSource.paginator = this.paginator;
  }

}
