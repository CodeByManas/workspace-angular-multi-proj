import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsdbService } from '../../service/newsdb.service';

@Component({
  selector: 'app-newshome',
  templateUrl: './newshome.component.html',
  styleUrls: ['./newshome.component.css']
})
export class NewshomeComponent implements OnInit {

  constructor(private service:NewsdbService, private router:Router) { }

  ngOnInit(): void {
  }

  onCategoryClick(value:any){
    // alert(value);
    this.service.getCategory(value);
  }

}
