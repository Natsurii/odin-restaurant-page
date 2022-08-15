import { createDiv } from "./utils";
import ContactIllustration from './images/contacts.png'
const ContactComponent = function() {
    const element = createDiv();
    element.classList.add('contacts');
    
    const  left = document.createElement('img');
    left.src = ContactIllustration;
    left.id = 'contact-image'
    const right = createDiv();
    right.classList.add('right')

    const headerContact = document.createElement('h1');
    headerContact.textContent = 'Contact Us!';
    right.appendChild(headerContact);
    
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    right.appendChild(emailLabel);
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    right.appendChild(emailInput);

    const inquiryLabel = document.createElement('label');
    inquiryLabel.textContent = 'Inquiry'
    right.appendChild(inquiryLabel);
    
    const inquiryInput = document.createElement('input');
    inquiryInput.type = 'text';
    right.appendChild(inquiryInput);
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit!';
    right.appendChild(submitButton);
    element.appendChild(left);
    element.appendChild(right);
    return element;
}

export {
    ContactComponent
}