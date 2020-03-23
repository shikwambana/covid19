import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  myheaders: HttpHeaders;
  article;

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
    return this.http.get('https://coronavirus-19-api.herokuapp.com/countries')
  }

  //======================================
  //==============South Africa============
  //======================================

  getConfirmedCaseTimeLine(){
    return this.http.get('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_confirmed.csv', {responseType: 'text'})
  }
  //======================================
  //==============ARTICLES================
  //======================================

  getArticle(id){
    return this.http.get('http://www.nicd.ac.za/wp-json/wp/v2/posts/' + id )
  }
}
