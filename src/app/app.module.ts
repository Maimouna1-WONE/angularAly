import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { BienJumbotromComponent } from './biens/bien-jumbotrom/bien-jumbotrom.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ReservationBienComponent } from './biens/reservation-bien/reservation-bien.component';
import { EditReservationComponent } from './biens/reservation-bien/edit-reservation/edit-reservation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorsComponent } from './errors/errors.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './connexion/register/register.component';

/*const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent },
  { path: 'reservation', component: ReservationBienComponent }
  ];*/

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    BienJumbotromComponent,
    SeparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBienComponent,
    EditReservationComponent,
    NotfoundComponent,
    ErrorsComponent,
    ConnexionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ngForm
    ReactiveFormsModule //FormGroup
    //RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
