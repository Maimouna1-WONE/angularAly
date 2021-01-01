import { Injectable } from '@angular/core';
import {User, UsersserviceService} from './usersservice.service';
import {rejects} from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedIn = false;
connectedUser: User;

  constructor(private usersservice: UsersserviceService) {}
  // tslint:disable-next-line:typedef
  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        // @ts-ignore
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }
  // tslint:disable-next-line:typedef
  login(e: string = '', p: string = ''){
    this.connectedUser = this.usersservice.getUserbyEmailandPass(e, p);
    this.loggedIn = (this.connectedUser || e === '' || p === '') ? true : false;
    alert(this.loggedIn);
  }
  // tslint:disable-next-line:typedef
  logout(){
    this.loggedIn = false;
    this.connectedUser = null;
    alert(this.loggedIn);
  }
}
