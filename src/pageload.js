
// empties all child nodes inside the container
function emptyContent(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function loadHome () {
    const content = document.getElementById("content");

    emptyContent(content);

    const header = document.createElement('h1');
    const info = document.createElement('p');

    header.textContent = "Super Cool Restaurant";
    info.textContent = "This is the only restuarant you should care about!"

    content.appendChild(header);
    content.appendChild(info);


    // other info
    const hours = document.createElement('div');
    const hoursHeader = document.createElement('h2');
    
    hoursHeader.textContent = "Hours";
    const textOpeningHours = [
        'Sunday: Closed',
        'Monday: 7am - 8pm',
        'Tuesday: 7am - 8pm',
        'Wednesday: 7am - 8pm',
        'Thursday: 7am - 11pm',
        'Friday: 7am - 11pm',
        'Saturday: 8am - 7pm'
    ]

    hours.appendChild(hoursHeader);

    // because creating a bunch of p elements sounded awful
    textOpeningHours.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        hours.appendChild(p);
    })

    content.appendChild(hours);

}


function loadMenu () {
    const content = document.getElementById("content");

    emptyContent(content)

    const header = document.createElement('h1');
    header.textContent = 'Menu';


    content.appendChild(header);
}


function loadAbout () {
    const content = document.getElementById("content");

    emptyContent(content);

    const header = document.createElement('h1');
    header.textContent = 'Contact Us'

    const contactInfo = document.createElement('div');
    const name = document.createElement('p');
    const email = document.createElement('p');
    const phone = document.createElement('p');

    name.textContent = 'Joe Mama';
    email.textContent = 'joe4mama@realemail.com';
    phone.textContent = '000-000-1234';

    contactInfo.appendChild(name);
    contactInfo.appendChild(email);
    contactInfo.appendChild(phone);

    content.appendChild(header);
    content.appendChild(contactInfo);

}

export {loadHome, loadMenu, loadAbout}