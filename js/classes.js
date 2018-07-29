class Entity { //holds object with inheritence
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }

  update(dt) {
      this.isOutOfBoundsX = this.x > 5;
      this.isOutOfBoundsY = this.y < 1 || this.y > 5;
    }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

  checkCollisions(playerOrEnemy) {
    if ((this.y-0.2) === playerOrEnemy.y) {
      if (this.x >= playerOrEnemy.x - 0.5 && this.x <= playerOrEnemy.x + 0.5) { //sensitivity for collision
        return true;
      }
    }
    else {
      return false;
    }
  }
}

class Player extends Entity { //creates player
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    this.speed = 100 * (Math.random() * 5);
    this.moving = false;
    this.win = false;
  }

  update(dt) {
    super.update();
    if (this.isOutOfBoundsY && !this.moving && !this.win) {
      alert("Win");
      this.win = true;
    }

    //render() {
      //super.render();
      //this.moving = false;
    //}
  }

  handleInput(input) { //creates movement for player
    switch(input) {
      case 'left':
        this.x = this.x > 0 ? this.x - 1 : this.x;
        break;
      case 'up':
        this.y = this.y > 0 ? this.y - 1 : this.y;
        break;
      case 'right':
        this.x = this.x > 0 ? this.x + 1 : this.x;
        break;
      case 'down':
        this.y = this.y > 0 ? this.y + 1 : this.y;
        break;
    }
    this.moving = true;
  }
}

class Enemy extends Entity {
  constructor(x, y, speed) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    }

    update(dt) { //adds animation so that bugs move then reset
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      super.update();
        if(this.isOutOfBoundsX) {
          this.x = -1;
        }
        else {
          this.x += dt;
        }
    };
}
