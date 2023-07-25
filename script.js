let storyIndex = 0;
let level = 1;
const storyText = [
    "You find yourself at the entrance of the dark and eerie Forest of Shadows. The ancient trees loom overhead, casting long, ominous shadows. Do you dare to enter?",
    "You take a deep breath and step into the forest, your heart pounding with anticipation. As you venture deeper into the forest, you encounter a mysterious old man. He warns you about the dangers that lie ahead and advises you to be cautious. You thank him for the warning and continue your journey. Suddenly, you come face to face with a ferocious wolf! What do you do?",
    "The wolf lunges at you, but you manage to draw your sword just in time. After a fierce battle, you emerge victorious. With the wolf defeated, you continue your quest. You reach the heart of the forest, where the entrance to a mysterious cave lies. Without hesitation, you enter the cave, which leads to a vast underground cavern. Suddenly, you encounter a ferocious dragon guarding the path to the treasure! What do you do?",
    "You take a deep breath and stand your ground. The dragon roars, and a fiery breath engulfs you! Quick on your feet, you manage to dodge the flames. Now is your chance to strike! Do you attack the dragon head-on or try to distract it?",
    "You decide that facing the dragon head-on is too risky. You backtrack and search for another route to the treasure. After some exploration, you find a hidden passage that leads you past the dragon's lair. Unfortunately, the passage is narrow and filled with traps. You must navigate carefully to avoid triggering them.",
    "You muster all your courage and launch a fierce attack on the dragon. After a hard-fought battle, you manage to land a critical blow. The dragon roars in pain and retreats, revealing a treasure chest behind it. You've found the Lost Treasure of Azaroth! Congratulations, you're a true hero!",
    "You decide to try and distract the dragon to sneak past it. You spot a glimmering jewel on the cave wall and throw it to the other side of the cavern. The dragon's attention is momentarily diverted, giving you enough time to slip past it unnoticed. As you make your way through the cave, you find a hidden room with the Lost Treasure of Azaroth! Congratulations, you've outsmarted the dragon and claimed the treasure!",
    "Fear overwhelms you, and you decide to turn back. But just as you're about to leave, you hear a faint voice calling for help deeper inside the forest. Your sense of duty compels you to investigate. You follow the voice and discover a trapped traveler. You help the traveler escape and earn their gratitude. The traveler offers you a map that might lead to the Lost Treasure of Azaroth. You decide to continue your quest. You reach the heart of the forest, where the entrance to a mysterious cave lies. Without hesitation, you enter the cave, which leads to a vast underground cavern. Suddenly, you encounter a ferocious dragon guarding the path to the treasure! What do you do?",
    "You decide that facing the dragon head-on is too risky. You backtrack and search for another route to the treasure. After some exploration, you find a hidden passage that leads you past the dragon's lair. Unfortunately, the passage is narrow and filled with traps. You must navigate carefully to avoid triggering them.",
    "You take a deep breath and stand your ground. The dragon roars, and a fiery breath engulfs you! Quick on your feet, you manage to dodge the flames. Now is your chance to strike! Do you attack the dragon head-on or try to distract it?",
    "You decide to try and distract the dragon to sneak past it. You spot a glimmering jewel on the cave wall and throw it to the other side of the cavern. The dragon's attention is momentarily diverted, giving you enough time to slip past it unnoticed. As you make your way through the cave, you find a hidden room with the Lost Treasure of Azaroth! Congratulations, you've outsmarted the dragon and claimed the treasure!"
];

const funnyComments = [
    "Oh, no! You tripped over your own feet!",
    "Oops! Looks like you dropped your map. Again.",
    "Watch out for that banana peel! Just kidding, it's not here.",
    "You call that a dance? It's more like a wobble!",
    "The dragon seems to be enjoying your dance moves.",
    "Your jokes are so bad that even the dragon rolled its eyes.",
    "You're the dancing master of the forest!",
    "It's robot time! Beep boop beep!",
];

function startAdventure() {
    storyIndex = 1;
    document.getElementById("story").textContent = storyText[storyIndex];
    document.getElementById("result").textContent = "";
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").textContent = "Enter the forest";
    document.getElementById("choice2").textContent = "Turn back and become a couch potato";
    document.getElementById("floating-comments").innerHTML = "";
    document.getElementById("treasure").style.display = "none"; // Hide the treasure image
    level = 1;
}

function makeChoice(choice) {
    if (storyIndex === 1 && choice === 1) {
        storyIndex = 2;
    } else if (storyIndex === 2 && choice === 1) {
        storyIndex = 3;
    } else if (storyIndex === 2 && choice === 2) {
        // Randomly choose a funny comment from the funnyComments array
        const randomCommentIndex = Math.floor(Math.random() * funnyComments.length);
        const comment = funnyComments[randomCommentIndex];
        displayFloatingComment(comment);
        document.getElementById("result").textContent = "Game Over! You've embraced the couch potato lifestyle.";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        return;
    } else if (storyIndex === 3 && choice === 1) {
        storyIndex = 4;
    } else if (storyIndex === 3 && choice === 2) {
        storyIndex = 5;
    } else if (storyIndex === 4 && choice === 1) {
        storyIndex = 6;
    } else if (storyIndex === 4 && choice === 2) {
        storyIndex = 7;
    } else if (storyIndex === 5 && choice === 1) {
        storyIndex = 8;
    } else if (storyIndex === 5 && choice === 2) {
        storyIndex = 9;
    } else if (storyIndex === 8 && choice === 1) {
        storyIndex = 10;
    } else if (storyIndex === 8 && choice === 2) {
        storyIndex = 11;
    } else {
        // Player made a wrong choice, leading to death and game over
        storyIndex = 12;
    }

    if (storyIndex === 6 || storyIndex === 7 || storyIndex === 10 || storyIndex === 11) {
        document.getElementById("story").textContent = storyText[storyIndex];
        document.getElementById("result").textContent = storyIndex === 6 || storyIndex === 7 ? "You've won!" : "Game Over!";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";

        // Show the treasure image when the user wins
        if (storyIndex === 6 || storyIndex === 7) {
            document.getElementById("treasure").style.display = "block";
        }
    } else if (storyIndex === 12) {
        document.getElementById("story").textContent = "You made a wrong choice and met a tragic end.";
        document.getElementById("result").textContent = "Game Over!";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
    } else {
        document.getElementById("story").textContent = storyText[storyIndex];
        updateChoiceOptions();
    }
}

function updateChoiceOptions() {
    if (storyIndex === 2) {
        document.getElementById("choice1").textContent = "Fight the wolf with your dance moves";
        document.getElementById("choice2").textContent = "Try to sneak past it while doing the chicken dance";
    } else if (storyIndex === 3) {
        document.getElementById("choice1").textContent = "Confront the dragon and challenge it to a dance-off";
        document.getElementById("choice2").textContent = "Retreat and do the Macarena instead";
    } else if (storyIndex === 4) {
        document.getElementById("choice1").textContent = "Attack the dragon head-on with a tickle attack";
        document.getElementById("choice2").textContent = "Distract the dragon with your hilarious jokes";
    } else if (storyIndex === 5) {
        document.getElementById("choice1").textContent = "Help the trapped traveler and do the robot dance together";
        document.getElementById("choice2").textContent = "Continue your quest and moonwalk away";
    } else if (storyIndex === 8) {
        document.getElementById("choice1").textContent = "Open the treasure chest with excitement";
        document.getElementById("choice2").textContent = "Open the treasure chest cautiously";
    }
}

function displayFloatingComment(comment) {
    const floatingCommentsElement = document.getElementById("floating-comments");
    const commentElement = document.createElement("div");
    commentElement.classList.add("floating-comment");
    commentElement.textContent = comment;
    floatingCommentsElement.appendChild(commentElement);

    // Remove the comment after a few seconds
    setTimeout(() => {
        floatingCommentsElement.removeChild(commentElement);
    }, 5000);
}

