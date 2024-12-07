import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCard, IonContent, IonIcon, IonItem, IonLabel, NavController, Platform, IonDatetimeButton, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmark } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';
import { format } from 'date-fns'; // Biblioteca para manipular datas
import { TarefaService } from 'src/app/core/services/tarefa.service';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonDatetimeButton, IonCard, HeaderComponent, IonIcon, IonButton, IonContent, ReactiveFormsModule, FormsModule],
})
export class CadastrarTarefaComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private tarefaService: TarefaService // Serviço injetado
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      datetime: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() { { } }

  onSubmit() {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;

      // Converte a data para o formato ISO 8601
      const formattedTask = {
        title: formData.title,
        datetime: new Date(formData.datetime).toISOString(),
        description: formData.description,
      };

      // Utiliza o serviço para enviar a tarefa para a API
      this.tarefaService.addTarefa(formattedTask).subscribe({
        next: (response: any) => {
          console.log('Tarefa cadastrada com sucesso:', response);
          alert('Tarefa cadastrada com sucesso!');
          this.navCtrl.navigateBack('/tabs/tarefas'); // Redireciona para a lista de tarefas
        },
        error: (err: any) => {
          console.error('Erro ao cadastrar a tarefa:', err);
          alert('Erro ao cadastrar a tarefa.');
        },
      });
    } else {
      console.error('Formulário inválido');
      alert('Preencha todos os campos obrigatórios.');
    }
  }

}
