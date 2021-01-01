import {Component, Inject, Input, OnInit} from '@angular/core';
import {BienModel} from '../bien.model';
import {BienServiceService} from '../bien-service.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  Biens: BienModel[];
  //data = '';
  // tslint:disable-next-line:no-input-rename
  @Input() data = '';
  constructor(private bienservice: BienServiceService) { }

  ngOnInit(): void {
    this.Biens = this.bienservice.getAllBiens();
  }
  // tslint:disable-next-line:typedef
  /*message(name: string){
    alert('hello ' + name);
    HTML biii : (sms)="message($event)"
  }*/
}
