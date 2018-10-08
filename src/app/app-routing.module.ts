import { NgModule } from "@angular/core";
import {RouterModule} from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { BlogComponent } from "./blog/blog.component";

const appRoutes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: BlogComponent },
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