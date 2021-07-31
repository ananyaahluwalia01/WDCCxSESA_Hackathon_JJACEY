(function(){
    var imageElement = document.createElement("img")
    imageElement.src = "https://scontent-akl1-1.xx.fbcdn.net/v/t1.15752-9/218004207_367284434806857_5417100422287534545_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=z5kK2LKw7EIAX9HHr00&_nc_ht=scontent-akl1-1.xx&oh=5e047a10485cc3e1b26acce004469be8&oe=612ACF78"
    imageElement.id = "duckycursor"
    imageElement.width = 25
    imageElement.style.position = "fixed"
    imageElement.style.pointerEvents = "none"

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

    var count = 0;
    document.body.addEventListener('click', e =>{
        count+=1
        if (count == 5){
            imageElement.width = imageElement.width * 1.5
            count = 0
        }

    })
})();


