import { BadRequestError } from './../common/bad-request-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
//import 'rxjs/add/observable/throw'; //we need to import this explicitly because it is an operator function of Observerable class

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private url ='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {

   }

   getPosts(){
     return this.http.get(this.url).pipe( //in this angular version you need to
      catchError(this.handleErrors));

   }

   createPost(postobj){
     return this.http.post(this.url,JSON.stringify(postobj)).pipe( //in this angular version you need to
      catchError(this.handleErrors));
   }

   updatePost(post){
    //this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead : true}));// only send the properties that need to be updated
    return this.http.put(this.url+'/'+post.id,JSON.stringify(post)).pipe( //in this angular version you need to
      catchError(this.handleErrors));
   //sending the entire post object to update
   }

   deletePost(id){
    return this.http.delete(this.url+'/'+id).pipe( //in this angular version you need to
      catchError(this.handleErrors));//sending the object id with url pattern to delete
   }

   private handleErrors(error:Response){ // using this method it's easier to define and reuse error handling for the entire component
    if(error.status==404){
      return Observable.throw(new NotFoundError()); 
    }else if(error.status==400){
      return Observable.throw(new BadRequestError());
    }
   return Observable.throw(new AppError(error));
   }

}
