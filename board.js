// Laporsha Dees and Nived Parikh
// Nonwimp Assignment
// Checkers.html
// 8 December 2020


class Board {
        constructor() {
          this.c = document.getElementById("Game");
          this.gc = this.c.getContext("2d");
          this.gc.fillStyle = "white"; 
      this.gc.fillRect (0, 0, this.c.width, this.c.height); 

      // Same line as in the java version
      this.gc.strokeStyle = "black";
        this.tiles = new Array();
        this.color = 1;
        this.x = 0;
        this.y = 0;
        for (var i = 0; i < 8; i++) {
              this.tiles[i] = new Array()
        }
        for (var i = 0; i < 8; i++) {
          for (var j = 0; j < 8; j++) {
            this.tiles[i][j] = new Tile(this.color, this.x, this.y)
            this.color = this.color * -1;
            // this.add (this.board[i][j])
            this.x = this.x + 60;
          }
          this.x=0;
          this.color = this.color*-1;
          this.y = this.y + 60;
      }
          this.rPieces = new Array();
          this.wPieces = new Array();
          this.pColor = 1;
          this.x = 30;
          this.y = 30; 
          this.makepiece = 1;
          var pCount = 0;
          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 8; j++) {
              if (this.makepiece == 1) {
                this.rPieces[pCount] = new Game_piece(pCount+1, -1, this.x + (60*j), this.y + (60*i));
                this.makepiece = this.makepiece*-1;
                pCount++;
              }else {
                this.makepiece = this.makepiece*-1;
              }
            }
            this.makepiece = this.makepiece*-1;
          }
          var pCount = 0;
          for (var i = 5; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
              if (this.makepiece == 1) {
                this.wPieces[pCount] = new Game_piece(pCount+1, 1, this.x + (60*j), this.y + (60*i));
                this.makepiece = this.makepiece*-1;
                pCount++;
              }else {
                this.makepiece = this.makepiece*-1;
              }
            }

            this.makepiece = this.makepiece*-1;
          }
        }

        drawBoard () {
            console.log("draw board \n")
            for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
          this.tiles[i][j].draw(this.gc);
        }
      }
      for (var i = 0; i < this.rPieces.length; i++) {
        this.rPieces[i].draw_circle(this.gc)
      }
      for (var i = 0; i < this.wPieces.length; i++) {
        this.wPieces[i].draw_circle(this.gc)
      }
        }

        removeRPiece(index) {
          this.rPieces.splice(index, 1);
        }

        removeWPiece(index) {
          this.wPieces.splice(index, 1);
        }
        //return -1 if it can't move
        //return 1 if it can move one space
        //return 2 if it can take a red piece, and make it move two spaces while removing the red piece.s
        moveWPieceLeft(number) {
          var index;
          for (var i = 0; i < this.wPieces.length; i++) {
            if (number == this.wPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveLeft(this.wPieces[index], this.rPieces, this.wPieces) == 1) {
            this.wPieces[index].move(true);
          }else if (canMoveLeft(this.wPieces[index], this.rPieces, this.wPieces) > 1) {
            this.rPieces.splice(canMoveLeft(this.wPieces[index], this.rPieces, this.wPieces)-2, 1);
            this.wPieces[index].move(true);
            this.wPieces[index].move(true);
            turn=turn*-1;
          }else {
            alert("can't move");
            turn = turn*-1;
          }
          if (this.rPieces.length == 0) {
            if(alert('game has ended! Board will be reset')){}
            else    window.location.reload(); 
          }
        }

        moveWPieceRight(number) {
          var index;
          for (var i = 0; i < this.wPieces.length; i++) {
            if (number == this.wPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveRight(this.wPieces[index], this.rPieces, this.wPieces) == 1) {
            this.wPieces[index].move(false);
          }else if (canMoveRight(this.wPieces[index], this.rPieces, this.wPieces) > 1) {
            console.log('piece taken');
            console.log(canMoveRight(this.wPieces[index], this.rPieces, this.wPieces))
            this.rPieces.splice(canMoveRight(this.wPieces[index], this.rPieces, this.wPieces)-2, 1);
            this.wPieces[index].move(false);
            this.wPieces[index].move(false);
            turn=turn*-1;
          }else {
            alert("can't move");
            turn = turn*-1;
          }
          if (this.rPieces.length == 0) {
            if(alert('game has ended! Board will be reset')){}
            else    window.location.reload(); 
          }
        }

        /*moveWPieceLeftBack(number) {
          var index;
          for (i = 0; i < this.wPieces.length; i++) {
            if (number == this.wPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveLeftBack(this.wPieces[index])) {
            this.wPieces[index].moveBack(true);
          }else {
            alert("can't move");
            turn = turn*-1;
          }
        }
        moveWPieceRightBack(number) {
          var index;
          for (i = 0; i < this.wPieces.length; i++) {
            if (number == this.wPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveRightBack(this.wPieces[index])) {
            this.wPieces[index].moveBack(false);
          }else {
            alert("can't move");
            turn = turn*-1;
          }
        }*/

        moveRPieceLeft(number) {
          var index;
          for (var i = 0; i < this.rPieces.length; i++) {
            if (number == this.rPieces[i].getNumber()) {
              index = i;
            }
          }
      if (canMoveLeft(this.rPieces[index], this.rPieces, this.wPieces) == 1) {
            this.rPieces[index].move(true);
          }else if (canMoveLeft(this.rPieces[index], this.rPieces, this.wPieces) > 1) {
            this.wPieces.splice(canMoveLeft(this.rPieces[index], this.rPieces, this.wPieces)-2, 1);
            this.rPieces[index].move(true);
            this.rPieces[index].move(true);
            turn=turn*-1;
          }else {
            alert("can't move");
            turn = turn*-1;
          }
          if (this.wPieces.length == 0) {
            if(alert('game has ended! Board will be reset')){}
            else    window.location.reload(); 
          }
        }

        moveRPieceRight(number) {
          var index;
          for (var i = 0; i < this.rPieces.length; i++) {
            if (number == this.rPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveRight(this.rPieces[index], this.rPieces, this.wPieces) == 1) {
            this.rPieces[index].move(false);
          }else if (canMoveRight(this.rPieces[index], this.rPieces, this.wPieces) > 1) {
            this.wPieces.splice(canMoveRight(this.rPieces[index], this.rPieces, this.wPieces)-2, 1);
            this.rPieces[index].move(false);
            this.rPieces[index].move(false);
            turn=turn*-1;
          }else { 
            alert("can't move");
            turn = turn*-1;
          }
          if (this.wPieces.length == 0) {
            if(alert('game has ended! Board will be reset')){}
            else    window.location.reload(); 
          }
        }

        /*moveRPieceLeftBack(number) {
          var index;
          for (i = 0; i < this.rPieces.length; i++) {
            if (number == this.rPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveLeftBack(this.rPieces[index])) {
            this.rPieces[index].moveBack(true);
          }else {
            alert("can't move");
            turn = turn*-1;
          }
        }
        moveRPieceRightBack(number) {
          var index;
          for (i = 0; i < this.rPieces.length; i++) {
            if (number == this.rPieces[i].getNumber()) {
              index = i;
            }
          }
          if (canMoveRightBack(this.rPieces[index])) {
            this.rPieces[index].moveBack(false);
          }else {
            alert("can't move");
            turn = turn*-1;
          }
        }*/

        // init_pieces() {
        //
        // }
}
