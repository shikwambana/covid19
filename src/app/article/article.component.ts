import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

  articleID: string;
  article;
  articles;
  title;

  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getArticle(this.activatedRoute.snapshot.paramMap.get('articleID'))
    this.fetchArticles()
  }

  getArticle(id) {
    this.api.getArticle(id).subscribe(res => {
      this.article = res;
      console.log(res)
    })
  }

  loadArticle(article) {
    this.article = article
    window.scroll(0,0);
  }

  fetchArticles() {
    this.api.getNICDArcticles().subscribe(res => {
      this.articles = res;
    }, err => {
      console.log(err)
    })
  }
}
