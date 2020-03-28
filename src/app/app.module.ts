import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { MatCardModule, MatAutocompleteModule, MatMenuModule, MatButtonToggleModule, MatIconModule, MatTabsModule, MatExpansionModule, MatChipsModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { GraphsComponent } from './graphs/graphs.component';
import { InfoComponent } from './info/info.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent,
    GraphsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonToggleModule,
    FormsModule, 
    NgxChartsModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
