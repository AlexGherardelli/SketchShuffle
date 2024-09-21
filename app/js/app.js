// Object of art fundamentals, subgroups, and specific topics
const fundamentals = {
    "Gesture Drawing": [
        { subgroup: "Dynamic Poses", topics: [] },
        { subgroup: "Action Lines", topics: [] }
    ],
    "Perspective": [
        { subgroup: "One-Point Perspective", topics: [] },
        { subgroup: "Two-Point Perspective", topics: [] },
        { subgroup: "Three-Point Perspective", topics: [] }
    ],
    "Anatomy": [
        { subgroup: "Face", topics: ["Azaro Head", "Features: Mouth", "Features: Eyes"] },
        { subgroup: "Body", topics: ["Hands", "Torso"] }
    ],
    "Color Theory": [
        { subgroup: "Primary Colors", topics: [] },
        { subgroup: "Color Harmonies", topics: [] }
    ],
    "Composition": [
        { subgroup: "Rule of Thirds", topics: [] },
        { subgroup: "Leading Lines", topics: [] }
    ]
};

// Get references to DOM elements
const shuffleButton = document.getElementById('shuffle-btn');
const promptBox = document.getElementById('prompt-box');

// Function to generate a random fundamental and subgroup
function shuffleFundamental() {
    // Get a random main category (fundamental)
    const fundamentalsKeys = Object.keys(fundamentals);
    const randomFundamentalIndex = Math.floor(Math.random() * fundamentalsKeys.length);
    const selectedFundamental = fundamentalsKeys[randomFundamentalIndex];

    // Get a random subgroup from the selected fundamental
    const subgroups = fundamentals[selectedFundamental];
    const randomSubgroupIndex = Math.floor(Math.random() * subgroups.length);
    const selectedSubgroup = subgroups[randomSubgroupIndex];

    // Check if there are topics in the subgroup, and pick one if available
    let topic = "";
    if (selectedSubgroup.topics.length > 0) {
        const randomTopicIndex = Math.floor(Math.random() * selectedSubgroup.topics.length);
        topic = selectedSubgroup.topics[randomTopicIndex];
    }

    // Display the result
    let resultText = `Today's focus: <strong>${selectedFundamental}</strong> -> <strong>${selectedSubgroup.subgroup}</strong>`;
    if (topic) {
        resultText += ` -> <strong>${topic}</strong>`;
    }

    promptBox.innerHTML = `<p>${resultText}</p>`;
}

// Attach event listener to the button
shuffleButton.addEventListener('click', shuffleFundamental);
