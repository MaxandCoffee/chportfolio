
function addListeners() {
    const projectsButton = document.getElementById('projectsButton');
    const body = document.getElementsByTagName('body');
    const home_link = document.getElementById('home_link');

    projectsButton.addEventListener('click', function () {
        body[0].classList.add('projects');
        home_link.classList.add('to_top');
    });
}


function init() {
    addListeners();
}

init();