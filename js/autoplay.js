window.onload = function() {
    var pics = document.getElementsByClassName("pic")
    var dots = document.getElementsByClassName("dot")
    var banner = document.getElementById("banner")
        // current image
    var nowImg = 0
    var timer = 0

    function autoPlay() {
        timer = setInterval(function() {
            nowImg++
            if (nowImg >= 4) {
                nowImg = 0
            }
            for (var i = 0; i < pics.length; i++) {
                pics[i].style.display = "none"
            }
            pics[nowImg].style.display = "block"
            for (var i = 0; i < dots.length; i++) {
                dots[i].style.backgroundColor = "#666"
            }
            dots[nowImg].style.backgroundColor = "#ff7f24"
        }, 3000)
    }
    /**
     * // 鼠标移出时,开始定时器
	counter.onmouseleave = start;
	// 鼠标移入时,关闭定时器
	counter.onmouseenter = stop;
     */
    banner.onmouseenter = function() {
        clearInterval(timer)
        banner.style.cursor = 'pointer'
    }
    banner.onmouseleave = function() {
        autoPlay()
    }


}


// left button
// var leftBtn = document.getElementById("left")
// leftBtn.onclick = function() {
//         nowImg--
//         if (nowImg < 0) {
//             nowImg = 4
//         }
//         changePic()
//         changeDot()
//     }
// right button
// var rightBtn = document.getElementById("right")
// rightBtn.onclick = function() {
//     nowImg++
//     if (nowImg > 4) {
//         nowImg = 0
//     }
//     changePic()
//     changeDot()
// }

// click dot
// for (var i = 0; i < dots.length; i++) {
//     dots[i].index = i
//     dots[i].onclick = function() {
//         nowImg = this.index
//         changePic()
//         changeDot()
//     }
// }

// change pic
// function changePic() {
//     for (var i = 0; i < pics.length; i++) {
//         pics[i].style.display = "none"
//     }
//     pics[nowImg].style.display = "block"
// }

// change dot
// function changeDot() {
//     for (var i = 0; i < pics.length; i++) {
//         dots[i].style.backgroundColor = "#ccc"
//     }
//     dots[nowImg].style.backgroundColor = "#fff"
// }