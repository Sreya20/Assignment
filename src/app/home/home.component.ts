import { Component, Input, OnInit } from '@angular/core';
import { MakeupApiService } from '../makeup-api.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../types';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 @Input() makeup:any=[];
  
  inst: any;
  constructor(private data:MakeupApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.data.getAll().subscribe((data)=>{
      this.inst=data;
      
    })
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.makeup=this.data.getAll().pipe(filter(makeup=>this.makeup.name.includes(params['searchItem'].toLowerCase())))
     else
     this.inst=this.data.getAll().subscribe((data)=>{
      this.inst=data;
      
    });
    })
  }
    
   
  }


