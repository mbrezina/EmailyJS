export const Email = (props) => {

    const {id, sender, subject, time, unread, body} = props;

    console.log('data: ', props)

    const classForEmailStatus = unread ? 'closed' : 'opened';
    const emailSubject = subject ? subject : '---Email neobsahuje předmět---';
    const emailElm = document.createElement('div');

    if (body !== undefined) {
        emailElm.classList.add('email--expand');
    }

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
          <div class="email__body">${body}</div>
        </div>
        `;

    const fetchEmailBody = (id) => {
        if (id !== '') {
            fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
                .then((response) => response.json())
                .then((data) => {
                        emailElm.replaceWith(Email({
                            id: id,
                            sender: sender,
                            subject: subject,
                            time: time,
                            unread: unread,
                            body: data.body,
                        }))
                    }
                );
        }
    }

    const hideEmailDetail = () => {
        emailElm.replaceWith(Email({
            id: id,
            sender: sender,
            subject: subject,
            time: time,
            unread: unread,
            body: undefined,
        }))
    }

    const detailButton = emailElm.querySelector('button');
    detailButton.addEventListener('click', (event) => {
        if (emailElm.classList.contains('email--expand')) {
            hideEmailDetail();
        } else {
            fetchEmailBody(id);
        }
    });
    return emailElm;
}