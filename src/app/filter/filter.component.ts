import { Component, Input, OnInit } from '@angular/core';
import { ICardVestibular } from '../shared/interfaces';

interface ISource {
  list: ICardVestibular[];
  modalidadePicker: string;
  vestibularPicker: string;
  produtoPicker: string[];
  sift: ICardVestibular[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  @Input() cardVestibular!: ICardVestibular[];
  source: ISource = {
    list: [],
    modalidadePicker: '',
    vestibularPicker: '',
    produtoPicker: [],
    sift: [],
  };

  modalidades: string[] = ['', 'TODAS', 'ONLINE', 'PRESENCIAL'];
  vestibulares: string[] = ['', 'Enem', 'Albert Einstein'];
  produtos: string[] = ['ROLE_GAMA_CLUBE', 'ROLE_GAMA_PRIME', 'ROLE_GAMA_GO'];

  constructor() {}

  setModalidade({ value }: any, filterProp: keyof ISource) {
    if (filterProp === 'modalidadePicker') {
      this.source[filterProp] = value;
    }
  }

  setVestibular({ value }: any, filterProp: keyof ISource) {
    if (filterProp === 'vestibularPicker') {
      this.source[filterProp] = value;
    }
  }

  setProduto({ value }: any, filterProp: keyof ISource) {
    if (filterProp === 'produtoPicker') {
      const produtoLista = this.source[filterProp];

      if (!produtoLista.includes(value)) {
        this.source['produtoPicker'].push(value);
      } else {
        this.source['produtoPicker'] = this.source['produtoPicker'].filter(
          (produto) => produto !== value
        );
      }
    }
  }

  onFilter({ target }: any, filterProp: keyof ISource) {
    this.setModalidade(target, filterProp);
    this.setVestibular(target, filterProp);
    this.setProduto(target, filterProp);

    let filtered = this.source.list;

    if (this.source.modalidadePicker === 'PRESENCIAL') {
      filtered = filtered.filter((card) => card.modalidade === 'PRESENCIAL');
      this.source.sift = filtered;
    } else if (this.source.modalidadePicker === 'ONLINE') {
      filtered = filtered.filter((card) => card.modalidade === 'ONLINE');
      this.source.sift = filtered;
    } else if (this.source.modalidadePicker === 'TODAS') {
      filtered = filtered.filter((card) => card.modalidade === 'TODAS');
      this.source.sift = filtered;
    } else {
      filtered = filtered.filter((card) => card.modalidade);
      this.source.sift = filtered;
    }

    if (this.source.vestibularPicker === 'Enem') {
      filtered = filtered.filter((card) => card.vestibular === 'Enem');
      this.source.sift = filtered;
    } else if (this.source.vestibularPicker === 'Albert Einstein') {
      filtered = filtered.filter(
        (card) => card.vestibular === 'Albert Einstein'
      );
      this.source.sift = filtered;
    } else {
      filtered = filtered.filter(
        (card) => card.vestibular || card.vestibular === undefined
      );
      this.source.sift = filtered;
    }

    if (this.source.produtoPicker.includes('ROLE_GAMA_PRIME')) {
      filtered = filtered.filter((card) =>
        card.authorities?.includes('ROLE_GAMA_PRIME')
      );
      this.source.sift = filtered;
    }
    if (this.source.produtoPicker.includes('ROLE_GAMA_GO')) {
      filtered = filtered.filter((card) =>
        card.authorities?.includes('ROLE_GAMA_GO')
      );
      this.source.sift = filtered;
    }
    if (this.source.produtoPicker.includes('ROLE_GAMA_CLUBE')) {
      filtered = filtered.filter((card) =>
        card.authorities?.includes('ROLE_GAMA_CLUBE')
      );
      this.source.sift = filtered;
    }
  }

  // filteredCollected() {
  //   this.collectedTrueKeys = {
  //     modalidade: [],
  //     vestibular: [],
  //   };

  //   const { modalidade, vestibular } = this.activeFilters;

  //   let modalidadeKey: keyof filtroModalidade;
  //   for (modalidadeKey in modalidade) {
  //     if (modalidade[modalidadeKey])
  //       this.collectedTrueKeys.modalidade.push(modalidadeKey);
  //   }

  //   let vestibularKey: keyof filtroVestibular;
  //   for (vestibularKey in vestibular) {
  //     if (vestibular[vestibularKey])
  //       this.collectedTrueKeys.vestibular.push(vestibularKey);
  //   }

  //   console.log(this.activeFilters);

  //   this.filterIt();
  // }

  // filterIt() {
  //   const filterKeys = Object.keys(this.collectedTrueKeys);
  //   console.log(
  //     this.source.filter((item: any) => {
  //       return filterKeys.every((key) => {
  //         console.log(this.collectedTrueKeys[key]);
  //         if (item[key] !== undefined)
  //           return item[key].includes(this.collectedTrueKeys[key]);
  //         return item;
  //       });
  //     })
  //   );
  //   // this.source.filter((item: any) => {
  //   //   filterKeys.forEach((key) => {
  //   //     console.log(item[key].includes(this.collectedTrueKeys[key]));
  //   //   });
  //   // });
  // }

  ngOnInit(): void {
    this.source.list = this.cardVestibular;
    this.source.sift = this.source.list;

    console.log(this.source.sift);
  }
}
