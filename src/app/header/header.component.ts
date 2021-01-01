import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search = '';
  @Output() senddata = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
 send(){
   this.senddata.emit(this.search);
 }
}
