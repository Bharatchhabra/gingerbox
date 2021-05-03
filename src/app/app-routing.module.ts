import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinformationComponent } from './pages/addinformation/addinformation.component';
import { AddmoreinfomationaboutComponent } from './pages/addmoreinfomationabout/addmoreinfomationabout.component';
import { ConformRegFormComponent } from './pages/conform-reg-form/conform-reg-form.component';
import { FillingFormComponent } from './pages/filling-form/filling-form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'confromregistrationform',component: ConformRegFormComponent},
  {path:'informationform',component: FillingFormComponent},
  {path:'addinformation',component: AddinformationComponent},
  {path:'addmoreinformation',component: AddmoreinfomationaboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
