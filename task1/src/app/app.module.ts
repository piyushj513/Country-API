import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from '@progress/kendo-angular-grid';
import { CountryListComponent } from './country-list/country-list.component';
import { PagerModule } from '@progress/kendo-angular-pager';


@NgModule({
  declarations: [AppComponent, CountryListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    HttpClientModule,
    PagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
