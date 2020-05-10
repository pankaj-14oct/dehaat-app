import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor() { }
  shareDataSubject = new Subject<any>();

  persons = [
    { id:1, name: 'Pankaj Sisodia', mobile:888888888 , age: 30, address:' H-123, Gurgaon, 122001' },
    { id:2, name: 'Devendra Singh', mobile:989898988  , age: 32, address:' H-123, Gurgaon, 122001'},
    { id:3, name: 'Swapnil Mani', mobile:7676767676 , age: 30, address:' H-123, Delhi, 122001' },
    { id:4, name: 'Atul Shukla', mobile:6767676767 , age: 30, address:' H-123, Hydarabad, 122001' },
    { id:5, name: 'Ashish Bhardwaj', mobile:676767676 , age: 26, address:' H-123, Gurgaon, 122001' },
    { id:6, name: 'Priya', mobile:3434352323 , age: 30, address:' H-123, Delhi, 122001' },
    { id:7, name: 'Sanjeet', mobile:7878787878  , age: 29, address:' H-123, Delhi, 122001'},
    { id:8, name: 'Aditya Julka', mobile:7878787879 , age: 30, address:' H-123, Hydarabad, 122001' },
    { id:9, name: 'Arun Kumar', mobile:888888881 , age: 30, address:' H-123, Delhi, 122001' },
    { id:10, name: 'Mayank Shukla', mobile:888888888 , age: 30, address:' H-123, Hydarabad, 122001' },
    { id:11, name: 'Divya', mobile:888788888 , age: 30, address:' H-123, Delhi, 122001' },
    { id:12, name: 'Pradeep Kumar', mobile:882688888 , age: 30, address:' H-123, Gurgaon, 122001' },
    { id:13, name: 'James Sekhar', mobile:888834888 , age: 30, address:' H-123, Hydarabad, 122001' },
    { id:14, name: 'Jiya', mobile:888888888 , age: 30, address:' H-123, Delhi, 122001' },
    { id:15, name: 'Akhil Gupta', mobile:888668888 , age: 30, address:' H-123, AgraHydarabad, 122001' },
    { id:16, name: 'Ritesh Yadav', mobile:888558888 , age: 30, address:' H-123, Delhi, 122001' },
    { id:17, name: 'Suryajeet Yadav', mobile:855888888 , age: 30, address:' H-123, Delhi, 122001' },
    { id:18, name: 'Aditya Sharma', mobile:888838888 , age: 30, address:' H-123, Delhi, 122001' },
    { id:19, name: 'Pankaj Singh', mobile:888884888 , age: 30, address:' H-123, Delhi, 122001' },
    { id:20, name: 'Dependra Kumar', mobile:888888838 , age: 30, address:' H-123, Delhi, 122001' }
  ];

  getPersons(){
    return this.persons;
  }

  updatePerson(id, data){
    const personIndex = this.persons.findIndex((per)=> per.id === id);
    const updatedPerson = this.persons[personIndex];
    updatedPerson.name = data.name
    updatedPerson.mobile = data.mobile
    this.persons[personIndex]  = updatedPerson;
  }
  
  personClicked(person) {
    this.shareDataSubject.next(person);
  }
  

}
