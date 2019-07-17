import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})

export class FormViewComponent implements OnInit {
  languages: Language[] = [
    {value: 'javascript', viewValue: 'JavaScript'},
    {value: 'java', viewValue: 'Java'},
    {value: 'python', viewValue: 'Python'},
    {value: 'html', viewValue: 'HTML'},
    {value: 'css', viewValue: 'CSS'},
    {value: 'aspnet', viewValue: 'ASP.NET (C#)'},
    {value: 'php', viewValue: 'PHP'},
    {value: 'cpp', viewValue: 'C++'},
    {value: 'c', viewValue: 'C'},
    {value: 'sql', viewValue: 'SQL'}
  ];

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'author': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'language': ['',Validators.required],
      'code': ['',Validators.required],
      'explanation': ['',Validators.required]
    })
  }

}

