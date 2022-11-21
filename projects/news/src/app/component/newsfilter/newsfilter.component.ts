import { Component, OnInit } from '@angular/core';
import { NewsdbService } from '../../service/newsdb.service';

@Component({
  selector: 'app-newsfilter',
  templateUrl: './newsfilter.component.html',
  styleUrls: ['./newsfilter.component.css']
})
export class NewsfilterComponent implements OnInit {

  constructor(private service:NewsdbService) { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  keyword:any;
  dateFrom:any;
  dateTo:any;
  sort:any;

  onSearchClick1(){
    // console.log(this.keyword)
    // console.log(this.dateFrom)
    // console.log(this.dateTo)
    // console.log(this.sort)
    if(this.keyword === undefined || this.dateFrom ===undefined || this.dateTo === undefined || this.sort ===undefined){
      alert('Please enter all field')
    }else{
      this.service.gotAll(this.keyword, this.dateFrom, this.dateTo, this.sort)
    }
  }
  optionChange(e:any){
    this.sort= e.target.value
  }

  // for country option change  
  onCountryChange(e:any){
    // alert(e.target.value)
    this.service.getCountry(e.target.value);
  }

}
