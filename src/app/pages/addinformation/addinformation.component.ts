import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
@Component({
  selector: 'app-addinformation',
  templateUrl: './addinformation.component.html',
  styleUrls: ['./addinformation.component.css']
})
export class AddinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // latest snapshot
 public webcamImage: WebcamImage | undefined ;
 // webcam snapshot trigger
 private trigger: Subject<void> = new Subject<void>();
 triggerSnapshot(): void {
  this.trigger.next();
 }
 handleImage(webcamImage: WebcamImage): void {
  console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;
 }

 public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
 }

  camopen(){
    alert("this is cam")
  }
}


