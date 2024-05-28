import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
books: any[] = [
  {
    name: "Think and Grow Rich",
publisher: "First Print",
    price: 359
  },
  {
    name: "Acers of Diamond",
publisher: "Diamond",
    price: 200
  },
  {
    name: "Atomic Habits",
publisher: "Penguine",
    price: 587
  },
  {
    name: "Power of Habit",
publisher: "Penguine",
    price: 650
  },
  {
    name: "Option B",
publisher: "Garuda",
    price: 350
  }
];

  }






