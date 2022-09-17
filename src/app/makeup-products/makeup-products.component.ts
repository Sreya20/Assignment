import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';
import { MakeupApiService } from '../makeup-api.service';
import { Profile } from '../types';


@Component({
  selector: 'app-makeup-products',
  templateUrl: './makeup-products.component.html',
  styleUrls: ['./makeup-products.component.css']
})
export class MakeupProductsComponent implements OnInit {
  profiles:Profile[]=[] ;
  
  @Output() sendData: EventEmitter<Profile[]> = new EventEmitter()
  
  constructor(private data:MakeupApiService){}

  ngOnInit(): void {
    this.data.getAll().subscribe((profiles:Profile[])=>{
      this.profiles=profiles;
    });
    this.sendData.emit(this.profiles);
    }
  //  fetch('https://makeup-api.herokuapp.com/api/v1/products.json').then(response=>response.json()).then(data=>this.profiles=data);
   
  }

  


function output() {
  throw new Error('Function not implemented.');
}

