import { Component} from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Validator } from '@angular/forms';
@Component({
  selector: 'app-component-t',
  templateUrl: './component-t.component.html',
  styleUrl: './component-t.component.css'
})
export class ComponentTComponent  {

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', (e) => {
      if(e.value == '123'){
        return null
    }else{
      return {'need123' : true}
    }
    }),
  });

  onSubmit(){
    console.log(this.profileForm.get('firstName')?.errors)
  }
}


