import {Email} from "../Email/index.js";

export const EmailSection = (props) => {
    let {heading, emails, folder} = props;
    console.log(folder);

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

    // emails = data.emails);


    //console.log(emails);
    //renderSection(data.emails, document.getElementById('unread')));

    // const elementToFill = document.querySelector('#emailItems');
    //emails.forEach((email) => {
    //   elementToFill.append(Email(email))

//    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
//        .then((response) => response.json())
    //       .then((data) => renderSection(data.emails, document.getElementById('unread')));

    //  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
    //      .then((response) => response.json())
    //      .then((data) => renderSection(data.emails, document.getElementById('read')));
    // const renderSection = (emails, element) => {     }

//
//     neprecteneElm.innerHTML = emails
//         .map((email) => Email(email));
//
//         element.innerHTML = emails
//             .map((email) => {
//                 let iconClass = 'opened';
//                 if (email.unread) {
//                     iconClass = 'closed';
//                 }
//                 ;
//
//                 return;
//             })
//             .join('');
// };

    return emailSectionElm;

}