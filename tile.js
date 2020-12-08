// Laporsha Dees and Nived Parikh
// Nonwimp Assignment
// Checkers.html
// 8 December 2020


class Tile {
    constructor(color, x, y) {
      this.x = x;
      this.y = y;
      this.color = color;
      if (this.color == 1) {
        this.b_or_r = 'black';
      }else {
        this.b_or_r = 'red';
      }
      // this.tile = document.getElementById("game_space");
      // this.tilex = this.tile.getContext("2d");
      // this.tile.fillStyle = color;
      this.empty = false;
    }

    draw (ctx) {
      ctx.beginPath ();
      ctx.fillStyle = this.b_or_r;
      ctx.rect(this.x, this.y, 60, 60);
      ctx.fillRect(this.x, this.y, 60, 60);
      ctx.stroke();
    }
}
