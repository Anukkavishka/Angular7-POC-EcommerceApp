import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    //overrided
    transform(value:string,agrs?:any){
        if(!value){
            return null;
        }
        return value.substring(0,10) + '...';
    }


}