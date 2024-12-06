import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCard, IonContent, IonIcon, IonItem, IonLabel, NavController, Platform, IonDatetimeButton, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmark } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';
import { format } from 'date-fns'; // Biblioteca para manipular datas


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonDatetimeButton, IonCard, HeaderComponent, IonIcon, IonButton, IonContent, ReactiveFormsModule, FormsModule],
})
export class CadastrarTarefaComponent implements OnInit {
  taskForm: FormGroup;
  tarefaNome: string = '';
  tarefaData: string = '';
  tarefaAtribuicao: string = '';
  tarefaDescricao: string = '';

  taskDate: string = ''; // Valor inicial (opcional)
  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private platform: Platform,
  ) {
    addIcons({ checkmark });

    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
      assignee: [''],
      description: [''],
    });

    console.log(this.taskForm);
    console.log('Inicializou o construtor');
  }

  ngOnInit() { 
    console.log('Inicializou o ngOnInit');
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   // Redireciona para a tela de Tarefas
    //   this.navCtrl.navigateBack(['/tabs/tarefas']);
    // });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Tarefa cadastrada:', this.taskForm.value);
      // Lógica para salvar a tarefa
      this.navCtrl.navigateBack('/tabs/tarefas'); // Redireciona para a lista de tarefas
    } else {
      console.error('Formulário inválido');
    }
  }

    // Método chamado quando a data é alterada
    onDateChange(event: any) {
      const date = new Date(event.detail.value);
      this.taskDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`; // Formata a data para "DD-MM-YYYY"
      console.log('Data selecionada:', this.taskDate);
    }

}
