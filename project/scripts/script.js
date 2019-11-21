const projectsButton = document.getElementById('projectsButton'),
      body = document.getElementsByTagName('body'),
      home_link = document.getElementById('home_link');

function addListeners() {
    projectsButton.addEventListener('click', function () {
        initProjects();
        home_link.classList.add('to_top');
    });
}

function initProjects() {
    body[0].classList.add('projects');
}


function init() {
    addListeners();
}

init();