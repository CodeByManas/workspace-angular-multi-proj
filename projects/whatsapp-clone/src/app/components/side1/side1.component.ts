import { Component, OnInit } from '@angular/core';
import { WhatsappdbService } from '../../service/whatsappdb.service';

@Component({
  selector: 'app-side1',
  templateUrl: './side1.component.html',
  styleUrls: ['./side1.component.css']
})
export class Side1Component implements OnInit {

  conversation=[
    {name:'Dr.Strange', time:'08:00', latestmsg:'Where are all stones?', status:true},
    {name:'Hawk Eye', time:'08:53', latestmsg:'Good mornong', status:false},
    {name:'Tony Stark', time:'08:33', latestmsg:'Are you there', status:true},
    {name:'Peter Parker', time:'04:13', latestmsg:'Thanos is coming', status:true},
    {name:'Steve Roges', time:'10:43', latestmsg:'Lets call thor too', status:false},
    {name:'Dr.Strange', time:'08:00', latestmsg:'Where are all stones?', status:false},
    {name:'Thanos', time:'08:33', latestmsg:'I will snap soon', status:false},
    {name:'Hawk Eye', time:'08:53', latestmsg:'Good mornong', status:false},
    {name:'Tony Stark', time:'08:33', latestmsg:'Are you there', status:true},
    {name:'Peter Parker', time:'04:13', latestmsg:'Thanos is coming', status:false},
    {name:'Steve Roges', time:'10:43', latestmsg:'Lets call thor too', status:false},
    {name:'Dr.Strange', time:'08:00', latestmsg:'Where are all stones?', status:true},
    {name:'Thanos', time:'08:33', latestmsg:'I will snap soon', status:true}

  ]

  chatClicked(object:any){
    // alert(object.name)
    this.service.singleChatClicked(object)
  }

  constructor(private service:WhatsappdbService) { }

  ngOnInit(): void {
  }

}
