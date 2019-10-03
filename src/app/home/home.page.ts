import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user ={
    name : 'Ahsan',
    city: 'Islamabad',
    interests : ['Cricket' , 'Bussness' , 'Development']
  };

  constructor() {}

}
