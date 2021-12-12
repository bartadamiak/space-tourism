const destinations = document.querySelectorAll(".destination-choose-container li");
const destinationSelected = document.querySelector('.destination-selected');
const destinationImg = document.querySelector('.destination-image img');
const destinationAbout = document.querySelector('.destination-about');
const distanceInfo = document.querySelector('.distance-info');
const timeInfo = document.querySelector('.time-info');



function Dest(name, text, distance, time, img) {
    this.name = name;
    this.text = text;
    this.distance = distance;
    this.time = time;
    this.image = img;

}

const moon = new Dest('moon', "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", "384,400 KM", "9 MONTHS", "destination/image-moon.png");

const mars = new Dest('mars', "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!", "225 MIL. KM", "9 MONTHS", "destination/image-mars.png");

const europa = new Dest('europa', "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", "628 MIL. KM", "3 YEARS", "destination/image-europa.png");

const titan = new Dest('titan', "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", "1.6 BIL. KM", "7 YEARS", "destination/image-titan.png");

destinations.forEach(element => {

    element.addEventListener('click', function () {
        const selectedD = document.querySelector('.selected-destination');
        destinationSelected.innerHTML = element.innerHTML;
        selectedD.classList.remove('selected-destination');
        element.classList.add('selected-destination');

        if (element.innerHTML == 'moon') {
            setNewDest(moon.text, moon.distance, moon.time, moon.image)
        }

        if (element.innerHTML == 'mars') {
            setNewDest(mars.text, mars.distance, mars.time, mars.image)
        }

        if (element.innerHTML == 'europa') {
            setNewDest(europa.text, europa.distance, europa.time, europa.image)
        }

        if (element.innerHTML == 'titan') {
            setNewDest(titan.text, titan.distance, titan.time, titan.image)
        }

        
        

    })

});

function setNewDest(about, distInfo, tInfo, imageAdress) {
    destinationAbout.innerHTML = about;
    distanceInfo.innerHTML = distInfo;
    timeInfo.innerHTML = tInfo;
    destinationImg.src = imageAdress
};




