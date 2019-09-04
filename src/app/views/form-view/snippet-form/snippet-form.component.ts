import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetsService } from 'src/app/services/snippets/snippets.service';
import { Snippet } from 'src/app/services/snippets/snippet.interface';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.scss']
})
export class SnippetFormComponent implements OnInit, OnDestroy {


  @Output()
  added: EventEmitter<Snippet> = new EventEmitter();

  languages: Language[] = [
    { value: 'javascript', viewValue: 'JavaScript' },
    { value: 'java', viewValue: 'Java' },
    { value: 'python', viewValue: 'Python' },
    { value: 'html', viewValue: 'HTML' },
    { value: 'css', viewValue: 'CSS' },
    { value: 'aspnet', viewValue: 'ASP.NET (C#)' },
    { value: 'php', viewValue: 'PHP' },
    { value: 'cpp', viewValue: 'C++' },
    { value: 'c', viewValue: 'C' },
    { value: 'sql', viewValue: 'SQL' }
  ];

  form: FormGroup;
  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder,
    private snippetsService: SnippetsService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      language: ['', Validators.required],
      code: ['', Validators.required],
      explanation: ['', Validators.required]
    })

    this.subscriptions.add(
      this.authenticationService.getCurrentUser$()
        .subscribe(user => {
          const userLogged = !!user;
          if(userLogged){
            this.form.patchValue({
              author: user.name,
              email: user.email,
            });
            this.form.controls.author.disable();
            this.form.controls.email.disable();
          } else{
            this.form.controls.author.enable();
            this.form.controls.email.enable();
          }
        })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  add() {
    const snippet = this.form.getRawValue();
    this.snippetsService.addSnippet(snippet);
    this.added.emit(snippet);
  }

}



