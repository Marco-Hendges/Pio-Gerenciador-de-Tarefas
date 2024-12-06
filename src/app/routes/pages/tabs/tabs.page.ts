import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, ActionSheetController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, list, people, create, close } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [ IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {
    addIcons({ list, add, people, create, close });
  }

  async openCadastroOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Escolha uma opção',
      buttons: [
        {
          text: 'Cadastrar Tarefa',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/cadastrar-tarefa']);
          },
        },
        {
          text: 'Cadastrar Grupo',
          icon: 'people',
          handler: () => {
            this.router.navigate(['/cadastrar-grupo']);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
