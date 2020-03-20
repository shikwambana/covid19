import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles;
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.getArticles();
  }

  getArticles() {
    
    this.api.getNICDArcticles().subscribe(res =>{
      this.articles = res;
      console.log(this.articles)
    })
  }

  openArticle(article){
    console.log(article)
  }

}
