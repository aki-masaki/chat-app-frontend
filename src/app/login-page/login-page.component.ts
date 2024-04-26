import { Component } from '@angular/core'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { BACKEND_URL } from '../constants'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  formGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  public constructor(private http: HttpClient) {}

  submit() {
    this.http
      .post(
        `${BACKEND_URL}/auth/login`,
        this.formGroup.value
      )
      .subscribe(result => console.log(result))
  }
}
