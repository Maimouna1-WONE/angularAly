import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  datapere = '';
  // tslint:disable-next-line:typedef
  recevoir1(event){
    this.datapere = event;
  }

  ngOnInit(): void {
  }
}
