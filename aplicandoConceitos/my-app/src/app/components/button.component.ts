import { Component, Input } from '@angular/core';

@Component( {
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
// Lembrando que -> este Component é uma child do app.component
export class ButtonComponent {
    @Input() label: string; // DECLARAMOS OS PARÂMETROS RECEBIDOS DO PAI
    buttonTxt: string = 'ACESSAR';
    buttonMulti: string[] = ['VENDER', 'COMPRAR', 'SUBSCREVER'];
    buttonNumber: number = 1;
    buttonObject = {
        label: 'adicionar ao carrinho'
    };
    // EVENT BINDING = associação de dados chamando eventos
    getAlert(num: number) {
        alert(num);
    }
}