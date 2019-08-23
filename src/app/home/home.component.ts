import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  currentPickedChoices = [];
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

  showExtras(index, status): void {
    const positionInArray = this.currentPickedChoices.indexOf(index);

    if (!status && positionInArray >= 0) {
      this.currentPickedChoices.splice(positionInArray, 1);
      return;
    }
    this.currentPickedChoices.push(index);
  }

  checkIfExtrasShown(index): boolean {
    return this.currentPickedChoices.indexOf(index) >= 0;
  }

  ngOnInit() {
  }

}
