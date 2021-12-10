const destination = document.querySelector('#destination');
const home = document.querySelector('#home');
const crew = document.querySelector('#crew');
const technology = document.querySelector('#technology')

const body = document.querySelector('body')



function changeBg(where, button, newClass) {
    button.addEventListener('click', function () {
        where.classList = "";
        where.classList.add(newClass)
    })

}

changeBg(body, destination, 'body-destination');
changeBg(body, home, 'body-main');
changeBg(body, crew, 'body-crew');
changeBg(body, technology, 'body-technology')