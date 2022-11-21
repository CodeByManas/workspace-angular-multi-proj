import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { employeeData } from '../employee.model';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  //fValue !: FormGroup;
  employeeModelObject: employeeData = new employeeData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, private service: MyserviceService) { 
    console.log(data.editDetails);
    if(data && data.editDetails) {
      this.fValue.patchValue(data.editDetails);
    }
  }
  
  fValue = this.fb.group({
    fname: [''],
    email: [''],
    contact: [''],
    department: [''],
    experience: [''],
    address: ['']
  });
  ngOnInit(): void {
    
  }


  addEmp() {
    this.employeeModelObject.fname = this.fValue.value.fname;
    this.employeeModelObject.email = this.fValue.value.email;
    this.employeeModelObject.contact = this.fValue.value.contact;
    this.employeeModelObject.department = this.fValue.value.department;
    this.employeeModelObject.experience = this.fValue.value.experience;
    this.employeeModelObject.address = this.fValue.value.address;

    this.service.postEmployee(this.employeeModelObject).subscribe((res: any) => {
      alert('Employee added successfully 😊');
      this.service.allFormData.push(res)
      console.log(this.service.allFormData,'hello world');
      this.fValue.reset();
    }, err => {
      alert('something wrong');
    })
  }


}
