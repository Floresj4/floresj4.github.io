import { NgModule } from "@angular/core";
import {RouterModule} from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";

const appRoutes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: BlogComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}