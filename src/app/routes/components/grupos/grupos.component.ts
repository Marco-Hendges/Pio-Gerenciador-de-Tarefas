import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonSearchbar, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, HeaderComponent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonSearchbar, IonList, IonContent, FormsModule, CommonModule],
})
export class GruposComponent implements OnInit {

  constructor() {
    addIcons({ create });
   }


  public iSearch: string = '';
  newMember: string = '';

  public iGrupos: Array<any> = [];

  ngOnInit() {
    this.iGrupos = [
      {
        nome: 'Debugging Dragons',
        membros: ['william.fagundes@sou.unijui.edu.br', 'marco.hendges@sou.unijui.edu.br', 'cristian.siqueira@sou.unijui.edu.br', 'pedro.frosi@sou.unijui.edu.br', 'gabriel.fontana@sou.unijui.edu.br']
      },
      {
        nome: 'Mundo Digital',
        membros: ['william.fagundes@sou.unijui.edu.br', 'marco.hendges@sou.unijui.edu.br']
      }
    ];
  }

  filteredGroups() {
    return this.iGrupos.filter(group =>
      group.nome.toLowerCase().includes(this.iSearch.toLowerCase())
    );
  }

  addMember(group: any) {
    if (this.newMember.trim()) {
      group.membros.push(this.newMember);
      this.newMember = '';
    }
  }

}
