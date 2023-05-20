import {Email} from "../Email/index.js";

export const EmailSection = (props) => {
    let {heading, folder} = props;
    const emailSectionElm = document.createElement('section');
    emailSectionElm.classList.add('inbox');
    emailSectionElm.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id=${folder}></div>
        `;

    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
        .then((response) => response.json())
        .then((data) => {
            const elementToFill = document.querySelector(`#${folder}`);
            data.emails.forEach((email) => {
                elementToFill.append(Email(email))
            })
        });
    return emailSectionElm;
}