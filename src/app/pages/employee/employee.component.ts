import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employees: any = {};
  constructor(private formBuilder: FormBuilder) {}

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],

    email: ['', Validators.compose([Validators.required, Validators.email])],

    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  hide: boolean = true;

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  saveClient() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      console.log('Inválido');
    }
  }

  isError(control: 'name' | 'email' | 'password', validator: string) {
    return this.formGroup.controls[control].getError(validator) ? true : false;
  }
}
