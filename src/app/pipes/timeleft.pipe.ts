import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeleft'
})
export class TimeleftPipe implements PipeTransform {

  transform(date: Date): string {
    const tay = new Date();
    // @ts-ignore
    const diff = tay.getTime() - date.getTime();
    const  y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    if ( y > 0 ) { return y + 'ans'; }
    const  mois = Math.floor((diff / 1000 / 60 / 60 / 24) % 12);
    if ( mois > 0 ) { return mois + 'mois'; }
    const  d = Math.floor(diff / 1000 / 60 / 60 / 24);
    if ( d > 0 ) { return d + 'jours'; }
    const  h = Math.floor((diff / 1000 / 60 / 60) % 24);
    if ( h > 0 ) { return h + 'heures'; }
    const  m = Math.floor((diff / 1000 / 60) % 60);
    if ( m > 0 ) { return m + 'minutes'; }
    const  s = Math.floor((diff / 1000) % 60);
    if ( s > 0 ) { return s + 'secondes'; }
    return '1s';
  }

}
