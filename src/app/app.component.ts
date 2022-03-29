import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPassword: boolean = false;
  arrGender: any = [
    {
      text: 'M',
      selected: false,
    },
    {
      text: 'F',
      selected: false,
    },
    {
      text: 'X',
      selected: false,
    },
  ];
  FormControl1 = new FormControl('', [Validators.required]);
  FormControl2 = new FormControl('', [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: false,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }
  changeclass(indexOfelement: number) {
    this.arrGender[indexOfelement].selected = true;
    this.arrGender.forEach((element, index) => {
      if (indexOfelement != index) {
        element.selected = false;
      }
    });
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
