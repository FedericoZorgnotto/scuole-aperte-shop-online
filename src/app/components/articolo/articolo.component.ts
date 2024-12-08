import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-articolo',
  imports: [],
  templateUrl: './articolo.component.html',
  styleUrl: './articolo.component.css'
})
export class ArticoloComponent {
  @Input() nome: string | undefined;
  @Input() descrizione: string | undefined;
  @Input() prezzo: number | undefined;
  @Input() immagine: string | undefined;

  addToCart() {
    console.log('Aggiunto al carrello:', this.nome);

    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart.push({
      nome: this.nome,
      descrizione: this.descrizione,
      prezzo: this.prezzo,
      immagine: this.immagine
    });
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
}
