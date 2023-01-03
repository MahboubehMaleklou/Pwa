import { Component } from '@angular/core';

import { fromEvent, interval, map, mapTo, scan } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'PWA';

  constructor() {

    // const scroll$ = fromEvent(document, 'scroll');
    // scroll$.subscribe(console.log)
    // scroll$.pipe(map(Scrolll => Scrolll.target)).subscribe(console.log)

    const counter$ = interval(1000);

    counter$
      .pipe(
        mapTo(-1),
        scan((accu, curr) => {
          return accu + curr;
        }, 10)
      )
      .subscribe({
        //next: console.log,
      });
  }

}
