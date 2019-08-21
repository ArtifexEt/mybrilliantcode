import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from 'src/app/services/snippets/snippet.interface';
import { SnippetsService } from 'src/app/services/snippets/snippets.service';

@Component({
  selector: 'app-admin-snippets-view',
  templateUrl: './admin-snippets-view.component.html',
  styleUrls: ['./admin-snippets-view.component.scss']
})
export class AdminSnippetsViewComponent implements OnInit {

  displayedColumns = ['author', 'title', 'email', 'language', 'actions'];
  
  snippet$: Observable<Snippet[]>;
  constructor(private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.snippet$=this.snippetsService.getSnippet$(10);

  }
  acceptSnippet(snippet:Snippet){
    console.log("dodaj snippet", snippet)
  }

  deleteSnippet(snippet:Snippet){
    console.log("usun snippet", snippet)
  }
}
