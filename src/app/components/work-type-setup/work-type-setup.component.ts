import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';
import { CustomValidators, ConfirmValidParentMatcher, regExps, errorMessages } from '../../shared/custom-validators';


@Component({
  selector: 'app-work-type-setup',
  templateUrl: './work-type-setup.component.html',
  styleUrls: ['./work-type-setup.component.css']
})
export class WorkTypeSetupComponent implements OnInit {
  userRegistrationForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm_0() {
    const loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });
  }

  createForm() {
    this.userRegistrationForm = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      emailGroup: this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        confirmEmail: ['', Validators.required]
      }, { validator: CustomValidators.childrenEqual}),
      passwordGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.pattern(regExps.password)
        ]],
        confirmPassword: ['', Validators.required]
      }, { validator: CustomValidators.childrenEqual})
    });
  }

  register(): void {
    // API call to register your user
    console.log('registered');
  }
}
