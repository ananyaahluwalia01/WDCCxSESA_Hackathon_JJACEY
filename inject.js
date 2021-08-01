(function(){
    var imageElement = document.createElement("img")
    var currentWidth = 1;
    imageElement.src = "https://scontent-akl1-1.xx.fbcdn.net/v/t1.15752-9/218004207_367284434806857_5417100422287534545_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=z5kK2LKw7EIAX9HHr00&_nc_ht=scontent-akl1-1.xx&oh=5e047a10485cc3e1b26acce004469be8&oe=612ACF78"
    imageElement.id = "duckycursor"
    imageElement.width = 25
    imageElement.style.position = "fixed"
    imageElement.style.pointerEvents = "none"
    imageElement.style.zIndex = "9999"

    document.body.append(imageElement)

    document.body.style.cursor = "none"


    var mouseX = (event) =>
    {
        return event.clientX
    }
    var mouseY = (event) =>
    {
        return event.clientY
    }

    var ducky = document.getElementById("duckycursor")

    document.body.addEventListener('mousemove', e => {
        ducky.style.top = mouseY(e) - imageElement.height/2 + "px"
        ducky.style.left = mouseX(e) - imageElement.width/2 + "px"
    })

    //alert('You are about to be ducked!');
    // Init size
    chrome.runtime.sendMessage(currentWidth
        , function (response) {
    currentWidth = response;
    imageElement.style.transform = "scale("+ currentWidth + ")"})

    //animation for size increase

    imageElement.style.transition =  "transform 500ms";
    // For every click
    document.body.addEventListener('click', e =>{
        currentWidth *= 1.5;
        chrome.runtime.sendMessage(currentWidth
            , function (response) {
        currentWidth = response;
        imageElement.style.transform = "scale("+ currentWidth + ")"})

    })

    // grows instantly after one click on canvas 
    if (window.location.href.indexOf("auckland.ac.nz") != -1) {
        imageElement.style.transition =  "transform 500ms"
        currentWidth *= 20;
        imageElement.style.transform = "scale("+ currentWidth + ")"
    }

})();

// to do
/*find out how to get it running without having to open the extension pop up

add condition for running it differently depending on the website */

