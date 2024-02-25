
let inputPageidDom = document.querySelector('#input_pageid');
let openPageBtnDom = document.querySelector('#open_btn');
let getErrBtnDom = document.querySelector('#getErr')
let newErrBtnDom = document.querySelector('#newErr')

// pageid输入事件
inputPageidDom.addEventListener('input', inputChange)
// 打开页面
openPageBtnDom.addEventListener('click', openPage)
// 收集err
getErrBtnDom.addEventListener('click', storageErr)
// 高亮err
newErrBtnDom.addEventListener('click', lineNewErr)


let globalData = {

}

function inputChange() {
    globalData.inputValue = inputPageidDom.value;
}

// 要打开的页面的url
function pageSrc() {
    let pageSrcArr = []
    let now = new Date().getTime(),
        hours = new Date().getHours(),
        minutes = new Date().getMinutes(),
        seconds = new Date().getSeconds(),
        now_zero = now - 1000 * 60 * 60 * hours - 1000 * 60 * minutes - 1000 * seconds,  // now的0:0:0
        now_before = now - 1000 * 60 * 30;  // 三十分钟前
    let lastDay = now_zero,
        lastDay_before = now_zero - 1000 * 60 * 60 * 24;
    let lastWeek = now_zero,
        lastWeek_before = now_zero - 1000 * 60 * 60 * 24 * 7;
    let lastMonth = now_zero,
        lastMonth_before = now_zero - 1000 * 60 * 60 * 24 * 30;

    // CDataPortal
    // 三十分钟前到现在
    pageSrcArr[0] = `https://cdataportal.ctripcorp.com/cdata/error/metricReport/4?end=${now}&env=prd&filters=%7B%22pid%22%3A%5B%22${globalData.inputValue}%22%5D%7D&groupBy=%5B%5D&interval=1d&metric=jserror&realtime=false&ringRatio=false&start=${now_before}&xAxisBy=%5B%22time%22%5D`
    // 昨天的
    pageSrcArr[1] = `https://cdataportal.ctripcorp.com/cdata/error/metricReport/4?end=${lastDay}&env=prd&filters=%7B%22pid%22%3A%5B%22${globalData.inputValue}%22%5D%7D&groupBy=%5B%5D&interval=1d&metric=jserror&realtime=false&ringRatio=false&start=${lastDay_before}&xAxisBy=%5B%22time%22%5D`
    // 上周的
    pageSrcArr[2] = `https://cdataportal.ctripcorp.com/cdata/error/metricReport/4?end=${lastWeek}&env=prd&filters=%7B%22pid%22%3A%5B%22${globalData.inputValue}%22%5D%7D&groupBy=%5B%5D&interval=1d&metric=jserror&realtime=false&ringRatio=false&start=${lastWeek_before}&xAxisBy=%5B%22time%22%5D`
    // 一个月的， 前一个月到今天0点
    pageSrcArr[3] = `https://cdataportal.ctripcorp.com/cdata/error/metricReport/4?end=${lastMonth}&env=prd&filters=%7B%22pid%22%3A%5B%22${globalData.inputValue}%22%5D%7D&groupBy=%5B%5D&interval=1d&metric=jserror&realtime=false&ringRatio=false&start=${lastMonth_before}&xAxisBy=%5B%22time%22%5D`
    return pageSrcArr
}

function openPage() {
    let pageSrcArr = pageSrc();
    // eventPage中用这个
    chrome.runtime.sendMessage({ todo: 'openPage', pageSrcArr }, function (res) {
        console.log('res---', res)
    })
}

// 错误存起来
function storageErr() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "storageErr" });
    });
}

// 高亮err
function lineNewErr() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "lineNewErr" });
    });
    var notifOptions = {
        type: "basic",
        iconUrl: "./img/icon48.png",
        title: "success",
        message: "高亮的"
    };

    // chrome.notifications.create('resetNotif', notifOptions);
}



