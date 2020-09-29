import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ Routes, RouterModule } from '@angular/router';
import { Baitap2Component } from './baitap2.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureproductComponent } from './body/featureproduct/featureproduct.component';
import { BlogComponent } from './body/blog/blog.component';
import { LatestproductComponent } from './body/latestproduct/latestproduct.component';
const approuter : Routes = [
  {
    path:'',
    component: Baitap2Component
  },
]

@NgModule({
  declarations: [Baitap2Component, HeaderComponent, BodyComponent, FooterComponent, NavbarComponent, FeatureproductComponent, BlogComponent, LatestproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(approuter)
  ]
})
export class Baitap2Module { }
