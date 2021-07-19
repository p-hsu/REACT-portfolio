import React from "react";

const cardWrap = {
    marginTop: 25
}

const cardHover = {
    backgroundColor: "#FCFCFC"
}

const cardReveal = {
    backgroundColor: "#FCFBF3",
    zIndex: 1
}

const cardTitle = {
    borderBottom: "2px solid #b3e5fc"
}

function Projects() {
    return (
        <section id="projects" className="section scrollspy">
            <h3 className="blue-grey-text text-darken-3 light-blue lighten-4">PROJECTS</h3>
            <div className="container">
                <div className="row">

                <div className="col s12 m6 l4" style={cardWrap}>
                        <div className="card card medium hoverable " style={cardHover}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="Waggin' Tag'em thumbnail" src="/images/employeedir.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator blue-grey-text text-darken-3">Employee Directory<i className="material-icons right">more_vert</i></span>
                                <p>A Employee Directory built with React.js.</p>
                            </div>
                            <div className="card-reveal" style={cardReveal}>
                                <span className="card-title blue-grey-text text-darken-3 underline" style={cardTitle}>Employee Directory<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>Front-end
                                        <ul>
                                            <li>CSS</li>
                                                <ul>
                                                    <li>Vanilla</li>
                                                    <li>Bootstrap</li>
                                                </ul>
                                            <li>React.js</li>
                                            <li>API: Random User Generator</li>
                                        </ul>
                                    </li>
                                    <li>Github Pages deployment</li>
                                </ul>
                                <div className="card-action">
                                    <a aria-label="Visit the github repo for ReadMe Generator Project" href="https://github.com/p-hsu/employee-directory-REACT" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View source" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a aria-label="Visit the github deployed link for Brew Me Project"  href="https://p-hsu.github.io/employee-directory-REACT/" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View online" rel="noreferrer">
                                        <i className="material-icons">launch</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4" style={cardWrap}>
                        <div className="card card medium hoverable " style={cardHover}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="Waggin' Tag'em thumbnail" src="/images/WagginTagem.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator blue-grey-text text-darken-3">Waggin' Tag'em<i className="material-icons right">more_vert</i></span>
                                <p>A canine "dating" app - find the furry friend you need for you dog!</p>
                            </div>
                            <div className="card-reveal" style={cardReveal}>
                                <span className="card-title blue-grey-text text-darken-3 underline" style={cardTitle}>Waggin' Tag'em<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>Back-end
                                        <ul>
                                            <li>Express.js</li>
                                            <li>Handlebars.js</li>
                                            <li>Sequelize ORM</li>
                                        </ul>
                                    </li>
                                    <li>Front-end
                                        <ul>
                                            <li>CSS Materialize</li>
                                            <li>Javascript ES+6</li>
                                        </ul>
                                    </li>
                                    <li>Heroku deployment</li>
                                </ul>
                                <div className="card-action">
                                    <a aria-label="Visit the github repo for ReadMe Generator Project" href="https://github.com/p-hsu/Waggin-tag-em.git" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View source" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a aria-label="Visit the github deployed link for Brew Me Project"  href="https://limitless-caverns-66584.herokuapp.com/" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View online" rel="noreferrer">
                                        <i className="material-icons">launch</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4" style={cardWrap}>
                        <div className="card card medium hoverable " style={cardHover}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="Waggin' Tag'em thumbnail" src="/images/techblog.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator blue-grey-text text-darken-3">Tech Blog<i className="material-icons right">more_vert</i></span>
                                <p>A MVC style techblog using Handlebars and SQL.</p>
                            </div>
                            <div className="card-reveal" style={cardReveal}>
                                <span className="card-title blue-grey-text text-darken-3 underline" style={cardTitle}>Tech Blog<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>Back-end
                                        <ul>
                                            <li>Express.js</li>
                                            <li>Handlebars.js</li>
                                            <li>Sequelize ORM</li>
                                        </ul>
                                    </li>
                                    <li>Front-end
                                        <ul>
                                            <li>CSS Materialize</li>
                                            <li>Javascript ES+6</li>
                                        </ul>
                                    </li>
                                    <li>Heroku deployment</li>
                                </ul>
                                <div className="card-action">
                                    <a aria-label="Visit the github repo for ReadMe Generator Project" href="https://github.com/p-hsu/tech.blog-MVC" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View source" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a aria-label="Visit the github deployed link for Brew Me Project"  href="https://polar-cliffs-80167.herokuapp.com/" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View online" rel="noreferrer">
                                        <i className="material-icons">launch</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4" style={cardWrap}>
                        <div className="card card medium hoverable" style={cardHover}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="Brew Me thumbnail" src="/images/BrewMe.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator blue-grey-text text-darken-3">Brew Me<i className="material-icons right">more_vert</i></span>
                                <p>A simple and user-friendly brewery locator for the everyday beer enthusuast.</p>
                            </div>
                            <div className="card-reveal" style={cardReveal}>
                                <span className="card-title blue-grey-text text-darken-3 underline" style={cardTitle}>Brew Me<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>CSS Bulma</li>
                                    <li>Vanilla JavaScript ES6+</li>
                                    <li>API:
                                        <ul>
                                            <li>Open Brewery DB</li>
                                            <li>Google Maps Javascript</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="card-action">
                                    <a aria-label="Visit the github repo for Brew Me Project" href="https://github.com/p-hsu/BREW_ME.git" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View source" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a aria-label="Visit the github deployed link for Brew Me Project"  href="https://p-hsu.github.io/BREW_ME/" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View online" rel="noreferrer">
                                        <i className="material-icons">launch</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4" style={cardWrap}>
                        <div className="card card medium hoverable" style={cardHover}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="Readme generator thumbnail" src="/images/README-gen.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator blue-grey-text text-darken-3">README Generator<i className="material-icons right">more_vert</i></span>
                                <p>A CML prompt generated README template, professional and efficient!</p>
                            </div>
                            <div className="card-reveal" style={cardReveal}>
                                <span className="card-title blue-grey-text text-darken-3 underline" style={cardTitle}>README Generator<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>Node.js</li>
                                    <li>JavaScript ES6+</li>
                                </ul>
                                <div className="card-action">
                                    <a aria-label="Visit the github repo for ReadMe Generator Project" href="https://github.com/p-hsu/CML_README_GEN.git" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View source" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4" style={cardWrap}>
                        <div className="card card medium hoverable" style={cardHover}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="Day Planner thumbnail" src="/images/planner.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator blue-grey-text text-darken-3">Work Day Scheduler<i className="material-icons right">more_vert</i></span>
                                <p>Keep track of your work day with this color coded planner.</p>
                            </div>
                            <div className="card-reveal" style={cardReveal}>
                                <span className="card-title blue-grey-text text-darken-3 underline" style={cardTitle}>Work Day Scheduler<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>CSS Bootstrap</li>
                                    <li>Moment.js</li>
                                    <li>JQuery</li>
                                </ul>
                                <div className="card-action">
                                    <a aria-label="Visit the github repo for Work Day Scheduler Project" href="https://github.com/p-hsu/Day_Planner_9-5.git" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View source" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a aria-label="Visit the github deployed link for Work Day Scheduler Project"  href="https://p-hsu.github.io/Day_Planner_9-5/" target="_blank" className="btn-floating btn-large waves waves-effect waves-light teal darken-1" data-tooltip="View online" rel="noreferrer">
                                        <i className="material-icons">launch</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Projects;