
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private p:Platform , private r: Router) {this.tampilSplash();}

  tampilSplash(){
    this.p.ready().then(()=>{
      this.r.navigateByUrl('splash');
    })
  }
}