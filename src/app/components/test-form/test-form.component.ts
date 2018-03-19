import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  workTypeDef = new WorkTypeDefObject();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.workTypeDef));
  }
}

export class WorkTypeDefObject {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string
  ) {}
}
