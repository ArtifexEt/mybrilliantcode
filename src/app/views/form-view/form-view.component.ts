import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})

export class FormViewComponent {

  snippetAdded = false;

  test(snippet){
    console.log("OK", snippet);
    this.snippetAdded = true;
  }
}

