import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCheckbox, IonContent, IonIcon, IonItem, IonLabel, IonList, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';
import { TarefaService } from 'src/app/core/services/tarefa.service';  // Importando o serviço

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss'],
  standalone: true,
  imports: [HeaderComponent, IonIcon, IonButton, IonCheckbox, IonList, IonItem, IonLabel, IonSearchbar, IonList, IonContent, FormsModule, CommonModule],
})
export class TarefasComponent implements OnInit {

  public iTarefas: Array<any> = [];
  public iSearch: string = '';

  constructor(
    private tarefaService: TarefaService // Injetando o serviço
  ) { 
    addIcons({ create });
  }

  ngOnInit() {    
    // Chamando o serviço para buscar as tarefas
    this.tarefaService.getTarefas().subscribe({
      next: (tarefas) => {
        this.iTarefas = tarefas;
      },
      error: (err) => {
        console.error('Erro ao buscar as tarefas', err);
      }
    });
  }
}
