import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
    private currentPosition: number;
    private direction: number;
    constructor(currentDirection:number) {
      this.currentPosition = 0;
      this.direction = currentDirection;
      let move = this.currentPosition ;
      if (move < 0) { move = -1}
      else {move = 1}
      let turn = currentDirection;
      if (turn = 0) {turn = -1}
      else {turn = 1}
    }
  public get position() {
    return this.currentPosition;
  }
}
display(Snake)
export default Snake;
