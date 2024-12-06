import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse, User } from '../models/user.model';
import { StorageUtil } from 'src/app/shared/utils/storage.util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = `${environment.apiUrl}/login`;

  constructor(
    private http: HttpClient, 
    private storage: StorageUtil
  ) {}

  public login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.API_URL, user).pipe(
      tap((response) => {
        this.storage.set('auth_token', response.token); // Armazena o token
      })
    );
  }
}
