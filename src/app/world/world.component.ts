import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  cases: any;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getNumbers()
  }

  getNumbers(){
    this.api.getAllCases().subscribe(res =>{
      this.cases = res;
      console.log(res)
    })
  }
}
