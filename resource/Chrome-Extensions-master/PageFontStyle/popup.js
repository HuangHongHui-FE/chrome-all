$(function(){
    color = $('#fontColor').val();
    $("#fontColor").on("change paste keyup", function() {
        color = $(this).val(); 
    });
    
   $('#btnChange').click(function(){      
         chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            console.log(tabs)
            // 传递动作到content.js
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color });
        });
   });
});

