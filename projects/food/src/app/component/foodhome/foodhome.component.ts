import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodhome',
  templateUrl: './foodhome.component.html',
  styleUrls: ['./foodhome.component.css']
})
export class FoodhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // go to cart page 
  onCartClick(){
    this.router.navigate(['cart']);
  }

  onServiceClick(){
    this.router.navigate(['service']);
  }
  onLoginClick(){
    this.router.navigate(['login']);
  }

  onAPIClick(){
    this.router.navigate(['api']);
  }

}
