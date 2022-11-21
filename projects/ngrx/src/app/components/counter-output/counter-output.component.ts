import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { parentState } from '../../parentState/parent.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter:number=0;
  // counter$: Observable<number> = 0;
  constructor(private store : Store<parentState>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe(data=>{
      this.counter= data
      console.log('counter observable called')
      // or 
      // this.counter$ = this.store.select(getCounter)
    })
  }

}
