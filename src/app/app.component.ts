import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent  {  

  playerMoves: number = 0;
  scoreUpdate: number = 0;
  
  getMoves(score: number): void {
    this.playerMoves += score;
  }
}
