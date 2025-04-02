import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiacaoComponent } from './telas/premiacao/premiacao.component';
import { RegrasComponent } from './telas/regras/regras.component';
import { ClassificacaoComponent } from './telas/classificacao/classificacao.component';
import { ResultadosComponent } from './telas/resultados/resultados.component';

export const routes: Routes = [
  { path: '', component: ResultadosComponent },
  { path: 'resultados', component: ResultadosComponent},
  { path: 'classificacao', component: ClassificacaoComponent},
  { path: 'regras', component: RegrasComponent},
  { path: 'premiacao', component: PremiacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
