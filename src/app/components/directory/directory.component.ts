import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { FilterPipe } from '../../filters/filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor( private _person:PersonsService) { }

  persons = []
  selectedPerson:object;
  direction: number;
  ngOnInit() {
    this.persons = this._person.getPersons();
    this.selectedPerson  = this.persons[0];
  }

  sort(property){
   // this.persons.sort()
  //  this.isDesc = !this.isDesc; //change the direction    
  //   this.direction = this.isDesc ? 1 : -1;
  }


  onSelectPerson(p){
    this._person.personClicked(p)
  }
}
