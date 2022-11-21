import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodstorageService } from '../../service/foodstorage.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent implements OnInit {

  viewSingleFood:any;
  foodObj:any;
  noShow:boolean=false;

  constructor(private service:FoodstorageService, private router:Router) { }

  ngOnInit(): void {
    
  }
  ngDoCheck(){
    this.renderSingleFoodDetails();
  }

  renderSingleFoodDetails(){
    this.viewSingleFood=this.service.filteredFoodbyName;
    this.viewSingleFood.forEach((res:any)=>{
      this.foodObj=res;
      this.foodObj['ingredient1'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient1}.png`;
      this.foodObj['ingredient2'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient2}.png`;
      this.foodObj['ingredient3'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient3}.png`;
      this.foodObj['ingredient4'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient4}.png`;
      this.foodObj['ingredient5'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient5}.png`;
      this.foodObj['ingredient6'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient6}.png`;
      this.foodObj['ingredient7'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient7}.png`;
      this.foodObj['ingredient8'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient8}.png`;
      this.foodObj['ingredient9'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient9}.png`;
      this.foodObj['ingredient10'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient10}.png`;
      this.foodObj['ingredient11'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient11}.png`;
      this.foodObj['ingredient12'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient12}.png`;
      this.foodObj['ingredient13'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient13}.png`;
      this.foodObj['ingredient14'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient14}.png`;
      this.foodObj['ingredient15'] = `https://www.themealdb.com/images/ingredients/${this.viewSingleFood[0].strIngredient15}.png`;
      console.log(this.foodObj,'copyimage')
    })
  }


  onIngredientClick(value:any){
    this.service.searchByIngredient(value);
    this.router.navigate(['/byname2']);

  }

}
