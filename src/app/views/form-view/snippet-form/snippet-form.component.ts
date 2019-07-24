import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetsService } from 'src/app/services/snippets/snippets.service';
import { Snippet } from 'src/app/services/snippets/snippet.interface';

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.scss']
})
export class SnippetFormComponent implements OnInit {

  @Output()
  added: EventEmitter<Snippet> = new EventEmitter();

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
  constructor(private formBuilder: FormBuilder, 
    private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'author': ['a',Validators.required],
      'title': ['b',Validators.required],
      'email': ['abc@def.pl',[Validators.required, Validators.email]],
      'language': ['java',Validators.required],
      'code': ['xxx',Validators.required],
      'explanation': ['vvv',Validators.required]
    })
  }
  add() {
    const snippet = this.form.getRawValue();
    this.snippetsService.addSnippet(snippet);
    this.added.emit(snippet);
  }

}
