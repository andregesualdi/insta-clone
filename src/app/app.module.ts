import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AcessoComponent } from './core/components/acesso/acesso.component';
import { BannerComponent } from './core/components/acesso/banner/banner.component';
import { LoginComponent } from './core/components/acesso/login/login.component';
import { CadastroComponent } from './core/components/acesso/cadastro/cadastro.component';
import { AutenticacaoService } from './core/services/autenticacao.service';
import { HomeComponent } from './core/components/home/home.component';
import { PublicacoesComponent } from './core/components/home/publicacoes/publicacoes.component';
import { AutenticacaoGuardService } from './core/services/autenticacao-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AutenticacaoService, AutenticacaoGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
