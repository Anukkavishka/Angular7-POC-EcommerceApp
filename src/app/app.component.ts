import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//this the template url which will be filled to the <app-root></app-root> tags
  styleUrls: ['./app.component.css']//using this para we can define css rules to the above specified component
})
export class AppComponent {
  title = 'Angular-App';
  onSave(){
  this.title='Angular7-App';
  }

  onChangeFavourite(){
    console.log(" Favourite changed ");
    this.title='Angular-App';
  }
  courses_available=[1,2,3,4];
  post={
    title : "Title",
    isFavourite :true
  }

  courseobj ={
    title: "The Angular",
    rating: 4.987,
    price: 190.45,
    releaseDate: new Date()

  }

//rendering viewmode, example for ngSwitchCase
viewmode ='map';

//sample collection for directive ngFor

courselist=[
  {id:1,name:'course1'},
  {id:2,name:'course2'},
  {id:3,name:'course3'},
  {id:4,name:'course4'}
];

}
