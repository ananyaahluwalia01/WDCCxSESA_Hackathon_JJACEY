var imageWidth = 1;
var previousImageWidth = 1;
const websiteUrl = window.location.href;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    // Init tab: imageWidth = 1
    // Other tab with different size: imageWidth > response
    // Same tab

    if(previousImageWidth < 0) {
        // Change tab from facebook to other
        previousImageWidth = imageWidth;
        sendResponse(imageWidth);
    } else {
        previousImageWidth = request;
        if(request < 0) {
            imageWidth = Math.abs(request)/1.5;
            console.log('Reduce size', imageWidth)
            sendResponse(imageWidth);    
        } else {
            imageWidth = Math.max(Math.abs(request), imageWidth)
            sendResponse(imageWidth);
        }

    }
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

