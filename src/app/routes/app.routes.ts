import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'cadastrar-tarefa',
    loadComponent: () => import('./components/cadastrar-tarefa/cadastrar-tarefa.component').then((m) => m.CadastrarTarefaComponent),
  },
  {
    path: 'cadastrar-grupo',
    loadComponent: () => import('./components/cadastrar-grupo/cadastrar-grupo.component').then((m) => m.CadastrarGrupoComponent),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes)
  },
];
