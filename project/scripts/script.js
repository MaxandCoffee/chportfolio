const body = document.getElementsByTagName('body'),
    home_link = document.getElementById('home_link'),
    projectsButton = document.getElementById('projectsButton'),
    nextButton = document.getElementById('nextButton'),
    about_me = document.getElementById('about_me'),
    projects = document.getElementById('projects'),
    projectContainer = document.getElementById('projectContainer'),
    main_heading = document.getElementById('main_heading'),
    project_li = document.querySelectorAll('#projects li'),
    overlay = document.querySelector('.overlay');

//Project Templates
const projectsObj = {
    "kcManager": {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.',
        heading: 'KC Manager',
        image: 'project/images/beacon.png',
        headingClass: 'default'
    },
    "viewDoLabs": {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.',
        heading: 'ViewDo Labs',
        image: 'project/images/beacon.png',
        headingClass: 'default'
    },
    "beaconInteractiveSys": {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.',
        heading: 'Beacon Interactive Systems',
        image: 'project/images/beacon.png',
        headingClass: 'small'
    },
    "vistaprintCS": {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.',
        heading: 'Vistaprint Corporate Solutions',
        image: 'project/images/beacon.png',
        headingClass: 'small'
    },
    "adventInternat": {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.',
        heading: 'Advent International',
        image: 'project/images/beacon.png',
        headingClass: 'small'
    },
    "vistaprint": {
        content: 'I was the Lead Engineer for a system which helped revolutionize the U.S. Navy\'s shipboard logging process. The system I led development on not only allows decision-makers to view near real-time ship analytics, but it also empowers them to act more agilely when it comes to decisions on energy consumption and management. Before this solution, the U.S. Navy maintained manual paper logging on all ships.',
        heading: 'Vistaprint',
        image: 'project/images/beacon.png',
        headingClass: 'default'
    }
}


function addListeners() {
    projectsButton.addEventListener('click', function () {
        initProjects();
    });

    nextButton.addEventListener('click', function () {
        initNextButton(window.location.hash);
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
    const dot = eml.nextElementSibling;

    if (!projects.classList.contains('fadeout')) {
        projects.classList.add('fadeout');
    }

    setNextButtonColor(dot);

    animateOverlay(getNewColor(dot));

    animateTriangles(getNewColor(dot));

    updateProjectInfo(generateTemplate(projectsObj[elmId]));

    setMainHeading(projectsObj[elmId].heading, projectsObj[elmId].headingClass);

    nextButton.parentElement.style.display = 'block';
}

function getNext(key) {
    var keys = Object.keys(projectsObj).sort();
    var index = keys.indexOf(key);


    if ((index > 0) && (index < keys.length - 1)) {
        index = index + 1;
    } else if (index === keys.length - 1) {
        index = 0;
    }

    return projectsObj[keys[index]];
}

function initNextButton(hash) {
    const elmId = hash.substr(1);
    const nextProject = getNext(elmId);
    const color = window.getComputedStyle(nextButton).getPropertyValue('background');

    initNewProjectView(nextProject, color, hash);
}

function setNextButtonColor(dot) {
     nextButton.style.background = getNewColor(dot);
};

function initNewProjectView(nextProject, dot, hash) {
    const id = hash.substr(1);
    const currentProject = document.getElementById(id);
    const nextProjectElm = currentProject.parentElement.nextElementSibling.children[0];
    const nextProjectDot = nextProjectElm.nextElementSibling;
    window.location.hash = hash;
    animateOverlay(dot);
    animateTriangles(dot);
    updateProjectInfo(generateTemplate(nextProject));
    setMainHeading(nextProject.heading, nextProject.headingClass);
    setNextButtonColor(nextProjectDot);
}

function animateTriangles(color) {
    const topTriangle = document.querySelector('.aside_triangle__top'),
        bottomTriangle = document.querySelector('.aside_triangle__bottom'),
        newTopColor = window.getComputedStyle(bottomTriangle).getPropertyValue('border-left-color'),
        newBottomColor = color;

    topTriangle.style.borderColor = newTopColor + 'transparent transparent transparent';
    bottomTriangle.style.borderLeftColor = newBottomColor;
}

function generateTemplate(arr) {
    const template = '<p>' + arr.content + '</p> <img aria-hidden="true" alt="Project Image" src="' + arr.image + '">';

    return template;
}

function animateOverlay(color) {
    if (color && overlay) {
        overlay.style.background = color;
    }
    if (body[0].classList.contains('animate')) {
        body[0].classList.remove('animate');
    }
    setTimeout(function () {
        body[0].classList.add('animate');
    }, 0);
}

function getNewColor(dot) {
    return window.getComputedStyle(dot).getPropertyValue('background-color');
}

function updateProjectInfo(template) {
    setTimeout(function () {
        projectContainer.innerHTML = template;
    }, 500);
}

function setMainHeading(heading, size) {
    setTimeout(function () {
        main_heading.innerHTML = heading;
        if (size) {
            main_heading.classList.add(size);
        }
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