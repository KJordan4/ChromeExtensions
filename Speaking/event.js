var menuItem = {
    "id": "Read Out Loud",
    "title": "Read Out Loud",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Read Out Loud" && clickData.selectionText){        
       chrome.tts.speak(clickData.selectionText,{
                            'rate': 0.5
       });         
    }
});
