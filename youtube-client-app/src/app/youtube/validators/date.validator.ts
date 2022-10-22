import { FormControl } from '@angular/forms';
import { DateValidation } from '../models/date.model';

export class DateValidator {
  public static check(control: FormControl): DateValidation | null {
    const presentDate = new Date().getTime();
    if (!control) return null;
    return new Date(Date.parse(control.value)).getTime() > presentDate
      ? { wrongDate: control.value } : null;
  }
}
