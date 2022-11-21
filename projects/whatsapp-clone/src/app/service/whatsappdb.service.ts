import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappdbService {

  singleChatData:any;
  status:boolean=true;
  constructor() { }

  singleChatClicked(val:any){
    // console.log(val,'from service')
    this.singleChatData= val;
    this.status=false;

  }
}
