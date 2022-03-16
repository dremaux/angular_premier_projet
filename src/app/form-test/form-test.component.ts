import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    });
  }

  login() {
    console.log('Données du formulaire...', this.loginForm.value);
  }
}
