import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  myheaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.myheaders = new HttpHeaders();
  }

  getNICDArcticles() {
    return this.http.get('http://www.nicd.ac.za/wp-json/wp/v2/posts')
  }

  getAllCases() {
    return this.http.get('https://coronavirus-19-api.herokuapp.com/all')
  }

  getCoronaData() {

    //   let httpOptions = {
    //     headers: new HttpHeaders({
    //       'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    //       'x-rapidapi-key': '2aa7627439msh8a6774bc46bfaf0p1b460bjsn649d533044fa'
    //     })
    //   }
    //   console.log(httpOptions)
    //   return this.http.get(' https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', httpOptions)
    return this.http.get('https://coronavirus-19-api.herokuapp.com/countries')

  }
}
