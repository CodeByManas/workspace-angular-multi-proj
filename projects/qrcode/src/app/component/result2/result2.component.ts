import { Component, OnInit } from '@angular/core';
import { DbService } from '../../service/db.service';

@Component({
  selector: 'app-result2',
  templateUrl: './result2.component.html',
  styleUrls: ['./result2.component.css']
})
export class Result2Component implements OnInit {

  constructor(private service:DbService) { }
  printQR:any;
  convertToObject:any;
  show= false;

  ngOnInit(): void {
    
  }
  ngDoCheck(){
    this.show=true;
    this.printQR = this.service.QRData
    this.convertToObject = JSON.parse(this.printQR)
    console.log(this.convertToObject,'from result 2')
    console.log(typeof(this.printQR));
    console.log(typeof(this.convertToObject))
  
  }

  onPrintClick(){
    window.print();
    // this.router.navigate(['/result2'])
  }

}
