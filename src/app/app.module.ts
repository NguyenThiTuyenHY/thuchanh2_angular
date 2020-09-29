import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{ Routes, RouterModule } from '@angular/router';
const approuter : Routes = [
  {
    path:'',
    loadChildren:()=>import("./baitap1/baitap1.module").then((m)=>m.Baitap1Module)
  },
  {
    path:'bai1',
    loadChildren:()=>import("./baitap1/baitap1.module").then((m)=>m.Baitap1Module)
  },
  {
    path:'bai2',
    loadChildren:()=>import("./baitap2/baitap2.module").then((m)=>m.Baitap2Module)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approuter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
