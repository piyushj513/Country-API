import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  {
    path: '',
    component: CountryListComponent,
  },
  { path: 'api', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
