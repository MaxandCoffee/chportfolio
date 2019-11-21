const projectsButton = document.getElementById('projectsButton'),
    body = document.getElementsByTagName('body'),
    home_link = document.getElementById('home_link'),
    about_me = document.getElementById('about_me'),
    projects = document.getElementById('projects'),
    main_heading = document.getElementById('main_heading'),
    project_li = document.querySelectorAll('#projects li');

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
        main_heading.innerHTML = 'My Projects';
    }, 1750);
    setTimeout(function () {
        about_me.style.display = "none";
    }, 500);

    for (let i in project_li) {
        setTimeout(function () {
            project_li[i].style.display = "block";
            project_li[i].classList.add('flyin_right');
        }, 250);
    }

}


function init() {
    addListeners();
}

init();