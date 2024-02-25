console.log('已进入匹配的页面就执行-', window.location.href)
// console.log(document.cookie)
// console.log(window.localStorage)
// console.log(window.sessionStorage)


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

// url数据处理
queryObj.birth = queryObj.birth.slice(4, 6) + '/' + queryObj.birth.slice(6, 8) + '/' + queryObj.birth.slice(0, 4)
queryObj.address = queryObj.address.split('-').join(' ')
queryObj.ssn = queryObj.ssn.slice(queryObj.ssn.length - 4)
console.log(queryObj)


document.title = queryObj.first + '-' + queryObj.last
// https://portal-co.tipico.us/registration/bonus


let timer = setInterval(() => {
    let deposit = document.querySelectorAll(".sc-jRQBWg")[0];
    if (deposit) {
        // 点击跳转
        deposit.click()
        one(queryObj);
        clearInterval(timer);
    }
}, 2000)

function one(queryObj) {
    console.log('timer---', timer)
    // 第一步的信息输入
    let one = setInterval(() => {
        console.log('one---')
        let birth = document.querySelectorAll(".sc-lbhJGD")[0]
        let email = document.querySelectorAll(".sc-lbhJGD")[1]
        let password = document.querySelectorAll(".sc-lbhJGD")[2]
        let phone = document.querySelectorAll(".PhoneInputInput")[0]
        let div1 = document.querySelectorAll("#confirmMarketingConsent")[0]
        let div2 = document.querySelectorAll("#acceptTermsAndConditions")[0]
        if (birth && email && password && phone && div1 && div2) {
            oneFn(birth, email, password, phone, div1, div2);
            clearInterval(one)
        }
    }, 2000)
}

function oneFn(birth, email, password, phone, div1, div2) {
    let event = document.createEvent('HTMLEvents');
    event.initEvent("input", true, true);
    event.eventType = 'message';

    div2.click()
    div1.click()

    birth.value = queryObj.birth;
    birth.dispatchEvent(event);

    email.value = queryObj.email;
    email.dispatchEvent(event);

    password.value = queryObj.password;
    password.dispatchEvent(event)
    // (217) 519-8594  格式需要转

    phone.value = queryObj.phone;
    phone.dispatchEvent(event)

    birth.focus();

    // 调用下一步
    one_next()
}


function one_next() {
    let one_next = setInterval(() => {
        console.log('one_next---')
        let next = document.querySelectorAll(".blEjFN")[0];
        if (next) {
            next.click();

            // 调用下一步
            two();
            clearInterval(one_next)
        }
    }, 1000);
}


function two() {
    let two = setInterval(() => {
        console.log('two---')
        let firstName = document.querySelectorAll('.sc-lbhJGD')[3]
        let lastName = document.querySelectorAll('.sc-lbhJGD')[4]
        let address = document.querySelectorAll('#address-input')[0]

        let ssn = document.querySelectorAll('.sc-lbhJGD')[7]

        if (firstName && lastName && address && ssn) {
            twoFn(firstName, lastName, address, ssn);
            timerSelect()
            clearInterval(two)
        }
    }, 1000)
}

function twoFn(firstName, lastName, address, ssn) {
    let event = document.createEvent('HTMLEvents');
    event.initEvent("input", true, true);
    event.eventType = 'message';
    firstName.value = queryObj.first;
    firstName.dispatchEvent(event);

    lastName.value = queryObj.last;
    lastName.dispatchEvent(event);


    ssn.value = queryObj.ssn;
    ssn.dispatchEvent(event);

    address.value = queryObj.address;
    address.dispatchEvent(event)
    address.focus();
}


function timerSelect() {
    let timerSelect = setInterval(() => {
        let addressSelectArr = document.querySelectorAll('#react-select-3-listbox')[0] || document.querySelectorAll('#react-select-2-listbox')[0] || document.querySelectorAll('#react-select-1-listbox')[0];
        console.log(addressSelectArr)
        if (addressSelectArr) {
            timerSelectFn(addressSelectArr)
            clearInterval(timerSelect);
        }
    }, 3000)
}


function timerSelectFn(addressSelectArr) {
    let res = null;
    addressSelectArr = addressSelectArr.children[0].children;

    for (let i = 0; i < addressSelectArr.length; i++) {
        let str = addressSelectArr[i].innerText;
        if (str.slice(str.length - 5) == queryObj.zipcode) {
            console.log('找到-address对应zipcode的选项了')
            res = addressSelectArr[i];
            break;
        }
    }

    if (!res) {
        console.log('未找到-address对应zipcode的选项')
    } else {
        res.click();
        // two_next();
    }
}


// https://portal-co.tipico.us/registration/steps/step_two


// function two_next() {
//     // 第二部的next点击
//     let two_next = setInterval(() => {
//         console.log('two_next---')
//         let next = document.querySelectorAll('.sc-fHeRUh')[0];
//         if (next) {
//             next.click();
//             clearInterval(two_next);
//         }
//     }, 5000)
// }

// function delCookie() {
//     var keys = document.cookie.match(/[^ =;]+(?==)/g)
//     if (keys) {
//         for (var i = keys.length; i--;) {
//             //   document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
//             //   document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
//             document.cookie = keys[i] + '=0;path=/;domain=.tipico.us;expires=' + new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
//         }
//     }
// }

// function cleanData(){
//     delCookie();
//     window.localStorage.clear()
//     window.sessionStorage.clear()
//     document.cookie = "lux_uid=;expires=Thu,01 Jan 1970 00:00:00 UTC;path=/;";
//     // document.cookie = 'uid=;path=/;domain=.adform.net;expires=' + new Date(0).toUTCString()
// }

// setTimeout(() => {
//     // cleanData();
//     window.close();
// }, 25000)