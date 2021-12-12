const destination = document.querySelector('#destination');
const home = document.querySelector('#home');
const crew = document.querySelector('#crew');
const technology = document.querySelector('#technology')

const body = document.querySelector('body');

const destinationSection = document.querySelector('.destination');
const wrapper = document.querySelector('.wrapper')

/// functions \\\

function changeBg(where, button, newClass, section) {
    button.addEventListener('click', function () {
        where.classList = "";
        where.classList.add(newClass);

        const currentSection = document.querySelector('.current');
        currentSection.classList.add('hide')

        section.classList.remove('hide');
        section.classList.add('current')
    })

}

changeBg(body, destination, 'body-destination', destinationSection);
changeBg(body, home, 'body-main', wrapper);
changeBg(body, crew, 'body-crew');
changeBg(body, technology, 'body-technology')