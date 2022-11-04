import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';
import { ICard, IVestibular } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cards: ICard[] = [];
  vestibulares: IVestibular[] = [];

  constructor(private dataService: DataService) {}

  getCards() {
    this.dataService.getCards().subscribe((res) => (this.cards = res));
  }

  getVestibulares() {
    this.dataService
      .getVestibulares()
      .subscribe((res) => (this.vestibulares = res));
  }

  ngOnInit(): void {
    this.getCards();
    this.getVestibulares();
  }
}
