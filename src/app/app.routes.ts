import { Routes } from '@angular/router';
import { AcessoComponent } from './core/components/acesso/acesso.component';
import { HomeComponent } from './core/components/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: AcessoComponent },
    { path: 'home', component: HomeComponent }
]
