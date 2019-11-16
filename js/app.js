// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The position of the enemy
    this.x = x;
    this.y = y;
    // The speed of the enemy
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Increase the distace of the enemy
    this.x += dt * this.speed;

    // When the enemy disappears from the screen
    // reset the enemy to the initial positon with
    // diffrent speed
    if (this.x > 510) {
        this.x = -110;
        this.speed = 5 + Math.floor(Math.random() * 10);

    }
    // This statement for detect collision and
    // the calculation due to the real images' size
    // is bigger than the character
    if ((this.x + 15) < (player.x +15) + 70 &&
        this.x + 50 > (player.x + 15) &&
        (this.y + 90) < (player.y + 70) + 90 &&
        (this.y + 90) + 50 > (player.y + 60)) {
            player.reset();
     }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    // Setting the position of the player
    this.x = x;
    this.y = y;

    // The image for the player
    this.sprite = 'images/char-boy.png';
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handles the keypress
Player.prototype.handleInput = function(key) {
    // To save some memory and increse the performance a little
    // first check if the key pressed is an Arrow key
    if (!key){
        return;
    }

    // Check for every Arrow key, and before changing
    // the position of the player it checks if the move
    // is available and the player will not move off
    // the screen after the move.
    switch(key) {
        case 'right':
            // Check that it won't move off the right
            if (this.x <= 303) {
                // Executing this line means that it won't move off screen
                this.x += 101;
            }
            break;
        case 'left':
            if (this.x >= 101) {
                this.x -= 101;
            }
            break;
        case 'down':
            if (this.y <= 4 *83) {
                this.y += 83;
            }
            break;
        case 'up':
            if (this.y >= 83) {
                this.y -= 83;
            }
            break;
    }
};

// Check if the player reaced the water and if the is a collision
Player.prototype.update = function() {
    // Check if the player reached the water and if so
    // then rest
    if (this.y < 83) {
        // The player have reached the water
        // reset the game
        this.reset();
    }
};

// Reset the player to its initial state
Player.prototype.reset = function() {
    // Set its postion to the initial case
    this.x = (2 * 101);
    this.y = (5 * 83);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
