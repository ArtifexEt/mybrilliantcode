import { Component, OnInit } from '@angular/core';
import {SnippetsService} from "../../services/snippets/snippets.service";
import { Snippet } from 'src/app/services/snippets/snippet.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  snippet$: Observable<Snippet[]>;
  constructor(private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.snippet$=this.snippetsService.getSnippet$(10);

  }
}
