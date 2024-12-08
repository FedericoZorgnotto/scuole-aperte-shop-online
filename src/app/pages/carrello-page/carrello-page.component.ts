import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ArticoloCarrelloComponent} from '../../components/articolo-carrello/articolo-carrello.component';

@Component({
  selector: 'app-carrello-page',
  imports: [
    RouterLink,
    ArticoloCarrelloComponent
  ],
  templateUrl: './carrello-page.component.html',
  styleUrl: './carrello-page.component.css'
})
export class CarrelloPageComponent {

  protected readonly localStorage = localStorage;
  protected totale = 0;
  protected articoli: {
    id: number;
    nome: string;
    descrizione: string;
    prezzo: number;
    immagine: string
  }[] = JSON.parse(sessionStorage.getItem('cart') || '[]');

  constructor(private router: Router) {
    this.articoli = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart') || '[]') : [];
    console.log('Carrello:', this.articoli);
    this.totale = this.articoli.reduce((acc, curr) => acc + curr.prezzo, 0);
  }

  onCheckout() {
    console.log('Checkout!');
    sessionStorage.setItem('cart', '[]');
    this.articoli = [];
    this.totale = 0;
    this.router.navigate(['/checkout']);
  }

  resetCarrello() {
    console.log('Reset carrello!');
    sessionStorage.setItem('cart', '[]');
    this.articoli = [];
    this.totale = 0;
  }
}
