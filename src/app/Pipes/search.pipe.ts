import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:false
 
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filter:any):any{
    console.log(filter)
    const filteredValue=[]
    if(filter==""){
      return value;
   }
    for(let ele of value){
    console.log(ele.name)
    console.log(filter)
    if(ele.name.toLowerCase().includes(filter.toLowerCase()))
    filteredValue.push(ele)
      }
    

  return filteredValue
  }

}
