// 注意这里的邮箱与密码要先弄好
let data = [{ "first": "Maria", "last": "McGee", "phone": "(312)918-2647", "address": "13853 Forest Ave", "zipcode": 60419, "birth": 19860326, "ssn": 815339215, "email": "peasybtdod@hotmail.com", "password": "Zx886699." }, { "first": "Jennifer", "last": "Berner", "phone": 2175198594, "address": "130 E Birch St", "zipcode": 62550, "birth": 19810608, "ssn": 533061222, "email": "asfdvvfbfg@hotmail.com", "password": "Zx886699." }, { "first": "justin", "last": "fender", "phone": 6186653916, "address": "1356 second street", "zipcode": 62858, "birth": 19741126, "ssn": 323760366, "email": "fdfghjjghs@hotmail.com", "password": "Zx886699." }, { "first": "Tony", "last": "Yarbrough", "phone": 8156775222, "address": "2105 Freeport rd apt 302", "zipcode": 61081, "birth": 19651107, "ssn": 339625140, "email": "fghtytbgns@hotmail.com", "password": "Zx886699." }]



// 數據清洗
for (let i = 0; i < data.length; i++) {
    data[i].address = data[i].address.split(' ').join('-');
}


// 开页面
let i = 0;
let j = 0;
// openUpPage(i);
// let timer = setInterval(() => {
//     i++;
//     console.log(i)
//     if (i === data.length) {
//         clearInterval(timer)
//     } else {
//         console.log(i)
//         openUpPage(i);
//     }
// }, 35000)

function openUpPage(i) {
    let url = `https://portal-co.tipico.us/registration/bonus?first=${data[i].first}&last=${data[i].last}&phone=${data[i].phone}&address=${data[i].address}&zipcode=${data[i].zipcode}&birth=${data[i].birth}&ssn=${data[i].ssn}&email=${data[i].email}&password=${data[i].password}`
    window.open(url, i, `width=700, height=800, top=100, left=400`)
}

function openLoginPage(j) {
    let url = `https://portal-co.tipico.us/auth/login?email=${data[i].email}&password=${data[j].password}`
    window.open(url, i, `width=700, height=500, top=100, left=400`)
}


let app = document.getElementsByClassName('wrapper_new')[0];
let h3_up = document.createElement('h3');
let h3_login = document.createElement('h3');
let btn = document.createElement('button');
let btn_login = document.createElement('button');
let ul = document.createElement('ul');
let div = document.createElement('div');

btn_create();
btn_login_create();
h_create();
h_login_create();
li_create();
ul_create();
div_create();


function btn_create() {
    btn.style = 'width: 400px; height=30px; font-size: 25px; background-color: blue;color: white;z-index:9999;position: fixed; left: 20px; top: 100px;'
    btn.innerText = '注册下一个资料(先清除cookie)';
    btn.addEventListener('click', function (e) {
        openUpPage(i);
        i++;
        h_up_inner(i);

    })
    div.appendChild(btn)
}


function h_create() {
    h3_up.style = 'font-size: 20px; background-color: yellow;z-index:9990;position: fixed; left: 20px; top: 150px;'
    div.appendChild(h3_up)
}

function h_login_create() {
    h3_login.style = 'font-size: 20px; background-color: yellow;z-index:9990;position: fixed; left: 500px; top: 150px;'
    div.appendChild(h3_login)
}


function li_create() {
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.innerText = i + 1 + '---name---' + data[i].first + '-' + data[i].last;
        li.style = 'font-size: 16px;margin-top: 5px'
        ul.appendChild(li);
    }
}


function ul_create() {
    ul.style = 'position: fixed; left: 20px; top: 200px;'
    div.appendChild(ul);
}


function h_up_inner(i) {
    h3_up.innerText = `正在注册第${i}` + '个' + '---' + 'name: ' + data[i - 1].first + ' - ' + data[i - 1].last;
}

function h_login_inner(i) {
    h3_login.innerText = `正在登录第${j}` + '个' + '---' + 'name: ' + data[j - 1].first + ' - ' + data[j - 1].last;
}

function div_create() {
    div.style = 'width: 100vw; height: 100vh;z-index=990; position: fixed; background-color: yellow;left: 0px; top: 0px;'
    app.appendChild(div)
}


function btn_login_create() {
    btn_login.style = 'width: 400px; height=30px; font-size: 25px; background-color: blue;color: white;z-index:9999;position: fixed; left: 500px; top: 100px;'
    btn_login.innerText = '登录下一个资料';
    btn_login.addEventListener('click', function (e) {
        openLoginPage(j);
        j++;
        h_login_inner(j);

    })
    div.appendChild(btn_login)
}