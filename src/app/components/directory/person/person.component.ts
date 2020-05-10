import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {

  constructor(private personsService:PersonsService) { 
    
  }
  @Input('person') person;
  @ViewChild('name') personName;
  @ViewChild('mobile') personMobile;
  isUserSelected:boolean = false;
  subscription: Subscription;
  isEdit:boolean = false;

  ngOnInit() {
    this.subscription = this.personsService.shareDataSubject
                .subscribe(res=>{
                  this.person = res;
                  this.isUserSelected = true;
                })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  onEditClick(){
    this.isEdit = true;
  }
  onSaveClick(){
    this.isEdit = false;
    const data = { name :this.personName.nativeElement.value, mobile :this.personMobile.nativeElement.value}
    this.personsService.updatePerson(this.person.id, data);
  }

}
