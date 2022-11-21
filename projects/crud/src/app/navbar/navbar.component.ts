import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ListemployeeComponent } from '../listemployee/listemployee.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }


  openDialog(){
    this.dialog.open(AddComponent)
  }

  dialogOfEmployee(){
    this.dialog.open(ListemployeeComponent);
  }

  ngOnInit(): void {
  }

}
