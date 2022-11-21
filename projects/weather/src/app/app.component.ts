import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  input:string='';
  getAPIData!:any;
  date:any;
  status=true;
  errorStatus=false;


  constructor( private http:HttpClient){} //

  onInputChange(){
    this.status=false;
    let Key='6cded42584a890e7f36250762d5a6580'
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.input}&units=metric&appid=${Key}`)
    .subscribe((res:any)=>{
      this.errorStatus=false;
      // console.log(res)
      this.getAPIData=res;
      console.log(this.getAPIData,'API CALL')
    }, (error:any)=>{
      if(error){
        this.errorStatus=true;
      }else{
        this.errorStatus=false;
      }
      console.log(error)
    })
    this.input='';
  }

  ngOnInit(): void {
    this.date = new Date()
  }

}
