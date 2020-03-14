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

  getCoronaData() {

    //     let httpOptions = {
    //       headers: new HttpHeaders({
    //         'Access-Control-Allow-Headers' : 'Content-Type,Access-Control-Allow-Methods, Accept, Access-Control-Allow-Headers,Access-Control-Allow-Origin,',
    //         'Content-Type': 'application/json',
    //         'Accept': '*',
    //         'Access-Control-Allow-Origin': 'http://localhost/4200/',
    //         'Access-Control-Allow-Methods' : 'GET'
    //       })
    //     }
    // console.log(httpOptions)
    //     return this.http.get('https://corona.lmao.ninja/all', httpOptions)


    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '2aa7627439msh8a6774bc46bfaf0p1b460bjsn649d533044fa'
      })
    }
    console.log(httpOptions)
    return this.http.get(' https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', httpOptions)
  }
}
