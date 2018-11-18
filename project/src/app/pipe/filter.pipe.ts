import { Pipe, PipeTransform } from '@angular/core';
import { flatten } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], search: string,keyword:string): any {
      if(!search || !keyword){
        return list;
      }
     return list.filter( item=>{
        let  Values = item[search];
       return Values.indexOf(keyword)>=0;
     });
  };
};
