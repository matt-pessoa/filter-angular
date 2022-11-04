import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard, IVestibular } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.baseUrl + 'card-news.json');
  }

  getVestibulares(): Observable<IVestibular[]> {
    return this.http.get<IVestibular[]>(
      this.baseUrl + 'mapeamento-vestibular.json'
    );
  }
}
