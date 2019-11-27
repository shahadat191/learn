import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  template: `

<div>
  Country {{itemList.length}}
    <form (keydown.enter)="$event.preventDefault()" [formGroup]="inputForm">
      <mat-form-field>
        <mat-label>Sorted By</mat-label>
        <mat-select formControlName="sorting">
          <mat-option value="Ascending">
            Ascending
          </mat-option>
          <mat-option value="Descending">
            Descending
          </mat-option>
        </mat-select>
      </mat-form-field>

      <label style="display: block" *ngFor="let country of countryList; let i = index">
        <mat-checkbox
          [(checked)]="country.isSelected"
          (change)="onSelectedChange($event.checked, i)"
        >
          {{ country.name }}
        </mat-checkbox>
      </label>
    </form>
</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputForm: FormGroup;
  countryList = [
    { isSelected: false, id: "AF", name: "Afghanistan" },
    { isSelected: false, id: "AL", name: "Albania" },
    { isSelected: false, id: "DZ", name: "Algeria" },
    { isSelected: false, id: "AS", name: "American Samoa" },
    { isSelected: false, id: "AD", name: "Andorra" },
    { isSelected: false, id: "AO", name: "Angola" },
    { isSelected: false, id: "AI", name: "Anguilla" },
    { isSelected: false, id: "AQ", name: "Antarctica" },
    { isSelected: false, id: "AG", name: "Antigua And Barbuda" },
    { isSelected: false, id: "AR", name: "Argentina" },
    { isSelected: false, id: "AM", name: "Armenia" },
    { isSelected: false, id: "AW", name: "Aruba" },
    { isSelected: false, id: "AU", name: "Australia" },
    { isSelected: false, id: "AT", name: "Austria" },
    { isSelected: false, id: "AZ", name: "Azerbaijan" },
    { isSelected: false, id: "BS", name: "Bahamas" },
    { isSelected: false, id: "BH", name: "Bahrain" },
    { isSelected: false, id: "BD", name: "Bangladesh" },
    { isSelected: false, id: "BB", name: "Barbados" },
    { isSelected: false, id: "BY", name: "Belarus" },
    { isSelected: false, id: "BE", name: "Belgium" }
  ];
  itemList = ["BD", "BB", "BY"];

  constructor(private fb: FormBuilder) {
    // Create a FormControl for each available music preference, initialize them as unchecked, and put them in an array

    // Simply add the list of FormControls to the FormGroup as a FormArray
    this.inputForm = this.fb.group({
      sorting: ["Ascending"]
    });
  }

  ngOnInit() {
    this.countryList.map((value, index) => value.isSelected = this.itemList.includes(value.id));

    this.inputForm
      .get("sorting")
      .valueChanges.subscribe(() => this.changeSortOrder());
  }

  onSelectedChange(event, id) {
    console.log(event, this.countryList[id]);
    if(event){
      this.itemList.push(this.countryList[id].id);
    }
    else{
     this.itemList =  this.itemList.filter(item => item != this.countryList[id].id);
    }
    this.countryList[id].isSelected = event;
  }

  changeSortOrder() {
    console.log(this.countryList);
    this.countryList.reverse();
  }
}
