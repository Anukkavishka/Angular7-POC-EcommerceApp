import { CourseService } from './courses.service';

import{Component } from '@angular/core'
@Component({
    selector:'courses',
    template: `<h2>{{title}}</h2> using interpolation <br/>
                <h2 [textContent]="title"></h2> using property binding <br/>
                <ul>
                <li *ngFor="let course of courses">
                {{course}}
                </li>
                </ul>
                <img src="{{imageUrl}}" /> using interpolation <br/>
                <img [src]="imageUrl" /> using property binding <br/>
    `
})
export class CoursesComponent{
    title = "List of Courses";
    courses;
    imageUrl="https://lorempixel.com/400/200";
    constructor(service:CourseService){
        this.courses=service.getCourses();
    }


}