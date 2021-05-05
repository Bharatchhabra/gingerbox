import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinformationComponent } from './pages/addinformation/addinformation.component';
import { AddmoreinfomationaboutComponent } from './pages/addmoreinfomationabout/addmoreinfomationabout.component';
import { AddressProofComponent } from './pages/address-proof/address-proof.component';
import { ConformRegFormComponent } from './pages/conform-reg-form/conform-reg-form.component';
import { ConformationDetailsComponent } from './pages/conformation-details/conformation-details.component';
import { ErrorComponent } from './pages/error/error.component';
import { FillingFormComponent } from './pages/filling-form/filling-form.component';
import { HomeComponent } from './pages/home/home.component';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { IdProofComponent } from './pages/id-proof/id-proof.component';
import { LastconformationpageComponent } from './pages/lastconformationpage/lastconformationpage.component';
import { RoomsDetailsComponent } from './pages/rooms-details/rooms-details.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'confromregistrationform',component: ConformRegFormComponent},
  {path:'informationform',component: FillingFormComponent},
  {path:'addinformation',component: AddinformationComponent},
  {path:'addmoreinformation',component: AddmoreinfomationaboutComponent},
  {path : 'idproof',component: IdProofComponent },
  {path : 'addressproof',component: AddressProofComponent },
  {path : 'housedetails',component: HouseDetailsComponent },
  {path : 'roomsdetails',component: RoomsDetailsComponent },
  {path : 'conformdetails',component: ConformationDetailsComponent },
  {path : 'lastconformation',component: LastconformationpageComponent},
  {path : 'error',component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
