import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { FooterComponent } from './basic/footer/footer.component';
import { HeaderComponent } from './basic/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { PainelCurriculosComponent } from './views/painel-curriculos/painel-curriculos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CurriculosComponent,
    VagasComponent,
    FooterComponent,
    HeaderComponent,
    PainelVagasComponent,
    PainelCurriculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
