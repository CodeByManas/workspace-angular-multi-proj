import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FoodstorageService } from '../../service/foodstorage.service';

@Component({
  selector: 'app-renderpage2',
  templateUrl: './renderpage2.component.html',
  styleUrls: ['./renderpage2.component.css']
})
export class Renderpage2Component implements OnInit {

  allCategory:any;
  allCatWithDetails:any;

  constructor(private service:FoodstorageService, private router : Router) { }

  showFiller = false;

  ngOnInit(): void {
    this.allCategoryWithDetails(); // for every single category details 
  }

  allCategoryWithDetails(){
    this.service.allCategoryWithDetails().subscribe((res:any)=>{
      this.allCatWithDetails = res.categories;
      // console.log(this.allCatWithDetails);
    })
  }

  onViewClick(category:any){
    console.log(category)
    this.service.filterByCategory(category);
    this.router.navigate(['renderpage'])
  }

}
