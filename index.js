import {EmailSection} from "./EmailSection/index.js";

const emailApp = document.querySelector('#app');

const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Příchozí pošta';
emailApp.append(mainTitle)

const sectionUnread = EmailSection({heading: 'Nové emaily', emails: [], folder: 'unread'});
emailApp.append(sectionUnread);

const sectionRead = EmailSection({heading: 'Přečtené emaily', emails: [], folder: 'read'});
emailApp.append(sectionRead);





