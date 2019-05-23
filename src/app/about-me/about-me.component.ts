import {Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private router: JRouter) {
  }

  ngOnInit() {
  }

}
