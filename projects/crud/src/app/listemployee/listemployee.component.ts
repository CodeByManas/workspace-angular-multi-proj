import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {

  allEmployeeData: any;
  singleEmpData: any = {};
  hideShow: boolean = false;

  constructor(private service: MyserviceService, private dialog: MatDialog) { }


  // render all employee list in a table format 
  getEmployeeList() {
    this.service.getEmployee().subscribe((res: any) => {
      this.allEmployeeData = res;
      // console.log(this.allEmployeeData)
      if (this.allEmployeeData.length == 0) {
        this.hideShow = true;
      }
    })
  }



  // Delet the data from the table 
  deletEmp(data: any) {
    this.service.deleteEmployee(data.id).subscribe((res: any) => {
      alert('Data deleted successfully ✅');
      this.getEmployeeList();
    })
  }



  // edit the employee data 
  editEmployeeData(value: any) {
    console.log(value)
    this.dialog.open(AddComponent,{data: {editDetails: value}});
  }



  ngOnInit(): void {
    this.getEmployeeList();
  }


}
