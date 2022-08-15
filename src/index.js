import './style.css'
import { createDiv, removeChilds } from './utils';
import { HeaderComponent } from './header'
import { HomeComponent } from './home';
import { MenuComponent } from './menu';
import { ContactComponent } from './contact'

document.body.appendChild(HeaderComponent());
const container = createDiv();
container.classList.add('container');
document.body.appendChild(container);


document.getElementById('home').addEventListener('click',() =>{
    removeChilds(container);
    container.appendChild(HomeComponent());
    
})

document.getElementById('menu').addEventListener('click',() =>{
    removeChilds(container);
    container.appendChild(MenuComponent());
})

document.getElementById('contact').addEventListener('click',() =>{
    removeChilds(container);
    container.appendChild(ContactComponent());
})
container.appendChild(HomeComponent());