import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { PouchDbService } from 'src/app/core/services/pouchdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private pouchDbService: PouchDbService,
  ) {}

  onSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    this.auth.login(username!, password!).subscribe({
      next: () => {
        console.log('LOGIN SUCCESS');

        this.pouchDbService.saveUser(username!, password!);

        this.router.navigate(['/dashboard']);
      },
      error: async (err) => {
        const valid = await this.pouchDbService.validateUser(
          username!,
          password!,
        );

        if (valid) {
           console.log('LOGIN SUCCESS TRIGGERED from pouchdb');
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
    });
  }
}
