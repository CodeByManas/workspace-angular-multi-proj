import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitle, customIncrement } from '../state/counter.action';
import { counterState } from '../state/counter.state';
import {  getTitle} from '../state/counter.selectors';
import { parentState } from '../../parentState/parent.state';

@Component({
  selector: 'app-customdata',
  templateUrl: './customdata.component.html',
  styleUrls: ['./customdata.component.scss']
})
export class CustomdataComponent implements OnInit {

  value:any;
  title:string='';
  constructor(private store : Store<parentState>) { }

  ngOnInit(): void {
    this.store.select(getTitle)
    .subscribe(data=>{
      this.title= data
      console.log('title observable called')
    })
  }

  addValue(){
    // alert(this.value)
    this.store.dispatch(customIncrement({value : +this.value}));
    this.value='';
  }

  textChange(){
    this.store.dispatch(changeTitle())
  }

}
