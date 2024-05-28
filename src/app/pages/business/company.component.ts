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
import { validateCNPJ } from '../../validators/validatorCNPJ';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent {
  companys: any = {};

  constructor(private formBuilder: FormBuilder) {}

  formGroup = this.formBuilder.group({
    companyName: ['', Validators.required],

    companyEmail: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    companyCNPJ: ['', validateCNPJ()],

    companyPassword: [
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
      alert('Formulário Inválido');
    }
  }

  isError(
    control: 'companyName' | 'companyEmail' | 'companyPassword' | 'companyCNPJ',
    validator: string
  ) {
    return this.formGroup.controls[control].getError(validator) ? true : false;
  }
}
