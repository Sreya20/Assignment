import { Component, Input } from '@angular/core';
import { Profile } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  @Input() profile!:Profile;
  data!:Profile;
  sendData(data:Profile)
  {
    console.log(this.profile);
  }

}


