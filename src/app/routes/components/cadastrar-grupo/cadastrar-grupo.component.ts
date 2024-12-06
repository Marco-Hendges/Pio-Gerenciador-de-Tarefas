import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmark } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-cadastrar-grupo',
  templateUrl: './cadastrar-grupo.component.html',
  styleUrls: ['./cadastrar-grupo.component.scss'],
  standalone: true,
  imports: [HeaderComponent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonList, IonContent, FormsModule, CommonModule, ReactiveFormsModule],
})
export class CadastrarGrupoComponent implements OnInit {

  grupoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    addIcons({ checkmark });

    this.grupoForm = this.fb.group({
      nome: ['', Validators.required],
      integrantes: ['', Validators.required],
      descricao: [''],
    });
  }

  ngOnInit() { { } }


  salvarGrupo() {
    if (this.grupoForm.valid) {
      console.log('Grupo Salvo:', this.grupoForm.value);
      // Aqui você pode adicionar a lógica para salvar o grupo (ex: enviar para API)
      this.router.navigate(['/tabs/grupos']); // Redireciona para a aba de grupos
    } else {
      console.log('Formulário inválido');
    }
  }

  voltar() {
    this.router.navigate(['/tabs/grupos']);
  }


}
