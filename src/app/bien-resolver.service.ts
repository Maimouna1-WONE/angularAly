import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BienModel} from './biens/bien.model';
import {Observable} from 'rxjs';
import {BienServiceService} from './biens/bien-service.service';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<BienModel>{

  constructor(private bienservice: BienServiceService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
    Observable<BienModel> | Promise<BienModel> | BienModel {
    return this.bienservice.getBiensbyId(+route.params.id);
  }

}
