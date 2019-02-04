import { AppErrorHandler } from './common/app-error-handler';
import { CourseService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { HttpClientModule } from '@angular/common/http'
import { PostServiceService } from './services/post-service.service';
@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostComponentComponent
    //CoursesComponent
    //CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //here we declare the dependencies that will be used in dependency injecions
    CourseService,
    PostServiceService,
    {provide:ErrorHandler,useClass:AppErrorHandler}//this replaces all the instances that used ErrorHandler class 
    //with AppErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
