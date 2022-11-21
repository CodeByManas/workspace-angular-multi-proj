import { Component, OnInit } from '@angular/core';
import { WhatsappdbService } from '../../service/whatsappdb.service';


@Component({
  selector: 'app-side2',
  templateUrl: './side2.component.html',
  styleUrls: ['./side2.component.css']
})
export class Side2Component implements OnInit {

  showHide:boolean=true;

  constructor(private service:WhatsappdbService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.showHide=this.service.status;
  }

}
