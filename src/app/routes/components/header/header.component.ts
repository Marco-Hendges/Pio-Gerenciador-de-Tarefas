import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOut } from 'ionicons/icons';
import { StorageUtil } from 'src/app/shared/utils/storage.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle],
})
export class HeaderComponent {
  @Input() title: string = ''; // Propriedade de entrada para o título do header

  constructor(
    private navCtrl: NavController,
    private storage: StorageUtil // Serviço de armazenamento injetado
  ) { 
    addIcons({logOut});
  }

  logout() {
    // Remove o token do armazenamento
    this.storage.remove('auth_token');

    // Redireciona para a tela de login
    this.navCtrl.navigateRoot('/login');
    console.log('Usuário desconectado.');
  }

}
