// ==UserScript==
// @name        Owa mail copy
// @version     0.0.2
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
    setTimeout(() => {
        let user_button = document.getElementsByClassName('_hl_e')[0];
        user_button.onclick = (e) => {
            setTimeout(() => {
                let popup = document.getElementsByClassName('headerMenuDropShadow')[0];
                let email_adress = popup.getElementsByClassName('_pe_I')[0];
                let to_copy = email_adress.textContent;

                // add button
                let copy_button = document.createElement('span');
                copy_button.id = COPY_BUTTON_ID;
                copy_button.innerText = '⬇';
                copy_button.style.border = '1px solid black';
                copy_button.style.marginLeft = '5px';
                copy_button.style.paddingLeft = '2px';
                copy_button.style.paddingRight = '1px';
                copy_button.onclick = (e) => {
                    navigator.clipboard.writeText(to_copy).then(() => {
                        console.log(`Copy '${to_copy}' is succsseed!`);
                    }, () => {
                        console.log('Copy error!');
                    });
                };

                email_adress.appendChild(copy_button);
            }, 500)
        }
    }, 1000)
})();
