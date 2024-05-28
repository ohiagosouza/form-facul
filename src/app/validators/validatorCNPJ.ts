import { AbstractControl, ValidatorFn } from '@angular/forms';
import { validate_cnpj } from 'js-brasil/src/validate';
export function validateCNPJ(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;

    if (value == null) {
      return null;
    }

    const isCNPJ = validate_cnpj(value);

    return isCNPJ ? null : { validateCNPJ: true };
  };
}
