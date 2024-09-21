// Sample data
const fundamentals = [
    { fundamental: "Anatomy", subgroup: "Face", topic: "Azaro Head" },
    { fundamental: "Color Theory", subgroup: "Primary Colors", topic: "Mixing Red and Yellow" },
    { fundamental: "Perspective", subgroup: "One-Point", topic: "Drawing a Road" },
    // Add more objects as needed
];

// Function to shuffle and get a random fundamental
function getRandomFundamental() {
    const randomIndex = Math.floor(Math.random() * fundamentals.length);
    return fundamentals[randomIndex];
}

// Function to update the prompt box
function updatePromptBox() {
    const { fundamental, subgroup, topic } = getRandomFundamental();
    
    // Update the prompt box content
    document.querySelector('#prompt-box .title').innerHTML = `You will study <strong>${fundamental}</strong>`;
    document.querySelector('#prompt-box .subtitle').innerHTML = `Focusing on <strong>${subgroup}</strong>`;
    document.querySelector('#prompt-box .content').innerHTML = `Exercise: <strong>${topic}</strong>`;
}

// Event listener for the shuffle button
document.getElementById('shuffle-btn').addEventListener('click', updatePromptBox);

// Generate the first set on page load
window.onload = updatePromptBox;
