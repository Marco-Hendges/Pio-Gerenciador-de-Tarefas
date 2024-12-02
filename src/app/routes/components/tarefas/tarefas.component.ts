import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCheckbox, IonContent, IonIcon, IonItem, IonLabel, IonList, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCheckbox, IonList, IonItem, IonLabel, IonSearchbar, IonList, IonContent, FormsModule, CommonModule],
})
export class TarefasComponent implements OnInit {

  public iTarefas: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.iTarefas = [
      {
        title: 'Fazer protótipo de um Gerenciador de Tarefas',
        description: 'Organizar o grupo para fazer o planejamento e implementar um protótipo.',
        date: new Date(2024, 7, 20, 18, 0),
        group: 'Debugging Dragons',
        completed: false,
      },
      {
        title: 'Fazer trabalho de sexta',
        description: 'Utilizar as medições anotadas no docs salvo no drive da matéria.',
        date: new Date(2024, 7, 24, 13, 30),
        group: 'TI Inteligente',
        completed: false,
      },
    ];
  }

}
