import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {BienModel} from '../../bien.model';
import {UtilsService} from '../../../utils.service';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('bien') bienvalue: BienModel;
  /*@Output() sms = new EventEmitter();
  name = 'papa';*/
  constructor( private utilservice: UtilsService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  /*sending(){
    this.sms.emit(this.name);
  }*/
  // tslint:disable-next-line:typedef
}
