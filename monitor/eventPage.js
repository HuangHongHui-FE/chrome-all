chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            console.log('downloadPic---')

    switch (request.todo){
        case 'openPage':
            request.pageSrcArr.forEach(e => {
                chrome.tabs.create({url: e});
            })
        // case 'showPageAction':
        //     chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        //         chrome.pageAction.show(tabs[0].id);
        //     });
        default:
            return;
    }
});
