import { Injectable } from '@angular/core';

export interface User{
  id: number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  private users: User[] = [
    {id: 1, nom: 'hgjk', prenom: 'fghj',
      email: 'gghjk@fghj.co', password: 'dfghj',
      role: 'ADMIN'},
    {id: 2, nom: 'hgddjk', prenom: 'fghgdj',
      email: 'gghrrejk@fghj.co', password: 'dfgerhj',
      role: 'CLIENT'},
    {id: 3, nom: 'hgjreeerk', prenom: 'fgdhj',
      email: 'gghfdjk@fghj.co', password: 'dfghj',
      role: 'CLIENT'}
  ];
  constructor() { }
  // @ts-ignore
  findUserbyId(id: number): User{
    const user = this.users.find(
      (u: User) => {
        return u.id == id;
      }
    );
    return user;
  }
  getUserbyEmailandPass(e: string, p: string): User{
    const user = this.users.find(
      (u: User) => {
        return (u.email == e && u.password == p);
      }
    );
    return user;
  }
}
