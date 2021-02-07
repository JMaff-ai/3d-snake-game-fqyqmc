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
      if()
    }
    public newPoint() {
      this.xcoord += 0;
      this.ycoord += 0;
    }
    public turnLeft() {
      if(this.xcoord == 90) display(this.currentDirection);
      else if(this.xcoord == 180) display(this.currentDirection);
      else if(this.xcoord == 270) display(this.currentDirection);
      else display(this.currentDirection);
    }
    public turnRight() {
      if(this.ycoord == -90) display(this.currentDirection);
      else if(this.ycoord == -180) display(this.currentDirection);
      else if(this.ycoord == -270) display(this.currentDirection);
      else display(this.currentDirection);
    }
    public get position() {
      return this.currentPosition;
    
    }
    }
export: any default Snake;
