import Resto from './images/resto.svg'
import { createDiv } from './utils';

const  HomeComponent = function(){
    const element = createDiv();
    element.classList.add('hero');
    
    /** Hero */
    const hero = createDiv();

    const left = createDiv();
    const subtitle = document.createElement('p');
    const title = document.createElement('h1');

    title.textContent = 'Let\'s dive in!';
    subtitle.textContent = 'The home of the best sauce without chicken in town.'

    left.appendChild(subtitle);
    left.appendChild(title);

    const image = document.createElement('img');
    image.id = 'resto'
    image.src = Resto;

   
    element.appendChild(image);
    element.appendChild(left);
    return element;

}

export {
    HomeComponent
}