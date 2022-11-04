import { Component, OnInit, Input } from '@angular/core';
import { ICard, ICardVestibular, IVestibular } from '../shared/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  @Input() cards!: ICard[];
  @Input() vestibulares!: IVestibular[];

  cardVestibular: ICardVestibular[] = [];

  constructor() {}

  decodeVestibular(card: ICard) {
    return this.vestibulares.find(
      (vestibular) => vestibular.id === card.restricoesVestibular
    )?.nome;
  }

  ngOnInit(): void {
    this.cardVestibular = this.cards.map((card) => {
      return {
        ativo: card.ativo,
        authorities: card.authorities,
        modalidade: card.modalidade,
        vestibular: this.decodeVestibular(card),
      };
    });
  }
}
