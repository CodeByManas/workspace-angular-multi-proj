import { Component, OnInit } from '@angular/core';
import { NewsdbService } from '../../service/newsdb.service';

@Component({
  selector: 'app-newsresult',
  templateUrl: './newsresult.component.html',
  styleUrls: ['./newsresult.component.css']
})
export class NewsresultComponent implements OnInit {

  constructor(private service:NewsdbService) { }

  category:any[]=[];

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.category = this.service.categoryData;
  }

}
