import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnChanges {
  @Input() sourceList!: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.sourceList);
  }
}
