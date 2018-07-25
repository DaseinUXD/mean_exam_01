import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
// import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Commerce Manager';

    constructor(private _httpService: HttpService) { }

    ngOnInit(){ }

}
