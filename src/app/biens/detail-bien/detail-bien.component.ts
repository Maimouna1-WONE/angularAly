import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {BienServiceService} from '../bien-service.service';
import {BienModel} from '../bien.model';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute,
              private bienservice: BienServiceService) {}
  id: number;
  bien: BienModel;
  ngOnInit(): void {
    /*setTimeout(() => {
  }, 3000);
    /*this.id = +this.route.snapshot.params.id;
    this.data = this.bienservice.getBiensbyId(this.id);*/
    //Pour la prochaine fois ou on charge ce component
    /*this.route.params.subscribe(
      (p: Params) => {
        this.id = +p.id;
        this.data = this.bienservice.getBiensbyId(this.id);
      },
      error => {
        console.log(error);
      }
    );*/
    this.route.data.subscribe(
      (data: Data) => {
        this.bien = data.bien;
      }
    );
  }

  ngOnDestroy(): void {
    //alert('destruction');
  }

}
