const projectsButton = document.getElementById('projectsButton'),
      body = document.getElementsByTagName('body'),
      home_link = document.getElementById('home_link'),
    about_me = document.getElementById('about_me'),
    main_heading = document.getElementById('main_heading');

function addListeners() {
    projectsButton.addEventListener('click', function () {
        initProjects();
    });
}

function initProjects() {
    body[0].classList.add('projects');
    body[0].classList.remove('home');
    about_me.classList.add('fadeout');
    setTimeout(function () {
        main_heading.innerHTML = 'My Projects';;
    }, 550);

}


function init() {
    addListeners();
}

init();