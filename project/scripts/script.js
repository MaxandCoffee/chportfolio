const projectsButton = document.getElementById('projectsButton'),
      body = document.getElementsByTagName('body'),
      home_link = document.getElementById('home_link'),
      about_me = document.getElementById('about_me');

function addListeners() {
    projectsButton.addEventListener('click', function () {
        initProjects();
        home_link.classList.add('to_top');
    });
}

function initProjects() {
    body[0].classList.add('projects');
    about_me.classList.add('fadeout');
}


function init() {
    addListeners();
}

init();