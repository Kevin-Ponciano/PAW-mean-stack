import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthServices} from "../auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  myFormIn!: FormGroup;
  private authService = inject(AuthServices);

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.myFormIn = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])],
      password: [
        null,
        Validators.compose([
          Validators.required,
          // Validators.minLength(4),
          // this.minusculoFValidator,
        ])]
    });
  }

  minusculoFValidator(control: AbstractControl) {
    const pass = control.value as string;

    if ((pass !== pass?.toLowerCase()) && (pass !== null)) {
      return {minusculoF: true};
    } else {
      return null;
    }
  }

  onSubmit() {
    const email = this.myFormIn.value.email;
    const password = this.myFormIn.value.password;
    this.authService.login(email, password).subscribe({
      next: (response: any) => {
        if (response) {
          this.router.navigate(['/mensagens']);
        } else {
          console.log('error ao logar');
        }
      },
      error: (error: any) => {
        console.log('error', error);
      }
    });
    this.myFormIn.reset()
  }

}
