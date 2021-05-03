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
import { IdProofComponent } from './id-proof/id-proof.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConformRegFormComponent,
    FillingFormComponent,
    AddinformationComponent,
    AddmoreinfomationaboutComponent,
    IdProofComponent
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
