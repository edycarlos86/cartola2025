import { Component, ElementRef, ViewChild } from '@angular/core';






@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})



export class ResultadosComponent {
  isDarkMode: boolean = false;

  ListaRodada = [
    {
      rodada: '1',
      time: 'Jovem PST',
      cartoleiro: 'Matheus Almeida',
      img: 'assets/img/jovem PST.png',
      pontos: '99,28',
      imgTam: 'imgTam'
    },
    {
      rodada: '2',
      time: 'raonymarlyn',
      cartoleiro: 'Raony Marlyn',
      img: 'assets/img/raonymarlyn.png',
      pontos: '107,92',
      imgTam: 'imgTam'

    },

  ]


/*   ListaTurno1 = [
    {
      rodada: '1',
      time: 'ZoioAGB',
      cartoleiro: 'André Barros',
      pontos: '1471,72',
      img: 'assets/img/andre.webp',
      premio: 'R$ 230,00',
    }
  ] */


  ListaTop5 = [
    {
      rodada: '1',
      time: 'Jovem PST',
      cartoleiro: 'Matheus Almeida',
      pontos: '196,50',
      img: 'assets/img/jovem PST.png',
      premio: 'R$ 1.200,00',
    },
    {
      rodada: '2',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo Amorim',
      pontos: '182,76',
      img: 'assets/img/Amorins V.png',
      premio: 'R$ 700,00',
    },
    {
      rodada: '3',
      time: 'OTAN 01',
      cartoleiro: 'Diego',
      pontos: '179,20',
      img: 'assets/img/OTAN 01.png',
      premio: 'R$ 385,00',
    },
    {
      rodada: '4',
      time: 'S.E Malte Puro',
      cartoleiro: 'Thiago Gouveia',
      pontos: '178,73',
      img: 'assets/img/Amorins V.png',
      premio: 'R$ 250,00',
    },

    {
      rodada: '5',
      time: 'Rodrigo FC 29',
      cartoleiro: 'Rodrigo',
      pontos: '83.28',
      img: 'assets/img/rodrigo.png',
      premio: 'R$ 150,00',
    },


  ]

  ListaMito = [
    {
      rodada: '2',
      time: 'raonymarlyn',
      cartoleiro: 'Raony Marlyn',
      img: 'assets/img/raonymarlyn.png',
      pontos: '107,92',
    },
  ]

  ListaMaisRico = [
    {
      rodada: '-',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo',
      cartoletas: '146,13',
      img: 'assets/img/Amorins V.png'
    },
  ]

  ListaMataMata = [
    {
      campeao: '1',
      time: 'Edytricoloor',
      cartoleiro: 'Edy',
      pontos: '131,68',
      img: 'assets/img/edy.webp'
    },
    {
      campeao: '2',
      time: 'Amorins 2.0T',
      cartoleiro: 'Ednaldo',
      img: 'assets/img/ednaldoT.webp'
    },
    {
      campeao: '3',
      time: 'Viniv sport clube',
      cartoleiro: 'Vinicius',
      img: 'assets/img/vinicius.webp'
    },
    {
      campeao: '4',
      time: 'Mulekes do Futebol FC',
      cartoleiro: 'Wesllen',
      img: 'assets/img/wesllen.webp'
    },
    {
      campeao: '5',
      time: 'Mundial Atletic Clube',
      cartoleiro: 'Tony',
      img: 'assets/img/tony.webp'
    },
  ]
}
