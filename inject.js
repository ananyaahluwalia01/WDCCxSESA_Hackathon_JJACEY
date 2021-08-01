(function(){
    var imageElement = document.createElement("img")
    imageElement.src = "https://media1.giphy.com/media/5be8JLZXiYQ4ubA90Q/giphy.gif?cid=790b7611b5b09296d95b8ce9c12bb796e565f4ee1dd9e463&rid=giphy.gif&ct=s"
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

    alert('You are about to be ducked!');

    //animation for size increase

    var count = 0;
    var j =0;
    var currentWidth = 1;

    imageElement.style.transition =  "transform 500ms"
    document.body.addEventListener('click', e =>{
        currentWidth *= 1.5;
        imageElement.style.transform = "scale("+ currentWidth + ")"

    })
})();

// to do
/*find out how to get it running without having to open the extension pop up

add condition for running it differently depending on the website */

