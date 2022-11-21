import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodstorageService } from '../../service/foodstorage.service';

@Component({
  selector: 'app-srchnavbar',
  templateUrl: './srchnavbar.component.html',
  styleUrls: ['./srchnavbar.component.css']
})
export class SrchnavbarComponent implements OnInit {

  allCategory:any;
  fletter:any='';



  constructor(private service:FoodstorageService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.service.getAllCategories().subscribe((category:any)=>{
      this.allCategory=category.meals;
      console.log(this.allCategory);
    })
  }

  // get first letter of a food 
  getFLetter(val:any){
    if(val.length<=1){
      this.service.srchByFletter(val);
      this.fletter=null;
      this.router.navigate(['renderpage']);
      
    }else{
      alert('Please enter food first letter only')
    }
   
  }

  onOptionChange(e:any){
    this.service.filterByCategory(e.target.value)
    console.log(e.target.value)
    this.router.navigate(['renderpage']);
   
  }

  apiClick(){
    this.router.navigate(['api']);
  }


}
