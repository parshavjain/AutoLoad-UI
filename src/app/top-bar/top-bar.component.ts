import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {
  }

}
