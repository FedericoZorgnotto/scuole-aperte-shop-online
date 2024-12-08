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
        "id": 1,
        "nome": "AeroScolastico",
        "descrizione": "Il tuo compagno ideale per le ore noiose di scuola. Un aeroplanino di carta che vola alto, lontano dalla noia, e ti fa sognare durante ogni lezione!",
        "prezzo": 2.99,
        "immagine": "https://th.bing.com/th/id/OIP.fn_IhJ1nYKnZUHVe3kwnvAAAAA?w=474&h=316&rs=1&pid=ImgDetMain"
      },
      {
        "id": 2,
        "nome": "VolaLibero",
        "descrizione": "Perfetto per chi sa come sfruttare ogni momento di pausa! Il volo più divertente in classe è a portata di mano con il nostro aeroplanino di carta.",
        "prezzo": 1.99,
        "immagine": "https://i.ytimg.com/vi/YpdOTIrx6-c/maxresdefault.jpg"
      },
      {
        "id": 3,
        "nome": "SuperLancio",
        "descrizione": "Il lanciamento perfetto, anche senza vento! Prova a battere il record di distanza nelle tue lezioni con il nostro aeroplanino che sfida le leggi della fisica (e della noia!).",
        "prezzo": 3.49,
        "immagine": "https://i.ytimg.com/vi/4N-UMMgb4hc/maxresdefault.jpg"
      }
    ];
  }
}
