
function addListeners() {
    const projectsButton = document.getElementById('projectsButton');
    const body = document.getElementsByTagName('body');

    projectsButton.addEventListener('click', function () {
        body.classlist.add('projects');
    });
}


function init() {
    addListeners();
}

init();