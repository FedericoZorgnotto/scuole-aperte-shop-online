import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-articolo-carrello',
  imports: [],
  templateUrl: './articolo-carrello.component.html',
  styleUrl: './articolo-carrello.component.css'
})
export class ArticoloCarrelloComponent {
  @Input() nome: string | undefined;
  @Input() descrizione: string | undefined;
  @Input() prezzo: number | undefined;
  @Input() immagine: string | undefined;
}
