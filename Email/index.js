export const Email = (props) => {

    const {sender, subject, time, unread} = props;

    const classForEmailStatus = unread ? 'closed' : 'opened';

    const emailSubject = subject ? subject : '---Email neobsahuje předmět---';

    const emailElm = document.createElement('div');
    emailElm.innerHTML = `
        <div class="email">
          <div class="email__head">
            <button class="email__icon email__icon--${classForEmailStatus}"></button>
            <div class="email__info">
              <div class="email__sender">${sender.name}</div>
              <div class="email__subject">${emailSubject}</div>
            </div>
            <div class="email__time">${time}</div>
          </div>
          <div class="email__body"></div>
        </div>
        `;
    return emailElm;
}