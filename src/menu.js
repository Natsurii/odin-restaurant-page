import { createDiv } from "./utils";
import Chicken from './images/chicken.jpg'
import Fries from './images/fries.jpeg'
import Sinigang from './images/sinigang.png'
import Drinks from './images/drinks.jpeg'
import Pata from './images/pata.jpg'
import Lomi from './images/lomi.jpg'
import Java from './images/java.jpg'
/**
 * Create an menu item object 
 * @param {string} title Title card for the viand
 * @param {string} image src 
 * @param {number} price 
 * @param {string} grid 
 * @returns 
 */
const __createMenuItemComponent = function(title, image, price, grid){
    const item = createDiv();
    
    const itemTitle = document.createElement('h3');
    const itemPrice = document.createElement('p');

    item.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255,0.1) 33%, rgba(40,38,44,0.8) 100%), url(${image})`
    item.style.backgro
    itemTitle.textContent = title;
    itemPrice.textContent = `Php ${price}`;

    item.appendChild(itemTitle);
    item.appendChild(itemPrice);
    item.classList.add('menu-item');
    item.classList.add(grid)
    return item;
}


const MenuComponent = function() {
    const gridContainer = createDiv();

    const headerText = document.createElement('h1');

    headerText.textContent = 'Menu';
    gridContainer.appendChild(headerText);
    const element = createDiv();
    element.classList.add('menu');

    element.appendChild(__createMenuItemComponent('Chicken roast', Chicken, '299','chicken'));
    element.appendChild(__createMenuItemComponent('Belgian fries', Fries, '99', 'fries'))
    element.appendChild(__createMenuItemComponent('Canned drinks', Drinks, '48', 'drinks'))
    element.appendChild(__createMenuItemComponent('Special Sinigang', Sinigang, '199', 'sinigang'))
    element.appendChild(__createMenuItemComponent('Crispy Pata', Pata, '499', 'side1'))
    element.appendChild(__createMenuItemComponent('Lomi', Lomi, '149', 'side2'))
    element.appendChild(__createMenuItemComponent('Java Rice', Java, '49', 'side3'))

    gridContainer.appendChild(element)
    return gridContainer;

}

export{
    MenuComponent
}