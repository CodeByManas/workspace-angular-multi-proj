import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodstorageService } from '../../service/foodstorage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  foodName:any;
  area:any;
  areaList:any; //for area list
  ingredient:any; // for ingredient search

  constructor(private service:FoodstorageService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllAreaList().subscribe((res:any)=>{
      // console.log(res.meals,'area list');
      this.areaList = res.meals;
    })
  }


  onNameClick(){
    if(this.foodName === undefined ||  this.foodName === '' || (this.foodName.charCodeAt(0)) >=48 && (this.foodName.charCodeAt(0)) <=57){
      alert('Enter a valid food name')
    }else{
      this.service.filterFoodByName(this.foodName)
      this.foodName='';
      this.router.navigate(['byname2'])
    }
  }


  // on random meal click 
  onRandomMealClick(){
    this.service.getRandomMeal();
    this.router.navigate(['byname']);
  }

  // on area click 
  onAreaClick(value:any){
    if(this.area === undefined ||  this.area === '' || (value.charCodeAt(0)) >=48 && (value.charCodeAt(0)) <=57){
      alert('Enter a valid Area')
    }else{
      this.service.getFoodByArea(value);
      this.router.navigate(['byname2']);
      this.area='';
    }
  }

  onAreaOptionChange(e:any){
    this.service.getFoodByArea(e.target.value);
    this.router.navigate(['byname2']);
  }

  onIngredientClick(value:any){
    if(this.ingredient === undefined ||  this.ingredient === '' || (value.charCodeAt(0)) >=48 && (value.charCodeAt(0)) <=57){
      alert('Enter a valid Ingredient name')
    }else{
        this.service.searchByIngredient(value);
        this.router.navigate(['/byname2']);
        this.ingredient='';
    }

  }


}
