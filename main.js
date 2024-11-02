// 🎃 Start the Spooky Adventure Game 🎃

// Function to start the game
function startGame() {
    
    let playerName = prompt("What is your name, brave soul?");
    
    
    alert("Welcome, " + playerName + ", to Haunted St. Matthew HS!");

    // First decision: Choose a path
    let pathChoice = prompt("Do you want to go into the (1) library or (2) basement?");
    
    // Call the appropriate function based on player choice
    if (pathChoice === "1") {
        library();
    } else if (pathChoice === "2") {
        basement();
    } else {
        alert("Invalid choice. The ghost catches you because you hesitated!");
        endGame();
    }
}

// Function for the Library path
function library() {
    let libraryChoice = prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?");
    
    if (libraryChoice === "1") {
        alert("A ghost emerges from the book and scares you to death!");
    } else if (libraryChoice === "2") {
        alert("You quietly leave the library and find the exit. You survive!");
    } else {
        alert("Invalid choice. The ghost catches you while you ponder!");
    }
    
    endGame();
}

// Function for the Basement path
function basement() {
    let basementChoice = prompt("You hear strange noises. Do you (1) investigate or (2) run away?");
    
    if (basementChoice === "1") {
        alert("You discover a hidden door leading to the auto shop. There's a car trunk filled with candy!");
        autoShop();
    } else if (basementChoice === "2") {
        alert("You trip and fall... The ghost catches you!");
        endGame();
    } else {
        alert("Invalid choice. The ghost catches you while you hesitate!");
        endGame();
    }
}

// Additional path: Auto Shop
function autoShop() {
    let autoShopChoice = prompt("In the auto shop, you see an ancient toolbox. Do you (1) open the toolbox or (2) ignore it and keep exploring?");
    
    if (autoShopChoice === "1") {
        alert("Inside the toolbox, you find a mysterious map that leads you out of the haunted school. You survive!");
    } else if (autoShopChoice === "2") {
        alert("As you walk away, the lights flicker, and the ghost catches you!");
    } else {
        alert("Invalid choice. The ghost catches you as you hesitate!");
    }
    
    endGame();
}

// Function to end the game
function endGame() {
    alert("The End. Thanks for playing!");
}

// Start the game
startGame();
