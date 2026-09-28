/* =========================================================
   UTKARSH NOTES - WEEK 5
   SINGLE PAGE APPLICATION SIMULATION
   ========================================================= */


/* ---------- Main Application Container ---------- */

const app = document.getElementById("app");


/* =========================================================
   PAGE CONTENT
   ========================================================= */

const pages = {

    home: `
        <div class="page">

            <section class="hero">

                <div class="container hero-content">

                    <h1>
                        YOUR STUDY, YOUR WAY
                    </h1>

                    <p>
                        Find organized notes and video resources
                        for your studies.
                    </p>

                    <a href="#/subjects"
                       class="button"
                       data-route="subjects">
                        Explore Notes
                    </a>

                </div>

            </section>


            <section class="page-section home-info">

                <div class="container">

                    <h2>
                        Welcome to Utkarsh Notes
                    </h2>

                    <div class="content-grid">

                        <article class="content-card">

                            <h3>
                                Organized Learning
                            </h3>

                            <p>
                                Find study resources arranged
                                according to different subjects.
                            </p>

                        </article>


                        <article class="content-card">

                            <h3>
                                Easy Navigation
                            </h3>

                            <p>
                                Move between different sections
                                without reloading the webpage.
                            </p>

                        </article>


                        <article class="content-card">

                            <h3>
                                Student Friendly
                            </h3>

                            <p>
                                The interface is designed to keep
                                learning resources simple and easy
                                to access.
                            </p>

                        </article>

                    </div>

                </div>

            </section>

        </div>
    `,


    subjects: `
        <div class="page">

            <section class="page-section">

                <div class="container">

                    <h1>
                        SUBJECTS
                    </h1>

                    <div class="subject-grid">

                        <button
                            class="subject-card"
                            type="button"
                            data-subject="Computer Science"
                            aria-pressed="false">

                            <span class="subject-card-title">
                                Computer<br>Science
                            </span>

                        </button>


                        <button
                            class="subject-card"
                            type="button"
                            data-subject="Maths"
                            aria-pressed="false">

                            <span class="subject-card-title">
                                Maths
                            </span>

                        </button>


                        <button
                            class="subject-card"
                            type="button"
                            data-subject="Science"
                            aria-pressed="false">

                            <span class="subject-card-title">
                                Science
                            </span>

                        </button>

                    </div>

                    <div id="subjectMessage"
                         class="dynamic-message"
                         aria-live="polite">

                        Select a subject to view its information.

                    </div>

                </div>

            </section>

        </div>
    `,


    notes: `
        <div class="page">

            <section class="page-section">

                <div class="container">

                    <h1>
                        NOTES
                    </h1>

                    <p style="text-align:center; color:#5b6472; margin-bottom:40px;">
                        Select a subject to explore available study
                        resources.
                    </p>


                    <div class="content-grid">

                        <article class="content-card">

                            <h3>
                                Computer Science
                            </h3>

                            <p>
                                Programming, web development,
                                databases and computer science
                                study material.
                            </p>

                        </article>


                        <article class="content-card">

                            <h3>
                                Maths
                            </h3>

                            <p>
                                Mathematics concepts, formulas
                                and practice-oriented study material.
                            </p>

                        </article>


                        <article class="content-card">

                            <h3>
                                Science
                            </h3>

                            <p>
                                General science topics and
                                learning resources for students.
                            </p>

                        </article>

                    </div>

                </div>

            </section>

        </div>
    `,


    about: `
        <div class="page">

            <section class="page-section">

                <div class="container">

                    <h1>
                        ABOUT US
                    </h1>

                    <div class="about-content">

                        <div class="about-image">

                            <img
                                src="study-image.png"
                                alt="Students studying together"
                                width="300"
                                height="190"
                                loading="lazy"
                                decoding="async">

                        </div>


                        <div class="about-text">

                            <p>
                                Utkarsh Notes is a simple student
                                learning website designed to organize
                                study resources in one place.
                            </p>

                            <p>
                                This project demonstrates how HTML,
                                CSS and JavaScript can be combined to
                                create an interactive single page
                                application.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    `,


    contact: `
        <div class="page">

            <section class="page-section">

                <div class="container">

                    <h1>
                        CONTACT
                    </h1>

                    <div class="contact-box">

                        <form id="contactForm">

                            <label for="name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required>


                            <label for="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required>


                            <label for="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                required></textarea>


                            <button
                                type="submit"
                                class="button">

                                Send Message

                            </button>


                            <div
                                id="formMessage"
                                class="message-success"
                                aria-live="polite"
                                hidden>
                            </div>

                        </form>

                    </div>

                </div>

            </section>

        </div>
    `
};


/* =========================================================
   ERROR PAGE
   ========================================================= */

function showErrorPage() {

    app.innerHTML = `
        <div class="page">

            <section class="error-page">

                <h1>
                    404
                </h1>

                <p>
                    The page you are looking for does not exist.
                </p>

                <a href="#/home"
                   class="button"
                   data-route="home">

                    Go to Home

                </a>

            </section>

        </div>
    `;
}


/* =========================================================
   GET CURRENT ROUTE
   ========================================================= */

function getRoute() {

    const hash = window.location.hash;

    if (!hash || hash === "#") {
        return "home";
    }

    const route = hash.replace("#/", "").split("?")[0];

    return route || "home";
}


/* =========================================================
   UPDATE ACTIVE NAVIGATION
   ========================================================= */

function updateActiveNavigation(route) {

    const navigationLinks =
        document.querySelectorAll("[data-route]");

    navigationLinks.forEach(function (link) {

        if (link.dataset.route === route) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });
}


/* =========================================================
   INITIALIZE SUBJECT INTERACTION
   ========================================================= */

function initializeSubjectCards() {

    const subjectCards =
        document.querySelectorAll(".subject-card");

    const subjectMessage =
        document.getElementById("subjectMessage");

    if (!subjectCards.length || !subjectMessage) {
        return;
    }

    subjectCards.forEach(function (card) {

        card.addEventListener("click", function () {

            subjectCards.forEach(function (item) {

                item.classList.remove("selected");

                item.setAttribute(
                    "aria-pressed",
                    "false"
                );

            });


            card.classList.add("selected");

            card.setAttribute(
                "aria-pressed",
                "true"
            );


            const selectedSubject =
                card.dataset.subject;


            subjectMessage.innerHTML = `
                <strong>
                    Selected Subject: ${selectedSubject}
                </strong>
                <br>
                You selected ${selectedSubject}.
                Study materials for this subject can be
                added here.
            `;

        });

    });
}


/* =========================================================
   INITIALIZE CONTACT FORM
   ========================================================= */

function initializeContactForm() {

    const form =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    if (!form || !formMessage) {
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        formMessage.textContent =
            "Thank you. Your message has been received in this demo.";

        formMessage.hidden = false;

        form.reset();

    });
}


/* =========================================================
   RENDER ROUTE
   ========================================================= */

function renderRoute() {

    const route = getRoute();


    if (pages[route]) {

        app.innerHTML = pages[route];

    } else {

        showErrorPage();

    }


    updateActiveNavigation(route);

    initializeSubjectCards();

    initializeContactForm();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    app.focus();
}


/* =========================================================
   HANDLE NAVIGATION
   ========================================================= */

document.addEventListener("click", function (event) {

    const routeLink =
        event.target.closest("[data-route]");

    if (!routeLink) {
        return;
    }


    const route =
        routeLink.dataset.route;


    const newURL =
        `#/` + route;


    if (window.location.hash !== newURL) {

        history.pushState(
            { page: route },
            "",
            newURL
        );

        renderRoute();

    }

});


/* =========================================================
   BROWSER BACK / FORWARD
   ========================================================= */

window.addEventListener(
    "popstate",
    function () {

        renderRoute();

    }
);


/* =========================================================
   HASH CHANGE
   ========================================================= */

window.addEventListener(
    "hashchange",
    function () {

        renderRoute();

    }
);


/* =========================================================
   INITIAL PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderRoute();

    }
);