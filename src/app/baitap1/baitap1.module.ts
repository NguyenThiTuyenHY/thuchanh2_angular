import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ Routes, RouterModule, Router } from '@angular/router';
import { Baitap1Component } from './baitap1.component';
import { Header1Component } from './header1/header1.component';
import { Body1Component } from './body1/body1.component';
import { Footer1Component } from './footer1/footer1.component';
const approuter : Routes = [
  {
    path:'',
    component: Baitap1Component
  },
]

@NgModule({
  declarations: [
    Baitap1Component, 
    Header1Component,  
    Footer1Component, 
    Body1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(approuter)
  ]
})
export class Baitap1Module { }
