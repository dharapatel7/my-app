import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  styleUrls: ['./animation-example.component.css']
})
export class AnimationExampleComponent implements OnInit {
  lockClass = 'lock';

  constructor() { }

  ngOnInit(): void {
  }


  changeLoack()
  {
    if (this.lockClass == 'lock') {
      this.lockClass = 'lock unlocked';
    } else {
      this.lockClass = 'lock';
    }
  }
}
