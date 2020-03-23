import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  test = {"id":16587,"date":"2020-03-19T15:21:11","date_gmt":"2020-03-19T13:21:11","guid":{"rendered":"http:\/\/www.nicd.ac.za\/?p=16587"},"modified":"2020-03-19T15:21:11","modified_gmt":"2020-03-19T13:21:11","slug":"covid-19-update-21","status":"publish","type":"post","link":"http:\/\/www.nicd.ac.za\/covid-19-update-21\/","title":{"rendered":"COVID-19 update"},"content":{"rendered":"<p>Following the expansion of national-wide routine testing for SARS-CoV-2 in public and private laboratories, the National Institute for Communicable Diseases (NICD), a division of the National Health Laboratory Service, will start to transition to functioning as a reference and surveillance laboratory for COVID-19. This will include resolving and troubleshooting indeterminate and other unusual results as well as providing other reference laboratory functions. In addition, the NICD will conduct testing on routine surveillance samples to monitor the possible spread of\u00a0 COVID-19 across the country. Sequencing of early isolates of SARS-CoV-2 is underway and this information will be shared as soon possible.<\/p>\n<p>As of 19 March 2020, the NICD confirms 34 new COVID-19 cases bringing the total number of COVID-19 cases to 150 people, the majority of whom are based in Gauteng, Western Cape and KwaZulu-Natal provinces respectively. Of the 34 newly confirmed COVID-19 cases, the majority are imported and two are locally transmitted. Contact tracing of all persons that the patients might have come into contact with is underway. The provincial breakdown of the new cases is as follows:<\/p>\n<p><strong>\u00a0Gauteng Province <\/strong><\/p>\n<ul>\n<li>A 41-year-old female who travelled to the Democratic Republic of Congo<\/li>\n<li>A 43-year-old female who travelled to the Democratic Republic of Congo<\/li>\n<li>A 37-year-old female with no international travel history<\/li>\n<li>A 54-year-old female who travelled to the United Kingdom<\/li>\n<li>A 58-year-old male who travelled to the United Kingdom<\/li>\n<li>A 38-year-old male who travelled to France<\/li>\n<li>A 70-year-old female who travelled to the United States of America<\/li>\n<li>A 30-year-old male who travelled to Spain<\/li>\n<li>A 45-year-old male who travelled to the Democratic Republic of Congo<\/li>\n<li>An 85-year-old male who travelled to Switzerland<\/li>\n<li>A 64-year-old male who travelled to Vietnam and Thailand<\/li>\n<li>A 41-year-old male who travelled to the Netherlands<\/li>\n<li>A 23-year-old male with pending travel history<\/li>\n<li>A 5-year-old female with pending travel history<\/li>\n<li>A 44-year-old male with pending travel history<\/li>\n<\/ul>\n<p><strong>KwaZulu-Natal Province <\/strong><\/p>\n<ul>\n<li>A 71-year-old female who travelled to the United Kingdom<\/li>\n<li>A 26-year-old male who travelled to Mexico and the United States of America<\/li>\n<li>A 29-year-old female with pending travel history<\/li>\n<\/ul>\n<p><strong>Mpumalanga Province <\/strong><\/p>\n<ul>\n<li>A 56-year-old female who travelled to France<\/li>\n<\/ul>\n<p><strong>Western Cape Province <\/strong><\/p>\n<ul>\n<li>A 53-year-old female who travelled to the United Kingdom<\/li>\n<li>A 30-year-old female who travelled to the Netherlands and Qatar<\/li>\n<li>A 45-year-old male who travelled to Mexico<\/li>\n<li>A 70-year-old female who travelled to the United States of America<\/li>\n<li>A 25-year-old female who travelled to the United Kingdom<\/li>\n<li>A 37-year-old female who travelled to the United Kingdom<\/li>\n<li>A 43-year-old female who travelled to the United States of America<\/li>\n<li>A 31-year-old male who travelled to Spain and the Netherlands<\/li>\n<li>A 53-year-old female who travelled to Switzerland, Austria, Czech Republic and Germany<\/li>\n<li>A 22-year-old female who travelled to the United Kingdom<\/li>\n<li>A 63-year-old male who travelled to Switzerland, Czech Republic and Germany<\/li>\n<li>A 22-year-old male who travelled to Spain and the Netherlands<\/li>\n<li>A 32-year-old male who travelled to the United States of America<\/li>\n<li>A 37-year-old male with pending travel history<\/li>\n<li>A 34-year-old male with pending travel history<\/li>\n<\/ul>\n","protected":false},"excerpt":{"rendered":"<p>Following the expansion of national-wide routine testing for SARS-CoV-2 in public and private laboratories, the National Institute for Communicable Diseases (NICD), a division of the National Health Laboratory Service, will start to transition to functioning as a reference and surveillance laboratory for COVID-19. This will include resolving and troubleshooting indeterminate and other unusual results as [&hellip;]<\/p>\n","protected":false},"author":11,"featured_media":15750,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":[],"categories":[11],"tags":[],"_links":{"self":[{"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/posts\/16587"}],"collection":[{"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/users\/11"}],"replies":[{"embeddable":true,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/comments?post=16587"}],"version-history":[{"count":2,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/posts\/16587\/revisions"}],"predecessor-version":[{"id":16589,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/posts\/16587\/revisions\/16589"}],"wp:featuredmedia":[{"embeddable":true,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/media\/15750"}],"wp:attachment":[{"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/media?parent=16587"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/categories?post=16587"},{"taxonomy":"post_tag","embeddable":true,"href":"http:\/\/www.nicd.ac.za\/wp-json\/wp\/v2\/tags?post=16587"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}
  constructor() { }

  dayObj = {
    date : '',
    totalNoToday : 0,
    newCases: 0,
    cases : [
      {
        'province' : '',
        'info' : [
          {
            age: 0,
            gender : '',
            travelled: ''
          }
        ]
      }
    ]
  }

  ngOnInit() {
    this.extractData()
  }

  extractData(){

    //get the date

    const dateReg = /[1-2][0-9] \w* 2020/;

    let str = this.test.content.rendered.match(dateReg)
    console.log(str)
    console.log(new Date(str[0]))

    //get the total number of people 

    const totalNo = /\d{1,10}(?= people)/;

    let stri = this.test.content.rendered.match(totalNo)
    console.log(Number(stri[0]))

  //get the province then store the data 
    
    const province = /\w*(?= Province)/

    let strin = this.test.content.rendered.match(province)
    console.log(strin[0])

  }
}
