import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { GraphsComponent } from './graphs/graphs.component';
import { InfoComponent } from './info/info.component';
import { HopitalsComponent } from './hopitals/hopitals.component';
import { NewhomeComponent } from './newhome/newhome.component';
import { WorldComponent } from './world/world.component';


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'home', component : NewhomeComponent},
  { path: 'article/:articleID/:articleTitle', component: ArticleComponent},
  { path: 'covid19statistics', component: GraphsComponent},
  { path: 'hospitals', component: HopitalsComponent},
  { path: 'world', component: WorldComponent },
  { path: 'information', component: InfoComponent, children : [
    { path: ':section', component: InfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
