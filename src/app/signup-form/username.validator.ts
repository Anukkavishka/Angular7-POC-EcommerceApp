import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve, reject } from 'q';

export class UsernameValidators{

    static cannotContainSpace(control:AbstractControl):ValidationErrors| null{
        if((control.value as string).indexOf(' ')>=0){
            return {cannotContainSpace :true};
        }    
        return null;
    
    }

    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors| null>{
        //calling the server is called a asynchronous operation which means the output response from
        //the server may be delayed. to simulate this we use a setTimeOut function with 2000ms
        //this promise object is one of the objects thats been returned by AsyncValidation in angular.
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                if(control.value=== 'hiru'){
                    resolve({ shouldBeUnique :true });
                }else{
                    resolve(null);
                }
                
            },2000);

        } );
        

    }
}