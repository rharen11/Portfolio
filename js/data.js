
const navBtns = document.querySelector('.nav-bar')

navBtns.addEventListener("mouseover", function(evt){
    evt.target.style.color = "yellow"

    setTimeout(function(){
        evt.target.style.color = ""
    }, 1000)
}, false)
