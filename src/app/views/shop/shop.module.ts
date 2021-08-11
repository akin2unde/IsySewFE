import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: "", component: ShopComponent },
  { path: "shop", component: ShopComponent },
];
@NgModule({
  declarations: [ShopComponent],
  imports: [
  RouterModule.forChild(appRoutes), CommonModule
  ],
  exports: []
})
export class ShopModule { }
