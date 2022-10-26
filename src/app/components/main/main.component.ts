import { Component, OnInit } from '@angular/core';

import { Conta } from 'src/app/Conta';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  contas: Conta[] = [
    {title: 'Contas a Pagar', value: 202, sub: 'Até a data atual', img:'../../../assets/Main/cash.png'},
    {title: 'Boletos Gerados', value: 23, sub: 'Até a data atual', img:'../../../assets/Main/pay.png'},
    {title: 'Dias Corridos', value: 17, sub: 'Total de dias', img:'../../../assets/Main/calendar.png'},
    {title: 'Dias Úteis', value: 9, sub: 'Dias corridos', img:'../../../assets/Main/calendar.png'},
  ];

  faturas = [
    {title: 'Faturamento', value: 1945351, sub: 'Até a data atual', img:'../../../assets/Main/grafico.png'},
    {title: 'Vendas', value: 0, sub: 'Vendas até hoje', img:'../../../assets/Main/grafico2.png'},
  ];

  clientes = [
    {title: 'Novos Clientes', value: 54},
    {title: 'Reclamações', value: 6},
  ]

  dataMes: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
