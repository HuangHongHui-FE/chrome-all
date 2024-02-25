// 亮起来
// chrome.runtime.sendMessage({todo: "showPageAction"});

// 页面中获取错误信息
function getGlobalData(){
    let dataMenuArr =  document.querySelector('.datamenu').children;

    let err_title_arr = [], err_proportion_arr = [], err_num_arr = [];
    for(let i = 0; i < dataMenuArr.length; i++){
        // title
        let err_title = dataMenuArr[i].children[2].innerText;
        // 比例
        let err_proportion = dataMenuArr[i].children[1].children[0].children[0].innerText;
        // num
        let err_num = dataMenuArr[i].children[1].children[1].innerText;

        err_title_arr.push(err_title)
        err_proportion_arr.push(err_proportion)
        err_num_arr.push(err_num)
    }

    globalData = {
        err_title_arr,
        err_proportion_arr,
        err_num_arr
    }
    return globalData
}


// 存储err, 多种err存储可能逻辑后面判断哈有问题！！!
function storageErr(){
    let globalData = getGlobalData();
    let oldGlobalData = window.localStorage.getItem('globalData');
    if(oldGlobalData){
        oldGlobalData = JSON.parse(oldGlobalData)
        globalData.err_title_arr = globalData.err_title_arr.concat(oldGlobalData.err_title_arr)
        globalData.err_proportion_arr = globalData.err_proportion_arr.concat(oldGlobalData.err_proportion_arr)
        globalData.err_num_arr = globalData.err_num_arr.concat(oldGlobalData.err_num_arr)
    }
    window.localStorage.setItem('globalData',JSON.stringify(globalData));
}


// 高亮err
function lineNewErr(){
    let globalData = JSON.parse(window.localStorage.getItem('globalData'));
    let globalDataNew = getGlobalData();

    console.log(globalData, globalDataNew)

    let err_title_arr = globalData.err_title_arr;
    let err_title_arr_new = globalDataNew.err_title_arr;

    // 新增的title列表
    let new_title_arr = []

    for(let i = 0; i < err_title_arr_new.length; i++){
        let index = err_title_arr.indexOf(err_title_arr_new[i]);
        // 筛选的逻辑存量增量，以及百分比的存量。
        if(index == -1){
            new_title_arr.push({index: i, new_title: err_title_arr[i]});

            // !!!!!!!!!!!!!后面要搞，存一个之前的err，存两个，存三个
        }
    }
    console.log('新增的错误：', new_title_arr)

    if(new_title_arr){
        let dataMenuArr =  document.querySelector('.datamenu').children;
        new_title_arr.forEach(e => {
            dataMenuArr[e.index].style.background = "#00FFFF";
        })
    }
}


// 进入页面，清除已经存储的globalData
window.localStorage.removeItem('globalData');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "storageErr"){
        storageErr()
    }else if(request.todo == 'lineNewErr'){
        lineNewErr()
    }
});


