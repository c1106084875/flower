window.onload = function() {
    var mask = document.getElementById("mask");
    var smallBox = document.getElementById("smallBox")
    var box = document.getElementById("box")
    var bigBox = document.getElementById("Big_box")

    box.onmouseover = function() {
        mask.style.display = "block"
        bigBox.style.display = "block"
    }

    box.onmouseout = function() {
        mask.style.display = "none"
        bigBox.style.display = "none"
    }

    smallBox.onmousemove = function(e) {
        //				console.log(e.clientX)
        //				console.log(e.clientY)
        var maskX = e.clientX - box.offsetLeft - mask.offsetWidth / 2
        var maskY = e.clientY - box.offsetTop - mask.offsetHeight / 2
        if (maskX < 0) maskX = 0
        if (maskX > box.offsetWidth - mask.offsetWidth) maskX = box.offsetWidth - mask.offsetWidth
        if (maskY < 0) maskY = 0
        if (maskY > box.offsetHeight - mask.offsetHeight) maskY = box.offsetHeight - mask.offsetHeight
        mask.style.left = maskX + "px"
        mask.style.top = maskY + "px"
        var maskToMove = box.offsetWidth - mask.offsetWidth
        var bigImgToMove = bigImg.offsetWidth - bigBox.offsetWidth
        var rate = bigImgToMove / maskToMove
        bigImg.style.left = -maskX * rate + "px"
        bigImg.style.top = -maskY * rate + "px"
    }
}