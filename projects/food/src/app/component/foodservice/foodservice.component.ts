import { Component, OnInit } from '@angular/core';
import { FoodstorageService } from '../../service/foodstorage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foodservice',
  templateUrl: './foodservice.component.html',
  styleUrls: ['./foodservice.component.css']
})
export class FoodserviceComponent implements OnInit {


  constructor(private service:FoodstorageService) { }

  ngOnInit(): void {

    // this.service.mealByFirstLetter().subscribe((res:any)=>console.log(res,'helllo'))
  }

  

  

}
