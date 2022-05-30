import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navLinks = [
    {
      label: 'Данные',
      link: 'data',
    },
    {
      label: 'Проекты',
      link: 'projects',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
