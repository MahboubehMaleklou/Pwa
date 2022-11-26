import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() dataInput:string | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }


}
