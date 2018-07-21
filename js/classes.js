class Entity { //holds object with inheritence
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }

  update(dt) {
      this.isOutOfBoundsX = this.x > 5;
      this.isOutOfBoundsY = this.y < 1;
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
  }
}

class Enemy extends Entity {
  constructor(x, y, speed) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = 0;
    this.y = 0.8;
    this.speed = speed;
  }

  //enemyOne(x, y, speed) {
      //super();
      //this.x = 0;
      //this.y = 0.8;
      //this.speed = 1;
  }

  update(dt) { //adds animation so that bugs move then reset
    super.update();
    if(this.isOutOfBoundsX) {
      this.x = -1;
    }
    else {
      this.x += dt;
    }
  }
}
