import { Routes } from '@angular/router';
import { ElencoProdotti } from './elenco-prodotti/elenco-prodotti';
import { Carrello } from './carrello/carrello';

export const routes: Routes = [
    { path: "", redirectTo: "prodotti", pathMatch:"full"},
    { path: "prodotti", component: ElencoProdotti},
    { path: "carrello", component: Carrello}
];
