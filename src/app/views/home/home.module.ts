import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/share/share.module';



export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule
  ],
  exports: []
})
export class HomeModule { }
