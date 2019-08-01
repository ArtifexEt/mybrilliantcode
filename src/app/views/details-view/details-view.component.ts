import { Component, OnInit } from '@angular/core';
import {switchMap} from "rxjs/operators";
import {SnippetsService} from "../../services/snippets/snippets.service";
import {ActivatedRoute} from "@angular/router";
import {Snippet} from "../../services/snippets/snippet.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  snippet$: Observable<Snippet>;

  constructor(private route: ActivatedRoute,
    private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.snippet$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.snippetsService.getSnippet(id) // http request
      })
    )
  }

}
