
var divOn = function (divOn, divOff, p) {
    setTimeout(() => {
        window.location.href = 'http://localhost:5500/Asker - main/front-end/application/src/views/home.html'
    }, 5000)
}

var setlenght = function(element, width, height, unit = 'px'){
    element.style.width = `${width}${unit}`
    element.style.height = `${height}${unit}`
}

var setfontsize = function(p){
    p.style.fontSize = p
}

var setflexbox = function(element, value){
    element.style.display = `${value}`
}

var setopacity = function(element, value){
    element.style.opacity = value
}

divOn(divPlayBtn, divContainerGif, paragraph)