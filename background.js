var imageWidth = 1;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    imageWidth = Math.max(request, imageWidth);
    console.log(imageWidth);
    sendResponse(imageWidth);
})

//chrome.browserAction.onClicked
chrome.browserAction.onClicked.addListener(function (tab) {
    // for the current tab, inject the "inject.js" file & execute it
    chrome.tabs.executeScript(tab.ib,
        {
            file: 'inject.js'
        }
    );
}
);

