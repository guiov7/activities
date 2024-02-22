import { Component /* interface */, VERSION /* alias */ } from '@angular/core';

@Component(/* derivado da interface */{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// ESTANDO NO COMPONENT PAI
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonLabel: string = 'OLÁ'; // PASSAMOS PARÂMETROS PARA SEUS FILHOS
  buttonSecond: string = 'ADICIONAR aos Favoritos';
}
