(function(){
    var imageElement = document.createElement("img")
    var currentWidth = 1;
    imageElement.src = "https://media4.giphy.com/media/5be8JLZXiYQ4ubA90Q/giphy.gif?cid=790b7611e9610dc9fab969cea56687e9c045d92a5430e097&rid=giphy.gif&ct=s"
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
        if (currentWidth < 70) {

            const websiteUrl = window.location.href;
            console.log('Current website', websiteUrl)


            if(websiteUrl.includes('facebook')) {
                currentWidth = -currentWidth;
            } else {
                currentWidth *= 1.1;
            }

            chrome.runtime.sendMessage(currentWidth
                , function (response) {
            currentWidth = response;
            imageElement.style.transform = "scale("+ currentWidth + ")"})
        }
    })

    document.addEventListener("visibilitychange", function() {
        if (document.hidden){
            console.log("Browser tab is hidden")
        } else {
            console.log('Current width', currentWidth)
                chrome.runtime.sendMessage(currentWidth
                    , function (response) {
                currentWidth = response;
                imageElement.style.transform = "scale("+ currentWidth + ")"})
        }
    });

    // grows instantly after one click on canvas 
    if (window.location.href.indexOf("auckland.ac.nz") != -1) {
        imageElement.src = "https://media1.giphy.com/media/HVL15iRon8yh17iwfV/giphy.gif?cid=790b761129f13c240b46038a13120cbe7cc067b51f2fecc8&rid=giphy.gif&ct=s"
        imageElement.style.transition =  "transform 500ms"
        currentWidth *= 20;
        imageElement.style.transform = "scale("+ currentWidth + ")"
    }

    // play quack sound on click
    var audio = new Audio("https://wavlist.com/wav/duck-quack3.wav");
    document.onclick = function() {
        audio.play();
    }

})();

// to do
/*find out how to get it running without having to open the extension pop up

add condition for running it differently depending on the website */

