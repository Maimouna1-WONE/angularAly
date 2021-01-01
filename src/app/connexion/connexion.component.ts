import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  @ViewChild('loginform') myform: NgForm;
  constructor() {
  }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  proposerEmail(){
    const myemail = 'fghjk@fghjk.cjh';
    /*this.myform.setValue({
      username: myemail,
      password: ''
    });*/
    /*this.myform.form.patchValue({
      username: myemail
    });*/
}
// tslint:disable-next-line:typedef
  /*OnSubmit(loginform: NgForm){
    console.dir(loginform.value.password);
  }*/

  // tslint:disable-next-line:typedef
  OnSubmit() {
    this.myform.onReset();
  }
}
