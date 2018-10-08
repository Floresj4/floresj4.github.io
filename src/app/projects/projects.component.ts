import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };

    this.http.get<any>('./assets/projects/projects.data', options)
      .subscribe((response: any) => {
        this.projects = response;
      });
  }

}
