import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post(
        'http://test-demo.aemenersol.com/api/account/login',
        {
          username,
          password,
        },
        { responseType: 'text' },
      )
      .pipe(
        tap((token) => {
          const cleanToken = token.replace(/['"]/g, ''); // remove quotes
          localStorage.setItem('token', cleanToken);
        }),
      );
  }
}
