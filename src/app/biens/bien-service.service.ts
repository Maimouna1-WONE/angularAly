import { Injectable } from '@angular/core';
import {BienModel} from './bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienServiceService {
  private Biens: BienModel[] = [
    {
      id: 1, category: 'Ordinateur', createdAt: new Date(2017, 10, 31, 22, 30, 50),
      sale: true, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ...dfghjk fdghj dfghj dfghjk',
      image: 'pc', price: 450000, state: 23, title: 'ordinateur portable', archive: false
    },
    {
      id: 2, category: 'Livre', createdAt: new Date(2019, 12, 1, 100,  0),
      sale: false, description: '...printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries hgdsgd hsghsg hgjz fdghjk fghjk dfghj lkjhgf lkjhhgg fghjvcb fdghyiuo iuyutyrdf',
      image: 'book', price: 100000, state: 12, title: 'livre', archive: false
    },
    {
      id: 3, category: 'Fauteuil', createdAt: new Date(2012, 4, 3,  2, 39, 10),
      sale: true, description: '...Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
      image: 'armchair', price: 500000, state: 22, title: 'fauteuil', archive: false
    },
  ];
  constructor() { }
  // tslint:disable-next-line:typedef
  getAllBiens(): BienModel[]{
    return this.Biens;
  }
  getBiensbyId(id: number): BienModel{
    // @ts-ignore
    const bienFound = this.Biens.find(
      (b: BienModel) => {
        // tslint:disable-next-line:no-conditional-assignment
        return b.id == id;
      }
    );
    return bienFound;
  }
  // tslint:disable-next-line:typedef
  addBien(newBien: BienModel){
    this.Biens.push(newBien);
  }
  // tslint:disable-next-line:typedef
  updateBien(updatedBien: BienModel){
    // tslint:disable-next-line:prefer-const
    let bienmodif: BienModel = this.Biens.find(
      (b: BienModel) => {
        return b.id === updatedBien.id;
      }
    );
    // spread Operator
    if (bienmodif){
      bienmodif = {...updatedBien};
    }
  }
  // tslint:disable-next-line:typedef
  getLastId(): number{
    return this.Biens[this.Biens.length - 1] ? this.Biens[this.Biens.length - 1].id : 0;
  }
  // tslint:disable-next-line:typedef
  deleteBien(id: number){
    const biendeleted = this.Biens.find(
      (b: BienModel) => {
        b.archive = true;
      }
    );
  }
  // tslint:disable-next-line:typedef
  slugler(){}
}
