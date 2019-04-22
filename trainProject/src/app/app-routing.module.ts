import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export class Cat {
  name: string;
  age: number;
  constructor(nameOfCat: string, ageOfCat: number){
    this.name = nameOfCat;
    this.age = ageOfCat;
  }
}
