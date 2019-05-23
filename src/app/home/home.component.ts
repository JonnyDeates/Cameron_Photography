import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private router: JRouter) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}

