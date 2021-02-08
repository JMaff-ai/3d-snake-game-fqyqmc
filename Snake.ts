import { useCallback } from "react";
import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
    private currentPosition: number;
    private currentDirection: number;
newPoint: any;
    
    public constructor() {
      this.currentPosition == 0;
      this.currentDirection == 1;

    }
    public turn() {
      this.currentDirection *= -1;
    }
    public move(squares: number) {
      this.currentPosition += this.currentDirection * squares;
      this.position = this.newPoint;
      if(this.newPoint = this.position.x+1,this.position.y-1) display(this.position);
      else (this.newPoint = this.position.x-1,this.position.y+1) display(this.position);
    }
    
    
    public get position() {
      return this.currentPosition;
    
    }
    }
    class Point {
[x: string]: any;
      private xcoord: number;
      private ycoord: number;

      public constructor() {
        this.xcoord == 0;
        this.ycoord == 0;

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
    }
    class WorldModel {
sna: Snake;
      set snake(s:Snake) {
        this.sna = s;
      }
      public update(_steps: Snake) {
        return Snake;
      }
    }
export: any default Snake;
