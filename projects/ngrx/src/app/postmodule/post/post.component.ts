import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { parentState } from '../../parentState/parent.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private store : Store<parentState>) { }

  ngOnInit(): void {
  }

}


// Today I startedlearning Node.JS. Its introduction, Why should we use Node, its advantages, about chrome V8 engine, difference between javascript and Node, client and server side, global module, non-global modules, single threaded/ multi-threaded, how to create package.json file, in case node-module file delete then how to retrive it, What is nodemon and its advantages,how to create server, create API's
