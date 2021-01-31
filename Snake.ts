import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
    private currentPosition: number;
    private direction: string;
    constructor(currentDirection:string) {
      this.currentPosition = 0;
      this.direction = currentDirection;
      let move(Snake = currentPosition);
      if (move < 0) { Snake = -1}
      else {Snake = 1}
      let turn(Snake = currentDirection);
      if (turn < 0) {Snake = -1}
      else {Snake = 1}
    }
  public get position() {
    return this.currentPosition;
  }
}
display(Snake)
export default Snake;
