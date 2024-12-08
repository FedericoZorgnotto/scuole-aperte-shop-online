import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ArticoloComponent} from '../../components/articolo/articolo.component';
import {ArticoliService} from '../../services/articoliService/articoli.service';

@Component({
  selector: 'app-shop-page',
  imports: [
    RouterLink,
    ArticoloComponent
  ],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {
  protected articoli: { id: number; nome: string; descrizione: string; prezzo: number; immagine: string }[];
  constructor(private ArticoliAPI: ArticoliService) {
    this.articoli = this.ArticoliAPI.getArticoli();
  }

  protected readonly localStorage = localStorage;
}
