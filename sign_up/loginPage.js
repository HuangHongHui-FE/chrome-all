function query(url) {
    let res = {};
    let queryStr = url.split('?')[1];
    let queryList = queryStr.split('&');
    for (let i = 0; i < queryList.length; i++) {
        let key = queryList[i].split('=')[0]
        let value = queryList[i].split('=')[1]
        res[key] = value
    }
    return res;
}

let queryObj = query(window.location.href);



function event(){
    let event = document.createEvent('HTMLEvents');
    event.initEvent("input", true, true);
    event.eventType = 'message';
    return event;
}


let input_event = event()


let input_msg_timer = setInterval(() => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (email && password) {
        input_msg(email, password);
        btn_function();
        clearInterval(input_msg_timer);
    }
}, 1000)

function input_msg(email, password) {
    email.value = queryObj.email;
    email.dispatchEvent(input_event);
    password.value = queryObj.password;
    password.dispatchEvent(input_event);
}

function btn_function() {
    let btn_timer = setInterval(() => {
        let btn = document.querySelectorAll('.jFoBks')[0];
        if (btn) {
            btn.click()
            clearInterval(btn_timer)
        }
    }, 1000)
}



