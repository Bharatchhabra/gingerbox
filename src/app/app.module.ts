import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ConformRegFormComponent } from './pages/conform-reg-form/conform-reg-form.component';
import { FillingFormComponent } from './pages/filling-form/filling-form.component';
import { AddinformationComponent } from './pages/addinformation/addinformation.component';
import { AddmoreinfomationaboutComponent } from './pages/addmoreinfomationabout/addmoreinfomationabout.component';
import { IdProofComponent } from './pages/id-proof/id-proof.component';
import { AddressProofComponent } from './pages/address-proof/address-proof.component';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { RoomsDetailsComponent } from './pages/rooms-details/rooms-details.component';
import { ConformationDetailsComponent } from './pages/conformation-details/conformation-details.component';
import { ErrorComponent } from './pages/error/error.component';
import { LastconformationpageComponent } from './pages/lastconformationpage/lastconformationpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConformRegFormComponent,
    FillingFormComponent,
    AddinformationComponent,
    AddmoreinfomationaboutComponent,
    IdProofComponent,
    AddressProofComponent,
    HouseDetailsComponent,
    RoomsDetailsComponent,
    ConformationDetailsComponent,
    ErrorComponent,
    LastconformationpageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
