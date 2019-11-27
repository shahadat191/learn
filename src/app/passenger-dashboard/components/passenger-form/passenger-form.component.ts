
import {Component, Input} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls:[],
  template:`
    form!
    {{detail | json}}
    
    <form #form = "ngForm">

        <div>
            Id:
            <input type="text" name = "id" [ngModel] = "detail.id">
        </div>
        <div>
            Full name: 
            <input type="text" name = "fullname" [ngModel] = "detail.fullname">
        </div>
        
        <div>
            <label>
                <input type = "radio" name = "checkedIn"  [value] = "true" [ngModel] = "detail?.checkedIn">
                Yes
            </label>
            <label>
                <input type = "radio" name = "checkedIn" [value] = "false" [ngModel] = "detail?.checkedIn">
                 No
            </label>
        </div>
        
        <div *ngIf = detail.checkedIn>
            Checked in Date:
            <input type = "number"  name = "checkedInDate" [ngModel]="detail?.checkInDate">
        </div>
        {{form.value | json}}
    </form>
  `
})
export class PassengerFormComponent{
  @Input()
  detail: Passenger;

  toggleCheckedIn(checkedIn: boolean){
    if(checkedIn)
     this.detail.checkInDate = Date.now();
  }
}
