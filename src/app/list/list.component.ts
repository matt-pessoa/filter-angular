import { Component, OnInit, Input } from '@angular/core';
import { ICard, ICardVestibular, IVestibular } from '../shared/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  @Input() cardVestibular!: ICardVestibular[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardVestibular);
  }
}
