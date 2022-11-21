import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsdbService {

  constructor(private http: HttpClient, private router:Router) { }

  categoryData: any; //to get all categories
  searchNews: any; // to store all data filtered by header search field
  apiKey = 'd486c4a2a15a4c74b7ae9c0ca633f510'; //API key
  totalNewsCount:any;

  // To render all category 
  getCategory(category: any) {
    this.router.navigate(['/loader']);
    this.http.get(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${this.apiKey}`)
      .subscribe((res: any) => {
        console.log(res, 'from service')
        this.categoryData = res.sources;
        this.router.navigate(['/result'])
      })
  }


  // to call api by the help of the data drom search field 
  getSearchFieldData(value: any) {
    // console.log(value,'from service')
    this.router.navigate(['/loader']);
    this.http.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=d486c4a2a15a4c74b7ae9c0ca633f510`)
      .subscribe((res: any) => {
        // console.log(res.articles, 'response received');
        this.searchNews = res.articles;
        this.totalNewsCount= res.totalResults;
        console.log(this.totalNewsCount,'service')
        this.router.navigate(['/result2'])
      })
  }

  // from filter section receive all data 
  gotAll(key: any, fromdate: any, todate: any, sort: any) {
    this.router.navigate(['/loader']);
    this.http.get(`https://newsapi.org/v2/everything?q=${key}&from=${fromdate}&to=${todate}&sortBy=popularity&apiKey=${this.apiKey}`)
    .subscribe((res:any)=>{
      this.searchNews = res.articles;
      this.totalNewsCount= res.totalResults
      // console.log(res,'from service')
      // console.log(res.totalResults,'service')
      this.router.navigate(['/result2'])
    })
  }

  // get country from filter section 
  getCountry(country:any){
    this.router.navigate(['/loader']);
    this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.apiKey}`)
    .subscribe((res:any)=>{
      this.searchNews = res.articles;
      this.totalNewsCount= res.totalResults
      // console.log(res,'from service')
      // console.log(res.totalResults,'service')
      this.router.navigate(['/result2'])
    })
  }

}
