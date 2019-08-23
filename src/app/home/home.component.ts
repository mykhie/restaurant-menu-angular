import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  protected menuList = [
    {
      name: 'salad',
      choices: [
        {name: 'santa'},
        {name: 'greek'},
        {name: 'asian'},
      ],
      related: [
        {
          name: 'Dressing',
          choices: [
            {name: 'italian'},
            {name: 'blue cheese'},
            {name: 'Ranch'},
          ]
        },
      ]
    },
    {
      name: 'entree',
      choices: [
        {name: 'santa'},
        {name: 'greek'},
        {name: 'asian'},
      ],
      related: []
    }
  ];

  ngOnInit() {
  }

}
