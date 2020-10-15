import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MissionCardComponent } from './components/mission-card/mission-card.component';
import { MissionsComponent } from './components/missions/missions.component';
import { FilterCategoryComponent } from './components/filter-category/filter-category.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MissionCardComponent,
    MissionsComponent,
    FilterCategoryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
