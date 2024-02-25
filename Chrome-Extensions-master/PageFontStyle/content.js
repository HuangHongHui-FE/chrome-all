chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = '#' + request.clickedColor;               
        $('.gap-top-300').css('font-style','italic');
         $('.gap-top-300').css('color', addColor);
    }
});