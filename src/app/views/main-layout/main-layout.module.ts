import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/share/share.module';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../blog/blog.module').then((m) => m.BlogModule),
      },
    ],
  }
];
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    RouterModule.forChild(appRoutes),
     CommonModule,
     SharedModule
  ],
  exports: []
})
export class MainLayoutModule { }
