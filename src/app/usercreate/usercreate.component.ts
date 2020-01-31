import { Component, OnInit, ElementRef } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  firstName='check'
  reactFormGroup:FormGroup;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.login('test','paswword').subscribe(data=>{
      console.log('Log in successfull')
    },error=>{console.log('error occured')})
    this.reactFormGroup=new FormGroup({
      userName:new FormControl('username',this.validateUserName.bind(this)),
      email:new FormControl('a@a.com',[Validators.required]),
      gender:new FormControl('male',[Validators.required]),
      address:new FormGroup({
        street:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        country:new FormControl()
      }),
      hobbies:new FormArray([])
    });
  }
  onSubmit(fromOnject:NgForm){
    console.log(fromOnject);
    console.log('submitted')
  }

  onReactSubmit(){
    console.log(this.reactFormGroup);
  }
  addHobbie(h:ElementRef){
    (<FormArray>this.reactFormGroup.get('hobbies')).push(new FormControl(h.nativeElement.value))
  }

  validateUserName(control:FormControl):{[key:string]: boolean}{
    return control.value==this.firstName?null:{'invalid user name':true}
  }
}
