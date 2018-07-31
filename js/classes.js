class Entity { //holds object with inheritence
	constructor() {
		this.sprite = 'images/';
		this.x = 2;
		this.y = 5;
	}

	update(dt) { //adds animation so that bugs move then reset
		this.isOutOfBoundsX = this.x > 5;
		this.isOutOfBoundsY = this.y < 1 || this.y > 5;
	}

	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
	}

	checkCollisions(playerOrEnemy) { //I based this function FEND tutorial GMT20180621-010258_FEND-Arcad_1600x900.mp4
		if ((this.y - 0.2) === playerOrEnemy.y) {
			if (this.x >= playerOrEnemy.x - 0.8 && this.x <= playerOrEnemy.x + 0.8) { //sensitivity for collision
				return true;
			}
		} else {
			return false;
		}
	}
}

class Player extends Entity { //creates player
	constructor() {
		super();
		this.sprite += 'char-boy.png';
		this.speed = 100 * (Math.random() * 5);
		this.playerMove = false;
		this.win = false;
	}

	update(dt) {
		super.update();
		if (this.isOutOfBoundsY && !this.moving && !this.win) {
			this.win = true;
			callModal();
		}
	}

	render() {
		super.render();
		this.playerMove = false;
	}

	handleInput(input) { //creates movement for player
		switch (input) { //I followed Matt Cranford's blog for help with the switch functions https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
			case 'left':
				this.x = this.x > 0 ? this.x - 1 : this.x;
				break;
			case 'up':
				this.y = this.y > 0 ? this.y - 1 : this.y;
				break;
			case 'right':
				this.x = (this.x > -1 && this.x < 4) ? this.x + 1 : this.x;
				break;
			case 'down':
				this.y = (this.y > 0 && this.y < 5) ? this.y + 1 : this.y;
				break;
		}
		this.playerMove = true;
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

	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		super.update();
		if (this.isOutOfBoundsX) {
			this.x = -1;
		} else {
			this.x += this.speed * dt;
		}
	};
}
