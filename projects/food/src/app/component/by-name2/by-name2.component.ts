import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodstorageService } from '../../service/foodstorage.service';

@Component({
  selector: 'app-by-name2',
  templateUrl: './by-name2.component.html',
  styleUrls: ['./by-name2.component.css']
})
export class ByName2Component implements OnInit {

  renderByName:any;

  constructor(private service:FoodstorageService, private router:Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.renderByName = this.service.filteredFoodbyName2;
  }

  getIngredientImage(value:any){
    this.service.sendFoodName(value);
    this.router.navigate(['/byname']);
  }

}
