import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { GraphsComponent } from './graphs/graphs.component';
import { InfoComponent } from './info/info.component';
import { HopitalsComponent } from './hopitals/hopitals.component';


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'article/:articleID/:articleTitle', component: ArticleComponent},
  { path: 'corvid19statistics', component: GraphsComponent},
  { path: 'hospitals', component: HopitalsComponent},
  { path: 'information', component: InfoComponent, children : [
    { path: ':section', component: InfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
