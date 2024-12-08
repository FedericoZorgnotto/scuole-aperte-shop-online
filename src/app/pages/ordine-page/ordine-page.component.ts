import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-ordine-page',
  imports: [
    RouterLink
  ],
  templateUrl: './ordine-page.component.html',
  styleUrl: './ordine-page.component.css'
})
export class OrdinePageComponent {

  protected readonly localStorage = localStorage;
}
