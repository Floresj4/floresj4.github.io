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

  get(name: string) {
    return this.projects[name];
  }

  ngOnInit() {
    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };

    this.http.get<any>('./assets/data/projects.data', options)
      .subscribe((response: any) => {
        this.projects = response;
      });
  }

  angularProjects() {
    return this.get('angular');
  }

  javascriptProjects() {
    return this.get('javascript');
  }

  pythonProjects() {
    return this.get('python');
  }

  javaProjects() {
    return this.get('java');
  }
}
