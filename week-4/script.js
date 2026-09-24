const exploreButton = document.getElementById("exploreButton");
const notesMessage = document.getElementById("notesMessage");

const subjectCards = document.querySelectorAll(".subject-card");
const subjectMessage = document.getElementById("subjectMessage");

const startButton = document.getElementById("startButton");
const startMessage = document.getElementById("startMessage");

const subjectsSection = document.getElementById("subjects");
const getStartedSection = document.getElementById("getStarted");


/* ---------- Explore Notes ---------- */

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


/* ---------- Subject Card Interaction ---------- */

subjectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        subjectCards.forEach(function (item) {

            item.classList.remove("selected");
            item.setAttribute("aria-pressed", "false");

        });

        card.classList.add("selected");
        card.setAttribute("aria-pressed", "true");

        const selectedSubject = card.dataset.subject;

        subjectMessage.innerHTML = `
            <strong>Selected Subject: ${selectedSubject}</strong><br>
            You selected ${selectedSubject}.
            Study materials for this subject can be added here.
        `;

    });

});


/* ---------- Start Learning ---------- */

startButton.addEventListener("click", function () {

    startMessage.textContent =
        "Great! Choose a subject above to start learning.";

    startMessage.classList.add("show");

    subjectsSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* ---------- Navigation: Subjects ---------- */

document.getElementById("subjectsLink")
    .addEventListener("click", function (event) {

        event.preventDefault();

        subjectsSection.scrollIntoView({
            behavior: "smooth"
        });

    });


/* ---------- Navigation: Home ---------- */

document.getElementById("homeLink")
    .addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


/* ---------- Navigation: Notes ---------- */

document.getElementById("notesLink")
    .addEventListener("click", function (event) {

        event.preventDefault();

        notesMessage.innerHTML = `
            <strong>Notes Section</strong><br>
            Select one of the subjects to explore your study materials.
        `;

        notesMessage.classList.add("show");

        subjectsSection.scrollIntoView({
            behavior: "smooth"
        });

    });


/* ---------- Navigation: Contact ---------- */

document.getElementById("contactLink")
    .addEventListener("click", function (event) {

        event.preventDefault();

        startMessage.textContent =
            "For more information, please use the contact section.";

        startMessage.classList.add("show");

        getStartedSection.scrollIntoView({
            behavior: "smooth"
        });

    });


/* ---------- Footer Home ---------- */

document.getElementById("footerHome")
    .addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


/* ---------- Footer Contact ---------- */

document.getElementById("footerContact")
    .addEventListener("click", function (event) {

        event.preventDefault();

        getStartedSection.scrollIntoView({
            behavior: "smooth"
        });

    });