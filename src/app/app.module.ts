import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AcessoComponent } from './core/components/acesso/acesso.component';
import { BannerComponent } from './core/components/acesso/banner/banner.component';
import { LoginComponent } from './core/components/acesso/login/login.component';
import { CadastroComponent } from './core/components/acesso/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
