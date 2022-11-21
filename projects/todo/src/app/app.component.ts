import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  todoItem:any;
  allTodoItems:any=[];
  show:boolean=true;

  addItem(){
    if(this.todoItem === undefined || this.todoItem ===''){
      alert('Please enter something');
    }else{
      this.allTodoItems.push(this.todoItem);
      this.todoItem='';
      this.show=false;
    }
    
  }
  
  removeItem(index:number){
    this.allTodoItems.splice(index,1);
    if(this.allTodoItems.length <=0){
      this.show=true;
    }
    alert('Item removed successfully')
  }

  ngDoCheck(){

  }
}
