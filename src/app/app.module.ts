import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassificacaoComponent } from './telas/classificacao/classificacao.component';
import { FooterComponent } from './telas/footer/footer.component';
import { MenuComponent } from './telas/menu/menu.component';
import { PremiacaoComponent } from './telas/premiacao/premiacao.component';
import { RegrasComponent } from './telas/regras/regras.component';
import { ResultadosComponent } from './telas/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassificacaoComponent,
    FooterComponent,
    MenuComponent,
    PremiacaoComponent,
    RegrasComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
