import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(persons: any, searchText: any, searchMobile: any): any {
    if(searchText == null &&  searchMobile == null) return persons;
    if(searchText && searchMobile){
      return persons.filter(function(per){
        return (per.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 && per.mobile.toString().indexOf(searchMobile) > -1);
      })
    }
    else if(searchText){
      return persons.filter(function(per){
        return per.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      })
    }else if(searchMobile){
      return persons.filter(function(per){
        return per.mobile.toString().indexOf(searchMobile) > -1;
      })
    }
    return persons.filter(function(per){
      return per.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
