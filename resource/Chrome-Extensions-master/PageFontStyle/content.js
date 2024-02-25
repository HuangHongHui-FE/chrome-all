console.log('已进入匹配的页面就执行')
chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log('request---', request)
    if (request.todo == "changeColor"){
        var addColor = '#' + request.clickedColor;               
        $('.gap-top-300').css('font-style','italic');
         $('.gap-top-300').css('color', addColor);
    }
});