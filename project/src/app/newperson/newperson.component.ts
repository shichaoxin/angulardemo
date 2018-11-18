import { Component, OnInit, Input } from '@angular/core';
import { DataService,Info } from '../shared/data.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {
 
@Input()


  isVisible = false;
  i=13;
  validateForm: FormGroup;
  public name;public age;public address;public phone;
  info:any;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private data:DataService,
              private fb: FormBuilder,
              private message: NzMessageService ) { }
      
 showModal(): void {
  this.isVisible = true;
}
@Input()


handleOk(): void {
  if(!this.age || !this.age || !this.address||!this.phone){
    this.isVisible = true;
  }
else{
    this.isVisible = false;
    let info = new Info(this.i++,this.name,this.age,this.phone,this.address);
    this.info.push(info);
    console.log(this.i); 
    console.log(this.info);
    this.message.info('新增'+this.name +'成功',{nzDuration:1000});
    
  }

}
          
 handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
}              
               

  ngOnInit() {

    this.info = this.data.getInfo();
    this.validateForm = this.fb.group({
      email            : [ null, [ Validators.required ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      phoneNumberPrefix: [ '+86' ],
      phoneNumber      : [ null, [ Validators.required ] ],
      website          : [ null, [ Validators.required ] ],
      captcha          : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });
    
    }

}
