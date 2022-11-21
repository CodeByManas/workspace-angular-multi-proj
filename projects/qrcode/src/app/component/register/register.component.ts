import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../service/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDetails: any = {};
  submitted = false;
  arrayData: any = [];

  constructor(private service: DbService, private router: Router) { }

  ngOnInit(): void {
  }

  // store data in local storage 
  submitForm(f: any) {
    this.submitted = true;
    if (f.form.status == 'INVALID') {
      return;
    }
    // console.log(f.form.status)
    if (localStorage.getItem("clinicData")) {
      let allClinicData: any = localStorage.getItem("clinicData");
      console.log(allClinicData, 'Data')
      this.arrayData = JSON.parse(allClinicData); // this is an array
      console.log(this.arrayData, 'array Data')
      this.arrayData.push(this.registerDetails); // registerDetails is an empty object
    } else {
      this.arrayData.push(this.registerDetails);
    }
    
    localStorage.setItem('clinicData', JSON.stringify(this.arrayData));
    f.form.reset();
    this.submitted = false;
    alert('Details saved successfully');
    // this.router.navigate(['/result'])

  }

}
