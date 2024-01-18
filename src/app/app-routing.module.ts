import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ComponentTComponent } from './components/component-t/component-t.component';


const routes: Routes = [

  {path: '',component: ComponentTComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
