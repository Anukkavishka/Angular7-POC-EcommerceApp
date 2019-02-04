import { PostServiceService } from './../services/post-service.service';
import { Component} from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent{
  posts : any[];
  private url ='https://jsonplaceholder.typicode.com/posts';
  constructor(private service:PostServiceService){
  //we are going to use the 'jasonplaceholder.typicode.com' sites sample endpoints for this
  
  }
  ngOnInit(){
    //below we have deligated our responsibilities to a service layer
    this.service.getPosts()//this get returns a Observable<Response> type object of posts fetced from the 
    .subscribe(Response =>{
      //here we can use the response from the request
      this.posts=(Response as any);
     },error=>{
       console.log("Unexpected error has caused :"+error); //this is how you handle unexpected errors.
     });
  }

  /*how to create data or POST request using angular 
  createPost(input:HTMLInputElement){
    let postobj={title : input.value};
    input.value='';
    this.service.createPost(postobj)//delegated to a service layer
    .subscribe(
      Response =>{
      postobj['id']=(Response as any).id;
      this.posts.splice(0,0,postobj);
      },
      (error:Response)=>{// this is how we handle expected errors just by checking status code
       if(error.status===404){
         alert('The resource your looking for is not found');
         //this.form.setErrors(error);
       }else if(error.status === 400){
         alert('Bad Request');
       }else{
          console.log("Unexpected error has caused :"+error);
       } 
      }

    );
  }
following is the way we handle and throw application specific errors*/

createPost(input:HTMLInputElement){
    let postobj={title : input.value};
    input.value='';
    this.service.createPost(postobj)//delegated to a service layer
    .subscribe(
      Response =>{
      postobj['id']=(Response as any).id;
      this.posts.splice(0,0,postobj);
      },
      (error:AppError)=>{// this is how we handle expected errors using defined application error classes 
       if(error instanceof NotFoundError){//checking if the error is a instanceOf a defined error
         alert('The resource your looking for is not found');
         //this.form.setErrors(error);
       }else throw error; //this replaced the alert('Unexected Error Occured');
      //we are rethrowing the error inorder to make the error get catched by the global error handler that we defined.
      }

    );
  }

updatePost(post){
  this.service.updatePost(post)
    .subscribe(Response=>{
      console.log(Response);
    });
}

deletePost(post){
  this.service.deletePost(post.id)
    .subscribe(Response=>{
      let index =this.posts.indexOf(post);
      this.posts.splice(index,1);//use splice() to delete a choosen object from a list.
    });

}




 
}
