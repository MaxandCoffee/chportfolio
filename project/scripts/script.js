const projectsButton = document.getElementById('projectsButton'),
      body = document.getElementsByTagName('body'),
      home_link = document.getElementById('home_link'),
      about_me = document.getElementById('about_me');

function addListeners() {
    projectsButton.addEventListener('click', function () {
        initProjects();
    });
}

function initProjects() {
    body[0].classList.add('projects');
    body[0].classList.remove('home');
    about_me.classList.add('fadeout');
}


function init() {
    addListeners();
}

init();