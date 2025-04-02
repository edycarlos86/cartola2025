import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  ListaRodada = [
    {
      rodada: '1',
      time: 'raonymarlyn',
      cartoleiro: 'Raony',
      img: 'assets/img/raony.webp',
      pontos: '86,31',
      imgTam: 'imgTam'

    },
    {
      rodada: '2',
      time: 'Amorins 2.0 T',
      cartoleiro: 'Ednaldo',
      pontos: '79,25',
      img: 'assets/img/ednaldoT.webp',
      imgTam: 'imgTam'
    },
    {
      rodada: '3',
      time: 'Peladeiro da colina',
      cartoleiro: 'Bruno Lobato',
      pontos: '107,41',
      img: 'assets/img/bruno-lobato.webp'
    },
    {
      rodada: '4',
      time: 'Reprimir Segurança Pa...',
      cartoleiro: 'Fernando Araújo',
      pontos: '81,59',
      img: 'assets/img/fernando.webp'
    },
    {
      rodada: '5',
      time: 'Val Sports.fc',
      cartoleiro: 'Fábio Boy',
      pontos: '98,73',
      img: 'assets/img/fabinho.webp'
    },
    {
      rodada: '6',
      time: 'jmfut05',
      cartoleiro: 'Jorginho',
      pontos: '97,96',
      img: 'assets/img/jorginho.webp'
    },
    {
      rodada: '7',
      time: 'ZoioAGB.F.C',
      cartoleiro: 'André',
      pontos: '111,78',
      img: 'assets/img/andre.webp'
    },
    {
      rodada: '8',
      time: 'Apoel FC',
      cartoleiro: 'Helton',
      pontos: '131,68',
      img: 'assets/img/helton.webp'
    },
    {
      rodada: '9',
      time: 'S.E. Malte Puro',
      cartoleiro: 'Thiago Gouvêia',
      pontos: '85,59',
      img: 'assets/img/thiago.webp'
    },
    {
      rodada: '10',
      time: 'Mundial Atletic club',
      cartoleiro: 'Tony Andrade',
      pontos: '87,73',
      img: 'assets/img/tony.webp'
    },
    {
      rodada: '11',
      time: 'Mundial Atletic club',
      cartoleiro: 'Tony Andrade',
      pontos: '97,92',
      img: 'assets/img/tony.webp'
    },
    {
      rodada: '12',
      time: 'SCCP ELITE DG',
      cartoleiro: 'Douglas',
      pontos: '82,63',
      img: 'assets/img/douglas.webp'
    },
    {
      rodada: '13',
      time: 'Gabriel Condado',
      cartoleiro: 'Biel',
      pontos: '109,58',
      img: 'assets/img/biel.webp'
    },
    {
      rodada: '14',
      time: 'Mulekes do Futebol FC',
      cartoleiro: 'Wesllen',
      pontos: '103,33',
      img: 'assets/img/wesllen.webp'
    },
    {
      rodada: '15',
      time: 'FR01 F.C',
      cartoleiro: 'Felipe R.',
      pontos: '101,90',
      img: 'assets/img/feliper.webp'
    },
    {
      rodada: '16',
      time: 'Amorins F.C',
      cartoleiro: 'Ednaldo',
      pontos: '87,18',
      img: 'assets/img/ednaldo.webp'
    },
    {
      rodada: '17',
      time: 'Mancha Verde Limoeiro',
      cartoleiro: 'Rodrigo',
      pontos: '85,97',
      img: 'assets/img/rodrigo.webp'
    },
    {
      rodada: '18',
      time: 'Val Sports.fc',
      cartoleiro: 'Fabinho',
      pontos: '95,13',
      img: 'assets/img/fabinho.webp'
    },
    {
      rodada: '19',
      time: 'DeBarEmBar FC',
      cartoleiro: 'Thiago Fenelon',
      pontos: '106,04',
      img: 'assets/img/thiagoF.webp'
    },
    {
      rodada: '20',
      time: 'FLALIMOEIRO',
      cartoleiro: 'Jacó',
      pontos: '121,42',
      img: 'assets/img/jaco.webp'
    },
    {
      rodada: '21',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo',
      pontos: '75,75',
      img: 'assets/img/ednaldoV.webp'
    },
    {
      rodada: '22',
      time: 'Mulekes do Futebol FC',
      cartoleiro: 'Wesllen',
      pontos: '92,67',
      img: 'assets/img/wesllen.webp'
    },
    {
      rodada: '23',
      time: 'City Luva de pedreiro FC',
      cartoleiro: 'Renato',
      pontos: '70,90',
      img: 'assets/img/renato.png'
    },
    {
      rodada: '24',
      time: 'Bruninho Sport FC Anual',
      cartoleiro: 'Bruno Santos',
      pontos: '135,30',
      img: 'assets/img/bruno.png'
    },
    {
      rodada: '25',
      time: 'tira goga bjj',
      cartoleiro: 'Thiago Alves',
      pontos: '99,97',
      img: 'assets/img/thiagoa.png'
    },
    {
      rodada: '26',
      time: 'VAPORR F.C',
      cartoleiro: 'Alberto Luiz',
      pontos: '124,84',
      img: 'assets/img/vaporr.png'
    },
    {
      rodada: '27',
      time: 'FR01 F.C',
      cartoleiro: 'Felipe R.',
      pontos: '117,07',
      img: 'assets/img/feliper.webp'
    },
    {
      rodada: '28',
      time: 'SE Palmeiras FN',
      cartoleiro: 'Adauto',
      pontos: '101,43',
      img: 'assets/img/adauto.png'
    },
    {
      rodada: '29',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo',
      pontos: '89,75',
      img: 'assets/img/ednaldoV.webp'
    },
    {
      rodada: '30',
      time: 'Reprimir Segurança Patrimonial',
      cartoleiro: 'Fernando',
      pontos: '117,53',
      img: 'assets/img/fernando.webp'
    },
    {
      rodada: '31',
      time: 'S.E.Malte Puro',
      cartoleiro: 'Thiago',
      pontos: '101,62',
      img: 'assets/img/thiago.webp'
    },
    {
      rodada: '32',
      time: 'tira goga bjj',
      cartoleiro: 'Thiago Alves',
      pontos: '110,22',
      img: 'assets/img/thiagoa.png'
    },
    {
      rodada: '33',
      time: 'City Luva de Pedreiro FC',
      cartoleiro: 'Renato Luna',
      pontos: '114,05',
      img: 'assets/img/renato.png'
    },
    {
      rodada: '34',
      time: 'apoel sport club fc',
      cartoleiro: 'Ruan Silva',
      pontos: '93,30',
      img: 'assets/img/ruan.webp'
    },
    {
      rodada: '35',
      time: 'boyzinh04.fc',
      cartoleiro: 'Marcos Carpim',
      pontos: '114,08',
      img: 'assets/img/marcos.png'
    },
    {
      rodada: '36',
      time: 'SCCP ELITE DG',
      cartoleiro: 'Douglas',
      pontos: '111,25',
      img: 'assets/img/douglas.webp'
    },
  ]


  ListaTurno1 = [
    {
      rodada: '1',
      time: 'ZoioAGB',
      cartoleiro: 'André Barros',
      pontos: '1471,72',
      img: 'assets/img/andre.webp',
      premio: 'R$ 230,00',
    }
  ]


  ListaTop5 = [
    {
      rodada: '1',
      time: 'ZoioAGB',
      cartoleiro: 'André Barros',
      pontos: '2.847,14',
      img: 'assets/img/andre.webp',
      premio: 'R$ 1.200,00',
    },
    {
      rodada: '2',
      time: 'Mulekes do Futebol FC',
      cartoleiro: 'Wesllen',
      pontos: '2.832,91',
      img: 'assets/img/wesllen.webp',
      premio: 'R$ 600,00'
    },
    {
      rodada: '3',
      time: 'Bruninho Sport FC Anual',
      cartoleiro: 'Bruno',
      pontos: '2.801,91',
      img: 'assets/img/bruno.png',
      premio: 'R$ 350,00',
    },
    {
      rodada: '4',
      time: 'Amorins F.C',
      cartoleiro: 'Ednaldo',
      pontos: '2.782,20',
      img: 'assets/img/ednaldo.webp',
      premio: 'R$ 200,00',
    },

    {
      rodada: '5',
      time: 'Amorins 2.0 T',
      cartoleiro: 'Ednaldo',
      pontos: '2.759,62',
      img: 'assets/img/ednaldoT.webp',
      premio: 'R$ 100,00',
    },


  ]

  ListaMito = [
    {
      rodada: '24',
      time: 'Bruninho Sport FC Anual',
      cartoleiro: 'Bruno Santos',
      pontos: '135,30',
      img: 'assets/img/bruno.png'
    },
  ]

  ListaMaisRico = [
    {
      rodada: '-',
      time: 'Amorins V',
      cartoleiro: 'Ednaldo',
      cartoletas: '403,56',
      img: 'assets/img/ednaldoV.webp'
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
