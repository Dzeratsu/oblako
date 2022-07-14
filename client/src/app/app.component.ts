import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProject} from "./interface/IProject";
import {GET_ALL_PROJECT} from "./gql/getAllProject";
import {Apollo} from "apollo-angular";
import {pipe, map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly apollo: Apollo
  ) {
  }

  title = 'Тестовое задание Облако';
  project?: Observable<IProject[]>

  ngOnInit(): void {
    this.project = this.apollo.watchQuery<IProject>({
      query: GET_ALL_PROJECT
    })
      .valueChanges
      .pipe(
      )
  }
}
