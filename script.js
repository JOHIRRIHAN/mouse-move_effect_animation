// var cursor = document.querySelector("#main")
// var crcs = document.querySelector(".cursor")

// cursor.addEventListener("mousemove",function(dets){
//     crcs.style.left =  dets.x+"px"
//     crcs.style.top =  dets.y+"px"
// })


var main = document.querySelector("#main")
var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})