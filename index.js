// Array to store correct answers
const correctAnswers = [
    "b", "b", "c", // Section 1: Grammar
    "a", "b", "c", // Section 2: Vocabulary
    "b", "b", "c", // Section 3: Reading Comprehension
    // No correct answers needed for Section 4 (Writing)
];

// Function to calculate the score and display results
function calculateScore() {
    let score = 0;
    let maxScore = correctAnswers.length; // Total questions

    // Loop through each question in sections 1-3
    for (let i = 1; i <= maxScore; i++) {
        // Get the selected answer from the form
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        // Check if an answer is selected
        if (selectedAnswer) {
            // Compare selected answer to correct answer
            if (selectedAnswer.value === correctAnswers[i - 1]) {
                score++; // Increment score for correct answer
            }
        }
    }

    // Get the writing task answer
    const writingAnswer = document.getElementById("writingTask").value.trim();

    // Display results for sections 1-3 and message for section 4
    displayResults(score, maxScore, writingAnswer);
}

// Function to display results for sections 1-3 and message for section 4
function displayResults(score, maxScore, writingAnswer) {
    // Calculate percentage score
    let percentage = (score / maxScore) * 100;

    // Determine proficiency level based on percentage score
    let proficiencyLevel;
    if (percentage >= 90) {
        proficiencyLevel = "Advanced";
    } else if (percentage >= 70) {
        proficiencyLevel = "Intermediate";
    } else if (percentage >= 50) {
        proficiencyLevel = "Basic";
    } else {
        proficiencyLevel = "Beginner";
    }

    // Display results for sections 1-3
    alert(`Your score for sections 1-3: ${score} out of ${maxScore}. Proficiency level: ${proficiencyLevel}`);

    // Display message for section 4 (Writing)
    alert("The writing section will be evaluated by your trainer.");
}
