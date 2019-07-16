import { Component, OnInit } from '@angular/core';
import {SnippetsService} from "../../services/snippets/snippets.service";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.snippetsService.getSnippets().subscribe(value => console.log(value));
  }

}
