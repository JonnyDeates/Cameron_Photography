import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  links: any;

  constructor(private router: JRouter) {
    // The Link Navigation created below
    this.links = [{route: '', name: 'Home', i: 'home'}, {route: 'about', name: 'About Me', i: 'account_circle'},
      {route: 'blog', name: 'Blog', i: 'create'}, {route: 'resume', name: 'Resume', i: 'ondemand_video'}];
    this.links.map(link => Object.assign(link, {active: false}));
  }


  // Calls the router function, navigates to the route, and then on the callback sets the Active Link.
  navigation = (route) => {
    this.router.navigate(route, () => this.setActive(this.links));
  }

  setActive = (links) => {
    // Sets the Target to the pathname without the backslash
    const target = links.find((link) => link.route === window.location.pathname.substring(1));

    // Sets each links active value to false
    links.map(link => Object.assign(link, {active: false}));
    // Sets the link that has the
    Object.assign((!!target) ? target : '', {active: true});
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Sets the Initial Color of the Website
    document.body.style.backgroundColor = '#eaf6ff';
  }
}
