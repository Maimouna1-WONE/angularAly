import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBienComponent} from './biens/list-bien/list-bien.component';
import {AddBienComponent} from './biens/add-bien/add-bien.component';
import {ReservationBienComponent} from './biens/reservation-bien/reservation-bien.component';
import {DetailBienComponent} from './biens/detail-bien/detail-bien.component';
import {DetailReservationComponent} from './biens/reservation-bien/detail-reservation/detail-reservation.component';
import {EditReservationComponent} from './biens/reservation-bien/edit-reservation/edit-reservation.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AuthguardService} from './authguard.service';
import {ErrorsComponent} from './errors/errors.component';
import {BienResolverService} from './bien-resolver.service';
import {ConnexionComponent} from './connexion/connexion.component';

const routes: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'login', component: ConnexionComponent },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent, resolve: {bien: BienResolverService} },
  { path: 'reservations', component: ReservationBienComponent,
    // canActivate: [AuthguardService],
    canActivateChild: [AuthguardService],
    children: [
        { path: ':id', component: DetailReservationComponent },
        { path: ':id/edit', component: EditReservationComponent }
      ]
  },
  { path: 'not-found', component: ErrorsComponent, data: {message: 'Page introuvable !'} },
  // { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
