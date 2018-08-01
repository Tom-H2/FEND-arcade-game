const player = new Player();
const enemyOne = new Enemy(0, 0.8, 100 * (Math.random() * 0.04)); //enemyOne through enemyThree run on the three rows of rock
const enemyTwo = new Enemy(1, 1.8, 100 * (Math.random() * 0.05)); //the math allows for the speed to change at each game reset
const enemyThree = new Enemy(2, 2.8, 100 * (Math.random() * 0.06));
const allEnemies = []; //array into which enemies are pushed
allEnemies.push(enemyOne, enemyTwo, enemyThree);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});

function callModal() { //modal called in classes.js line 40 as condition of winning
	const modal = document.querySelector('.modal__body');
	modal.classList.toggle('hide'); //toggles off index.html to allow modal to appear
}
//callModal(); //keeps modal open for testing and styling
document.querySelector('.modal__close').addEventListener('click', () => { //allows for closing of modal without replaying
	callModal(); //closes modal
});

document.querySelector('.modal__button').addEventListener('click', () => { //replay button on modal
	window.location.reload(true); //Udacity 1st review says this is not best practice but I struggled with resetting game and am already several weeks behind
	callModal(); //closes modal
});
