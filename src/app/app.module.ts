import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { MatCardModule, MatAutocompleteModule, MatMenuModule, MatButtonToggleModule, MatIconModule, MatFormFieldModule,MatInputModule, MatTableModule, MatPaginatorModule, MatTabsModule, MatExpansionModule, MatChipsModule, MatSlideToggleModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { GraphsComponent } from './graphs/graphs.component';
import { InfoComponent } from './info/info.component';
import { ChartsModule } from 'ng2-charts';
import { HopitalsComponent } from './hopitals/hopitals.component';
import { NewhomeComponent } from './newhome/newhome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent,
    GraphsComponent,
    InfoComponent,
    HopitalsComponent,
    NewhomeComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSlideToggleModule,
    FormsModule, 
    ChartsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
