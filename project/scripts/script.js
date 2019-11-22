const body = document.getElementsByTagName('body'),
    home_link = document.getElementById('home_link'),
    projectsButton = document.getElementById('projectsButton'),
    about_me = document.getElementById('about_me'),
    projects = document.getElementById('projects'),
    projectContainer = document.getElementById('projectContainer'),
    main_heading = document.getElementById('main_heading'),
    project_li = document.querySelectorAll('#projects li'),
    overlay = document.querySelector('overlay');

//Project Templates
const project = [
    {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.' },
        { heading: 'Beacon Interactive Systems' },
        { image: '../images/beacon.png' }
    ]

function addListeners() {

    projectsButton.addEventListener('click', function (e) {
        initProjects();
    });

    window.addEventListener('click', function (e) {
        if (e.target.hash) {
            initProjectView(e.target.hash);
        };

    });
}

function initProjectView(hash) {
    const elmId = hash.substr(1);
    const eml = document.getElementById(elmId);
    const dot = eml.nextSibling;
    animateOverlay(getOverlayColor(dot));
}

function generateTemplate(project) {
    const template = '<p>' + project.content + '</p> <img aria-hidden="true" alt="Project Image" src="' + project.image + '">';

    return template;
}

function animateOverlay(color) {
    if (color && overlay) {
        overlay.style.background = color;
    }
    body[0].classList.add('animate');
}

function resetOverlay() {
    body[0].classList.remove('animate');
}

function getOverlayColor(dot) {
    return window.getComputedStyle(dot).getPropertyValue('background-color');
}

function updateProjectInfo(template) {
    setTimeout(function () {
        projectContainer.innerHTML = template;
    }, 500);
}

function setMainHeading(heading) {
    setTimeout(function () {
        main_heading.innerHTML = heading;
    }, 1750);
}



function initProjects() {
    body[0].classList.add('projects');
    animateOverlay();
    about_me.classList.add('fadeout');

    setMainHeading('My Projects');

    setTimeout(function () {
        about_me.style.display = "none";
    }, 500);

    let timeout = 0;

    //animates project list
    for (let i = 0; i < project_li.length; i++) {
        project_li[i].style.display = "block";
        timeout += 250;

        setTimeout(function () {
            project_li[i].classList.add('flyin_right');
        }, timeout);
    }
    resetOverlay();
}

function init() {
    switch (window.location.hash) {
        case '#projects':
            initProjects();
          break;
    }
    addListeners();
}

init();