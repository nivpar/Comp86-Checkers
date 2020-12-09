// Laporsha Dees and Nived Parikh
// Nonwimp Assignment
// Checkers.html
// 8 December 2020



class Game_piece {
    // color = 1 means white piece, and color = -1 means red piece.
    constructor(number,color,x,y) {
      this.x = x;
      this.y = y;
      this.r = 30;
      this.color = color;
      this.number = number;
      this.queen = false;
      if (this.color == 1) {
        this.w_or_r = 'white';
      }else {
        this.w_or_r = 'red';
      }
    }

    draw_circle(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.w_or_r;
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
      ctx.linewidth = 3;
      ctx.fill();
      ctx.stroke();
      ctx.font = "20px Georgia";
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillText(this.number, this.x, this.y);
      ctx.fill();
    }

    is_Queen() {
      return this.queen;
    }

    //direction = true moves left, and direction = false moves right.
    move(direction) {
      if (direction) {
        if (this.color == 1) {
          this.x = this.x-60;
          this.y = this.y-60;
        }else {
          this.x = this.x-60;
          this.y = this.y+60;
        }
      }else {
        if (this.color == 1) {
          this.x = this.x+60;
          this.y = this.y-60;
        }else {
          this.x = this.x+60;
          this.y = this.y+60;
        }
      }
    }

    moveBack(direction) {
      if (direction) {
        if (this.color == 1) {
          this.x = this.x-60;
          this.y = this.y+60;
        }else {
          this.x = this.x-60;
          this.y = this.y-60;
        }
      }else {
        if (this.color == 1) {
          this.x = this.x+60;
          this.y = this.y+60;
        }else {
          this.x = this.x+60;
          this.y = this.y-60;
        }
      }
    }

    getColor() {
      return this.color;
    }

    getNumber() {
      return this.number;
    }

    getX() {
      return this.x;
    }

    getY() {
      return this.y;
    }

    make_Queen() {
      this.queen = true;
    }

}
