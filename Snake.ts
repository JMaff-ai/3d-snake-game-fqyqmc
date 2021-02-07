import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
    private currentPosition: number;
    private currentDirection: number;
    private xcoord: number;
    private ycoord: number;
    
    public constructor() {
      this.currentPosition == 0;
      this.currentDirection == 1;
      this.xcoord == 0;
      this.ycoord == 0;

    }
    public turn() {
      this.currentDirection *= -1;
    }
    public move(squares: number) {
      this.currentPosition += this.currentDirection * squares;
    }
    public newPoint() {
      this.xcoord += 0;
      this.ycoord += 0;
    }
    public turnLeft() {
      if
    }
    public get position() {
      return this.currentPosition;
    
    }
    }
export: any default Snake;
