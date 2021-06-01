// ==UserScript==
// @name        Owa mail copy
// @version     0.0.3
// @description Add button for easy copy of e-mail address in OWA
// @author      Ruslan Borovilov
// @namespace   https://github.com/Pycz/
// @homepageURL https://github.com/Pycz/owa-mail-copy
// @match       *://*/owa/*
// @match       https://outlook.live.com/mail/*
// @match       https://outlook.office365.com/mail/*
// @match       https://outlook.office.com/mail/*
// @grant       none
// ==/UserScript==


(function(){
    let COPY_BUTTON_ID = 'pycz_copy_button';

    function make_copy_button() {
        let copy_button = document.createElement('span');
        copy_button.id = COPY_BUTTON_ID;
        copy_button.innerText = '📋';
        copy_button.style.marginLeft = '5px';
        copy_button.style.paddingLeft = '2px';
        copy_button.style.paddingRight = '1px';
        return copy_button
    }

    function make_button_put_text_in_clipboard(button, to_copy) {
        button.onclick = (e) => {
            navigator.clipboard.writeText(to_copy).then(() => {
                console.log(`Copy '${to_copy}' is succsseed!`);
            }, () => {
                console.log('Copy error!');
            });
        };
    }

    setTimeout(() => {
        let user_button = document.getElementsByClassName('_hl_e')[0];
        if (user_button) {
            console.log('Old version');

            user_button.onclick = (e) => {
                setTimeout(() => {
                    let popup = document.getElementsByClassName('headerMenuDropShadow')[0];
                    let email_adress = popup.getElementsByClassName('_pe_I')[0];
                    let to_copy = email_adress.textContent.trim();

                    // add button
                    copy_button = make_copy_button();
                    make_button_put_text_in_clipboard(copy_button, to_copy);
                    email_adress.appendChild(copy_button);
                }, 500)
            }
        }
        else {
            console.log('New version');

            let user_button = document.getElementsByClassName('ms-Icon--person')[0];
            user_button.onclick = (e) => {
                setTimeout(() => {
                    let popup = document.getElementsByClassName('headerMenuDropShadow')[0];
                    let email_adress = popup.getElementsByClassName('_pe_C')[0];
                    let to_copy = email_adress.textContent.trim();

                    // add button
                    copy_button = make_copy_button();
                    make_button_put_text_in_clipboard(copy_button, to_copy);
                    email_adress.appendChild(copy_button);
                }, 500)
            }
        }
    }, 1000)
})();
