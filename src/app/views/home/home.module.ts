import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';



export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
  RouterModule.forChild(appRoutes), CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
