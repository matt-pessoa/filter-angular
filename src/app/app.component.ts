import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';
import { ICard, ICardVestibular, IVestibular } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cards: ICard[] = [];
  vestibulares: IVestibular[] = [];

  cardVestibular: ICardVestibular[] = [];

  constructor(private dataService: DataService) {}

  decodeVestibular(card: ICard) {
    return this.vestibulares.find(
      (vestibular) => vestibular.id === card.restricoesVestibular
    )?.nome;
  }

  generateCardVestibular() {
    this.dataService.getCards().subscribe((resCards) => {
      this.cards = resCards;

      this.dataService.getVestibulares().subscribe((resVests) => {
        this.vestibulares = resVests;

        this.cardVestibular = this.cards.map((card) => {
          return {
            ativo: card.ativo,
            authorities: card.authorities,
            modalidade: card.modalidade,
            vestibular: this.decodeVestibular(card),
          };
        });
      });
    });
  }

  ngOnInit(): void {
    this.generateCardVestibular();
  }
}
