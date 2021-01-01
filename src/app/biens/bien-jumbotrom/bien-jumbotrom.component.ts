import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-bien-jumbotrom',
  templateUrl: './bien-jumbotrom.component.html',
  styleUrls: ['./bien-jumbotrom.component.css']
})
export class BienJumbotromComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  Onlogin(){
    this.auth.login('gghjk@fghj.co', 'dfghj');
  }
  // tslint:disable-next-line:typedef
  Onlogout(){
    this.auth.logout();
  }

}
