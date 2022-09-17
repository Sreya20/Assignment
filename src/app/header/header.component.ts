import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(public common:CommonService) { }

}
