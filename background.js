var isExtensionOn = true;
const redirectTo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

/*Sets the cursor depending on the selected theme.*/
function runScript(pickTheme) {

// The cursors picked
    var selectedSet = pickTheme;

//Number of cursors in set
    var cursorCount = pickTheme.length;

//Index of current displayed cursor
    var currCursor = 0;

//The url of the selected cursor
    var cursorURL = selectedSet[currCursor];

//Determines whether user is clicking and dragging
//var dragging = false;

//Cursor initally set to first cursor
    document.body.style.cursor = "url('" + cursorURL + "'), auto";

    //set count for the number of clicks
    var count = 0;
    /*Switches to a new cursor from the set every time the user clicks or drags mouse*/
    document.addEventListener("click", () => {
        count += 1;

        if (count == 10) {
            increaseCursorSize();
        }
    });
//document.addEventListener("mousedown", () => {
    //dragging = true;
    //if (dragging) {randCursor();}});
//document.addEventListener("mousemove", () => {
    //if (dragging) {randCursor();}});
    //document.addEventListener("mouseup", () => {dragging = false});


    /*Sets cursor to a random cursor from the set*/
    var increaseCursorSize = ()=> {
        // get cursor image
        var img = document.getElementById("duck");
        var imgWidth = img.style.width * 1.5;

        img.clientWidth = imgWidth;

        //setCursor(cursorURL);
    }


    /*Sets the styling of the cursor to the given URL*/
    var setCursor = (url) => {
        document.body.style.cursor = "url('duck.png') 0 0, auto";}
}


/*Retrieves the selected cursor theme from the popup input*/
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        switch (request) {
            case 'pol':
                var pickTheme = politics;
                runScript(pickTheme);
                break;
            case 'flags':
                var pickTheme = flags;
                runScript(pickTheme);
                break;
            case 'dogs':
                var pickTheme = dogs;
                runScript(pickTheme);
                break;
            case 'cats':
                var pickTheme = cats;
                runScript(pickTheme);
                break;
            case 'hb':
                var pickTheme = hb;
                runScript(pickTheme);
                break;
        };

        console.log(request);
        var theme = request;
        console.log(theme);


        // sendResponse({farewell: "goodbye"});
    });