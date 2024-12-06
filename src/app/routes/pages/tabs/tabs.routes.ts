import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',  // Aqui a raiz é diretamente 'tabs' já que está sendo carregada pela rota principal
    component: TabsPage,
    children: [
      {
        path: 'tarefas',
        loadComponent: () =>
          import('../../components/tarefas/tarefas.component').then((m) => m.TarefasComponent),
      },
      {
        path: 'grupos',
        loadComponent: () =>
          import('../../components/grupos/grupos.component').then((m) => m.GruposComponent),
      },
      {
        path: '',
        redirectTo: 'tarefas',  // Caminho relativo
        pathMatch: 'full',
      },
    ],
  },
];
