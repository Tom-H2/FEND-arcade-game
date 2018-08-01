class Entity { //holds object with inheritence
	constructor() {
		this.sprite = 'images/'; //acesses image folder for all enemies and player
		this.x = 2; //sets "home" x axis
		this.y = 5; //sets "home" y axis
	}

	update(dt) { //adds animation so that bugs move then reset
		this.isOutOfBoundsX = this.x > 5;
		this.isOutOfBoundsY = this.y < 1 || this.y > 5;
	}

	render() { //draws the 2d canvas for the game
		ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
	}

	checkCollisions(playerOrEnemy) { //I based this function FEND tutorial GMT20180621-010258_FEND-Arcad_1600x900.mp4
		if ((this.y - 0.2) === playerOrEnemy.y) { //establishes the math for y axis to recognize a collision
			if (this.x >= playerOrEnemy.x - 0.8 && this.x <= playerOrEnemy.x + 0.8) { //sensitivity for collision
				return true;
			}
		} else {
			return false;
		}
	}
}

class Player extends Entity { //extends Entity object to create player
	constructor() {
		super();
		this.sprite += 'char-boy.png';
		this.playerMove = false;
		this.win = false; //sets check block condition for winning the game to false
	}

	update(dt) { //establishes conditions for winning the game
		super.update();
		if (this.isOutOfBoundsY && !this.moving && !this.win) {
			this.win = true;
			callModal(); //calls modal to announce game has been won
		}
	}

	render() { //allows player to appear as it moves
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

class Enemy extends Entity { //extends Entity object into Enemy class
	constructor(x, y, speed) {
		super();
		this.sprite += 'enemy-bug.png';
		this.x = x; //properties variables called in the specific enemies in app.js
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
