import { HttpClient } from '@angular/common/http';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodstorageService } from '../../service/foodstorage.service';

@Component({
  selector: 'app-renderpage',
  templateUrl: './renderpage.component.html',
  styleUrls: ['./renderpage.component.css']
})
export class RenderpageComponent implements OnInit {

  byFirstLetter:any;
  imgArr:any;

  constructor(private service:FoodstorageService, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.byFirstLetter= this.service.filteredFoodbyFirstLetter; // render all product filtered by first letter
    // console.log(this.byFirstLetter,'from renderpage')
  }

  // fetch ingredient image 
  getIngredientImage(foodName:any){
    this.service.sendFoodName(foodName);
    this.router.navigate(['/byname'])
  }

  onHomeClick(){
    this.router.navigate(['/home'])
  }
  onBackClick(){
    this.router.navigate(['/service'])
  }
  

}
