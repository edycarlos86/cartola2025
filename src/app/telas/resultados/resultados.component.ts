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
    {
      rodada: '11',
      time: 'Bidalão FC',
      cartoleiro: 'Abdalla',
      pontos: '132,57',
      img: 'assets/img/abdalla.png',
      imgTam: 'imgTam'
    },
        {
      rodada: '12',
      time: 'AFênix_Flamengo',
      cartoleiro: 'Jefferson Ferreira',
      pontos: '91,20',
      img: 'assets/img/jefferson.png',
      imgTam: 'imgTam'
    },
            {
      rodada: '13',
      time: 'City Luva de Pedreiro FC',
      cartoleiro: 'Renato Luna',
      pontos: '134,14',
      img: 'assets/img/renato.png',
      imgTam: 'imgTam'
    },
             {
      rodada: '14',
      time: 'Siid SFC',
      cartoleiro: 'Siid Gomez',
      pontos: '89,08',
      img: 'assets/img/Siid.png',
      imgTam: 'imgTam'
    },
                {
      rodada: '15',
      time: 'Congal FC',
      cartoleiro: 'Wellington Santos',
      pontos: '117,70',
      img: 'assets/img/wellington.png',
      imgTam: 'imgTam'
    },
    {
      rodada: '16',
      time: 'boyzinh04.fc',
      cartoleiro: 'Marcos Carpim',
      pontos: '94,12',
      img: 'assets/img/boyzinh04.fc.png',
      imgTam: 'imgTam'
    },
        {
      rodada: '17',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo Silva',
      pontos: '93,44',
      img: 'assets/img/Amorins V.png',
      imgTam: 'imgTam'
    },
           {
      rodada: '18',
      time: 'Andrei 87FC',
      cartoleiro: 'Andrei',
      pontos: '121,30',
      img: 'assets/img/andrei.png',
      imgTam: 'imgTam'
    },
               {
      rodada: '19',
      time: 'BoladobetsFC',
      cartoleiro: 'Filipe Bolado',
      pontos: '88,91',
      img: 'assets/img/filipe.png',
      imgTam: 'imgTam'
    },
                  {
      rodada: '20',
      time: 'Peladeiro da colina',
      cartoleiro: 'Bruno Lobato',
      pontos: '92,94',
      img: 'assets/img/lobato.png',
      imgTam: 'imgTam'
    },
                      {
      rodada: '21',
      time: 'VAPORR F.C',
      cartoleiro: 'Alberto Luiz',
      pontos: '213,96',
      img: 'assets/img/vaporr.png',
      imgTam: 'imgTam'
    },



  ]


   ListaTurno1 = [
    {
      rodada: '19',
      time: 'Rodrigo FC 29',
      cartoleiro: 'Rodrigo',
      pontos: '1.736,89',
      img: 'assets/img/rodrigo.png',
      premio: 'R$ 230,00',
    },
  ]


  ListaTop5 = [
    {
      rodada: '1',
      time: 'Rodrigo FC 29',
      cartoleiro: 'Rodrigo',
      pontos: '2.012,31',
      img: 'assets/img/rodrigo.png',
      premio: 'R$ 1.200,00',
    },
            {
      rodada: '2',
      time: 'Andrei 87FC',
      cartoleiro: 'Andrei',
      pontos: '1.993,20',
      img: 'assets/img/andrei.png',
      premio: 'R$ 700,00',
    },
        {
      rodada: '3',
      time: 'boyzinho04.fc',
      cartoleiro: 'Marcos Caspim',
      pontos: '1.954,08',
      img: 'assets/img/boyzinh04.fc.png',
      premio: 'R$ 385,00',
    },
        {
      rodada: '4',
      time: 'Queimada dos Loiolas',
      cartoleiro: 'Igor Loiola',
      pontos: '1.944,78',
      img: 'assets/img/igor.png',
      premio: 'R$ 250,00',
    },
    {
      rodada: '5',
      time: 'FLALIMOEIRO',
      cartoleiro: 'Jacó',
      pontos: '1.938,31',
      img: 'assets/img/jaco.png',
      premio: 'R$ 150,00',
    },
  ]

  ListaMito = [

    {
      rodada: '21',
      time: 'VAPORR F.C',
      cartoleiro: 'Alberto',
      pontos: '213,96',
      img: 'assets/img/vaporr.png',
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
      cartoletas: '306,79',
      img: 'assets/img/Amorins V.png'
    },
  ]


}
