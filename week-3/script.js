// Get elements from the HTML
const exploreButton = document.getElementById("exploreButton");
const notesMessage = document.getElementById("notesMessage");

const subjectCards = document.querySelectorAll(".subject-card");
const subjectMessage = document.getElementById("subjectMessage");

const startButton = document.getElementById("startButton");
const startMessage = document.getElementById("startMessage");

const subjectsSection = document.getElementById("subjects");


// Explore Notes button
exploreButton.addEventListener("click", function () {

    notesMessage.innerHTML = `
        <strong>Available Notes</strong><br>
        Computer Science, Maths and Science notes are available.
        Select a subject below to continue learning.
    `;

    notesMessage.classList.add("show");

    subjectsSection.scrollIntoView({
        behavior: "smooth"
    });
});


// Subject card interaction
subjectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Remove selected class from all cards
        subjectCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Add selected class to clicked card
        card.classList.add("selected");

        // Get subject name from data attribute
        const selectedSubject = card.dataset.subject;

        // Update content dynamically
        subjectMessage.innerHTML = `
            <strong>Selected Subject: ${selectedSubject}</strong><br>
            You selected ${selectedSubject}. 
            Study materials for this subject can be added here.
        `;
    });

});


// Start Learning button
startButton.addEventListener("click", function () {

    startMessage.textContent =
        "Great! Choose a subject above to start learning.";

    startMessage.classList.add("show");

    subjectsSection.scrollIntoView({
        behavior: "smooth"
    });
});


// Navigation - Subjects
document.getElementById("subjectsLink").addEventListener("click", function () {

    subjectsSection.scrollIntoView({
        behavior: "smooth"
    });

});


// Navigation - Home
document.getElementById("homeLink").addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Navigation - Notes
document.getElementById("notesLink").addEventListener("click", function () {

    notesMessage.innerHTML = `
        <strong>Notes Section</strong><br>
        Select one of the subjects to explore your study materials.
    `;

    notesMessage.classList.add("show");

    subjectsSection.scrollIntoView({
        behavior: "smooth"
    });

});


// Navigation - Contact
document.getElementById("contactLink").addEventListener("click", function () {

    startMessage.textContent =
        "For more information, please use the contact section.";

    startMessage.classList.add("show");

    document.getElementById("getStarted").scrollIntoView({
        behavior: "smooth"
    });

});


// Footer Home
document.getElementById("footerHome").addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Footer Contact
document.getElementById("footerContact").addEventListener("click", function () {

    document.getElementById("getStarted").scrollIntoView({
        behavior: "smooth"
    });

});