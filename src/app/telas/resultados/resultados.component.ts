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
      time: 'Matheus Almeida Anual',
      cartoleiro: 'Matheus Almeida',
      img: 'assets/img/Matheus.png',
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
    {
      rodada: '3',
      time: 'Bruninho Sport FC Anual',
      cartoleiro: 'Bruno Santos',
      img: 'assets/img/Bruno.png',
      pontos: '113,92',
      imgTam: 'imgTam'
    },
    {
      rodada: '4',
      time: 'Rodrigo FC 29',
      cartoleiro: 'Rodrigo',
      pontos: '138,66',
      img: 'assets/img/rodrigo.png',
      imgTam: 'imgTam'
    },
    {
      rodada: '5',
      time: 'boyzinh04.fc',
      cartoleiro: 'Marcos Carpim',
      pontos: '103,27',
      img: 'assets/img/boyzinh04.fc.png',
      imgTam: 'imgTam'
    },
    {
      rodada: '6',
      time: 'bahea tricolor d aço',
      cartoleiro: 'Antônio',
      pontos: '131,66',
      img: 'assets/img/antonio.png',
      imgTam: 'imgTam'
    },
    {
      rodada: '7',
      time: 'Serrote Sport Club',
      cartoleiro: 'Brivaldo',
      pontos: '127,21',
      img: 'assets/img/brivaldo.png',
      imgTam: 'imgTam'
    },
       {
      rodada: '8',
      time: 'jmfut05',
      cartoleiro: 'Jorginho',
      pontos: '180,80',
      img: 'assets/img/jorginho.png',
      imgTam: 'imgTam'
    },
           {
      rodada: '9',
      time: 'Hendy Futebol',
      cartoleiro: 'Hendy',
      pontos: '102,47',
      img: 'assets/img/hendy.png',
      imgTam: 'imgTam'
    },
    {
      rodada: '10',
      time: 'Val Sports.fc',
      cartoleiro: 'Fábio Boy',
      pontos: '87,67',
      img: 'assets/img/fabinho.png',
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
      time: 'Rodrigo FC 29',
      cartoleiro: 'Rodrigo',
      pontos: '970,89',
      img: 'assets/img/rodrigo.png',
      premio: 'R$ 1.200,00',
    },
    {
      rodada: '2',
      time: 'boyzinho04.fc',
      cartoleiro: 'Marcos Caspim',
      pontos: '921,79',
      img: 'assets/img/boyzinh04.fc.png',
      premio: 'R$ 700,00',
    },
    {
      rodada: '3',
      time: 'AlahuAkbar Boom',
      cartoleiro: 'Ali Mahmoud Baalbaki',
      pontos: '920,69',
      img: 'assets/img/ali.png',
      premio: 'R$ 385,00',
    },
    {
      rodada: '4',
      time: 'Queimada dos Loiolas',
      cartoleiro: 'Igor Loiola',
      pontos: '908,86',
      img: 'assets/img/igor.png',
      premio: 'R$ 250,00',
    },
       {
      rodada: '5',
      time: 'jmfut05',
      cartoleiro: 'Jorginho',
      pontos: '906,12',
      img: 'assets/img/jorginho.png',
      premio: 'R$ 150,00',
    },  ]

  ListaMito = [

    {
      rodada: '8',
      time: 'jmfut05',
      cartoleiro: 'Jorginho',
      pontos: '180,80',
      img: 'assets/img/jorginho.png',
    },
  ]

  ListaMaisRico = [
   /*  {
      rodada: '-',
      time: 'Edytricoloor V',
      cartoleiro: 'Edy',
      cartoletas: '174,39',
      img: 'assets/img/EdyV.png'
    }, */
    {
      rodada: '-',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo Amorim',
      cartoletas: '229,75',
      img: 'assets/img/Amorins V.png'
    },
  ]

  /* ListaMataMata = [
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
  ] */
}
