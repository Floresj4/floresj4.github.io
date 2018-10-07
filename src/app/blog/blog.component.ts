import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };

    this.http.get<any>('./assets/_posts/blogs.data', options)
      .subscribe((response: any) => {
        this.blogs = response;
      });
  }

  formatDate(dt: string) {
    return moment(dt).format('MMMM Do YYYY');
  }
}
