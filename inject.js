(function(){
    var imageElement = document.createElement("img")
    imageElement.src = "https://c.tenor.com/4otr5S3l1agAAAAj/dancing-duckdancing.gif"
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

    // track position of mouse even when it doesn't move
    // give recoil effect
    document.body.addEventListener('click', e =>{
        ducky.style.top = mouseY(e) - imageElement.height/2 + "px"
        ducky.style.left = mouseX(e) - imageElement.width/2 + "px"
    })

    // tracking mouse movement constantly
    document.body.addEventListener('mousemove', e => {
        ducky.style.top = mouseY(e) - imageElement.height/2 + "px"
        ducky.style.left = mouseX(e) - imageElement.width/2 + "px"
    })

    alert('You are about to be ducked!');

    //animation for size increase

    var count = 0;
    var j =0;
    document.body.addEventListener('click', e =>{
        count+=1
        if (count == 5 && imageElement.width < 500) {
            var animation = setInterval(function(){
                j += 1;
                if (j === 10) {
                    clearInterval(animation);
                    j = 0;

                }
                imageElement.width = imageElement.width * 1.1;

                }, 10);
            count = 0;
        }

    })
})();

// to do
/*find out how to get it running without having to open the extension pop up

add condition for running it differently depending on the website */

