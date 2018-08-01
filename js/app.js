/* The first reviewer suggested using strict mode.
I tried this from the start but got error codes related to the engine.js file, which was provided by Udacity.
I have not been able to resolve issue that allEnemies is not recognized in the engine.js file.
In the future I will use strict mode as the basis for my JavaScript code but feel I need to move on from this project
*/
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
/* The modal is created in the index.html and is called upon winning the game. It contains tow
eventListeners. The modal__close closes the modal but does not reset the game. modal__button resets the game.
** The first Udacity reviewer pointed out that resetting the window is not best practice and I acknowledge this but feel I need to move on in the course
** I would like to revisit this if I get caught up and have time
*/
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
