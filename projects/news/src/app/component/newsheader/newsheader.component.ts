import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsdbService } from '../../service/newsdb.service';

@Component({
  selector: 'app-newsheader',
  templateUrl: './newsheader.component.html',
  styleUrls: ['./newsheader.component.css']
})
export class NewsheaderComponent implements OnInit {

  constructor(private service:NewsdbService, private router:Router) { }

  newsCount:any;

  ngOnInit(): void {
  }
  onWordSearch(e:any){
    // alert(e.target.value);
    this.service.getSearchFieldData(e.target.value);
    e.target.value='';
  }
  ngDoCheck(){
    // this.newsCount = this.service.totalNewsCount;
    // console.log(this.newsCount,'from header')
  }

}
