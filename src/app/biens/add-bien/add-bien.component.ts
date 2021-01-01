import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {
  bienForm: FormGroup;
  options: string[] = ['location', 'vente'];
  // the forbidden title
  forbiddenTitle: string[] = ['hann', 'village'];
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    console.log(this.bienForm);
    // @ts-ignore
    // @ts-ignore
    this.bienForm = new FormGroup({
      title: new FormControl(null,
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)],
        this.forbiddenValidator.bind(this)),
      description: new FormControl(null,
        [Validators.required,
          Validators.min(3500),
          Validators.max(1000000)], null),
      price: new FormControl(null,
        [Validators.required,
        Validators.min(1000)],
        this.lastPriceValidator),
      category: new FormControl(null, Validators.required), // select
      image: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),  // checkbox
      sale: new FormControl('location', Validators.required),
      createdAt: new FormControl(null), // radio
      imageSec: new FormArray([])
    });
    //this.bienForm.setValue({});
    this.bienForm.patchValue({
      title: 'cvbn,;chjklkjhgfwxcv'
    });
  }
// tslint:disable-next-line:typedef
  OnSubmit(){
    console.log(this.bienForm.value);
  }
  // tslint:disable-next-line:typedef
  OnAddSecImage(){
    const controlplus = new FormControl(null, Validators.required);
    // @ts-ignore
    (this.bienForm.get('imageSec') as FormArray).push(controlplus);
  }
  // tslint:disable-next-line:typedef
  getImgSecControls(){
    return (this.bienForm.get('imageSec') as FormArray).controls;
  }
  // function qui gere la validation
  // tslint:disable-next-line:typedef
  // @ts-ignore
  forbiddenValidator(ctrl: FormControl): {[key: string]: boolean}{
    // tslint:disable-next-line:triple-equals
    if (this.forbiddenTitle.indexOf(ctrl.value) != -1) {
      return {titleForbidden: true};
    }
    return null;
  }
  // last price
  // @ts-ignore
  lastPriceValidator(ctrl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (+ctrl.value > 10000000) {
            resolve({lastPrice: true});
          }
          else{          }
          resolve(null);
          }
        , 2000);
      });
    return promise;
  }
}
