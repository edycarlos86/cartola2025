import { Component } from '@angular/core';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent {

  listDownload = [
    {
      rodada: '1',
      fileUrlRodada: 'assets/pdf/rodada1-geral.pdf',
      fileUrlGeral: 'assets/pdf/rodada1-geral.pdf'
    },
  ]


}
