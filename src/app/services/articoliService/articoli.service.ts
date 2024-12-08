import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  constructor() {
  }

  getArticoli(): { id: number, nome: string, descrizione: string, prezzo: number, immagine: string }[] {
    return [
      {
        id: 1,
        nome: 'Prodotto 1',
        descrizione: 'Descrizione prodotto 1',
        prezzo: 10,
        immagine: 'https://placecats.com/neo/300/200'
      },
      {
        id: 2,
        nome: 'Prodotto 2',
        descrizione: 'Descrizione prodotto 2',
        prezzo: 20,
        immagine: 'https://placecats.com/millie/300/200'
      },
      {
        id: 3,
        nome: 'Prodotto 3',
        descrizione: 'Descrizione prodotto 3',
        prezzo: 30,
        immagine: 'https://placecats.com/millie_neo/300/200'
      },
    ];
  }
}
