import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Commentaire{
  id: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {
  }
  title = 'HTTPRequest';
  coms: Commentaire[] = [];
  // @ts-ignore
  @ViewChild('myForm') myForm: NgForm;
  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.getData();
  }
  // tslint:disable-next-line:typedef
  OnSubmit(com: Commentaire){
    this.http.post('https://httprequest-daef3-default-rtdb.firebaseio.com/commentaire.json', com).subscribe(
      (response) => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  OnDeleteComs(){}
  // tslint:disable-next-line:typedef
  OnFetch(){
    this.http.get('https://httprequest-daef3-default-rtdb.firebaseio.com/commentaire.json');
  }
  // tslint:disable-next-line:typedef
  private getData(){
    this.http.get<Commentaire>('https://httprequest-daef3-default-rtdb.firebaseio.com/commentaire.json')
      .pipe(map(coms => {
        const commentaires: Commentaire[] = [];
        // @ts-ignore
        for (const c of coms){
          if (coms.hasOwnProperty(c)){
            commentaires.push({...coms[c], id: c});
          }
        }
        return commentaires;
      }))
      .subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
