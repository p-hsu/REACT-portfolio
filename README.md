# REACT portfolio  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

****

## Project overview

My portfolio - featuring projects that I am proud of as well as ways to contact me and view my resume. 

### Project Status:

*ONGOING*

#### Issues to debug:

* projects cards very difficult to translate from non-react hardcoded html/css to React based components
* nav bar changes from side to top with hamburger menu on media query : 
    - nav bar doesn't display
    - therefore no function and NOT mobile friendly >> this should be redesigned from a mobile first perspective
* css is everywhere and very messy...
* images for project cards and resume PDF file not populating/found

****

## Deployment

Github Pages >> https://p-hsu.github.io/REACT-portfolio/

****

## MVP

### Project-build Aspects:

The following components are used to build the code for this project:

1. React.js
2. CSS: Materialize and Vanilla

### Functionality:

The following lists all functions within this project:

* Navbar links to seperate "page" using react-router-dom
* Projects page displays project cards with links
* Contact page links to github and linked-in as well as phone and email
* resume is a download-able PDF

### Process:
#### Tasks

- generate inital directories using `create-react-app {name}`
- setup compnonents and pages
- link to pages from `App.js` using react-router-dom and a Navigation Bar component

### Beyond the MVP

* page should be redesigned as mobile-first structure and cards could be populated using Github API

****

## Installation

1. Clone this repository onto local workspace
2. Open Terminal (MacOS) or Git Bash (Windows) and change location to where you want the cloned directory
3. Type `git clone` and paste copied respository

## Usage

From Command Line on local server:

```
npm start
```


## Application Screenshots

![GIF of project](./assets/ReactPortfolio.gif)
****

## License

This project is license under MIT, please see the `LICENSE` file in the repo.

## Credit

* Full-stack Bootcamp Program @ [Washington University, Saint Louis](https://bootcamp.tlcenter.wustl.edu/) through [© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand](https://www.trilogyed.com/)