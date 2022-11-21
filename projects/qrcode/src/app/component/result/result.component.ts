import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../service/db.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  storedData:any;

  singleObj!:any;
  qrcodeBox:boolean=false;

  constructor(private servive:DbService, private router:Router) {}

  ngOnInit(): void {
    // this.storedData = this.servive.arrayData;
    let data: any = localStorage.getItem('clinicData');
    this.storedData = JSON.parse(data);
    console.log(this.storedData,'this is from result');
    
  }

  ngDoCheck(){ 
    
  }


  // on clinic name click 
  onClinicClick(index:any){
    this.qrcodeBox= true;
    this.singleObj = JSON.stringify(this.storedData[index]);
    console.log(this.singleObj)
  }

  onGoToPrintClick(value:any){
    // console.log(value,'hey result')
    this.servive.QRData = value;
    // this.qrcodeBox= true;
    // this.singleObj = JSON.stringify(this.storedData[index]);
    // console.log(this.singleObj)
    this.router.navigate(['/result2'])
  }


}
