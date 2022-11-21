import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodstorageService {

  filteredFoodbyFirstLetter:any;
  filteredFoodbyName:any;
  filteredFoodbyName2:any;
  

  constructor( private http : HttpClient) { }

  // List all meals by first letter
  mealByFirstLetter(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  }


  // for all categories for menu button 
  getAllCategories(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }


  // List all meal categories with details 
  allCategoryWithDetails(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }

  // call API to search product by first letter 
  srchByFletter(fletter: any) {
    this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fletter}`)
    .subscribe((res:any)=>{
      this.filteredFoodbyFirstLetter= res.meals;
      console.log(this.filteredFoodbyFirstLetter,'from service');
      
    })
  }

  filterByCategory(category:any){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .subscribe((res:any)=>{
      // console.log(res.meals);
      this.filteredFoodbyFirstLetter =res.meals;
    })
  }

  // filterByName 
  sendFoodName(foodName:any){
    this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .subscribe((res:any)=>{
      this.filteredFoodbyName = res.meals;
      // console.log(this.filteredFoodbyName,'searched by name');
    })
  }

  filterFoodByName(name:any){ //this is from filter section 
    // console.log(name,'filter side')
    this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .subscribe((res:any)=>{
      this.filteredFoodbyName2=res.meals;
      // console.log(this.filteredFoodbyName2);
    })
  }

  // store a random meal data
  getRandomMeal(){
    this.http.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .subscribe((res:any)=>{
      // console.log(res.meals,'random')
      this.filteredFoodbyName = res.meals;
    })
  }

  getFoodByArea(area:any){
    this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .subscribe((res:any)=>{
      console.log(res)
      this.filteredFoodbyName2=res.meals;
    })
  }

  // list of all Area 
  getAllAreaList(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  }


  // search by ingredients 
  searchByIngredient(ingredient:any){
    this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .subscribe((res:any)=>{
      // console.log(res,'for ingredients')
      this.filteredFoodbyName2 = res.meals;
      // console.log(this.filteredFoodbyName2,'for ingredients')

    })
    
  }

  
}