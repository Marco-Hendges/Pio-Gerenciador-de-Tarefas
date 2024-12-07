import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageUtil } from 'src/app/shared/utils/storage.util'; // Importar o utilitário de armazenamento

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private apiUrl = `${environment.apiUrl}/tasks`; // URL da sua API

  constructor(
    private http: HttpClient,
    private storage: StorageUtil // Utilitário para armazenamento de dados
  ) {}

  // Método para buscar tarefas
  public getTarefas(): Observable<any[]> {
    const token = this.storage.get('auth_token'); // Obter o token armazenado

    // Criar o cabeçalho com o token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Adicionar o token ao cabeçalho
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  // Método para cadastrar uma nova tarefa
  public addTarefa(task: { title: string; datetime: string; description: string }): Observable<any> {
    const token = this.storage.get('auth_token'); // Obter o token armazenado

    // Criar o cabeçalho com o token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json', // Indicar que o conteúdo será JSON
    });

    return this.http.post<any>(this.apiUrl, task, { headers });
  }
}
