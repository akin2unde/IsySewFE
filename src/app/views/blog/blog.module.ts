import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';



export const appRoutes: Routes = [
  { path: "", component: BlogComponent },
  { path: "blog", component: BlogComponent },
];
@NgModule({
  declarations: [BlogComponent],
  imports: [
  RouterModule.forChild(appRoutes), CommonModule
  ],
  exports: []
})
export class BlogModule { }
