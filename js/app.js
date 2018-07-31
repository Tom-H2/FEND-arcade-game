const player = new Player();
const enemyOne = new Enemy(0, 0.8, 100 * (Math.random() * 0.04)); //enemyOne through enemyThree run on the three rows of rock
const enemyTwo = new Enemy(1, 1.8, 100 * (Math.random() * 0.05));
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

function callModal() { //modal called when the player wins by making it to the water
	const modal = document.querySelector('.modal__body');
	modal.classList.toggle('hide');
}
//callModal(); //keeps modal open for testing and styling
document.querySelector('.modal__close').addEventListener('click', () => { //allows for closing of modal without replaying
	callModal();
});

document.querySelector('.modal__button').addEventListener('click', () => { //replay button on modal
	window.location.reload(true);
	callModal();
});
