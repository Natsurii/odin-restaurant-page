const createDiv = () => document.createElement('div');

const HeaderComponent = function(){
    const header = document.createElement('header');

    const logo = createDiv();
    const nav = document.createElement('nav');

    const companyTitle = document.createElement('h1');
    companyTitle.textContent = 'Chooks To Sauce';
    logo.appendChild(companyTitle);

    /* Add  navigation buttons */
    const home = createDiv();
    const menu = createDiv();
    const contact = createDiv();

    home.textContent = 'HOME';
    menu.textContent = 'MENU';
    contact.textContent = 'CONTACT';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}

export {
    HeaderComponent
}