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
}

class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
  }
}

class Enemy extends Entity {
  constructor(x, y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
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
