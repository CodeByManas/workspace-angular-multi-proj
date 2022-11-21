import { Component, OnInit } from '@angular/core';
import { NewsdbService } from '../../service/newsdb.service';

@Component({
  selector: 'app-newsresult2',
  templateUrl: './newsresult2.component.html',
  styleUrls: ['./newsresult2.component.css']
})
export class Newsresult2Component implements OnInit {

  searchNews2:any;
  newsCount:any;

  constructor( private service:NewsdbService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.searchNews2 = this.service.searchNews;
    this.newsCount = this.service.totalNewsCount;
    // console.log(this.newsCount,'from r2')
  }

}
