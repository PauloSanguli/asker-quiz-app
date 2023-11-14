function setlenght(element, width, height, unit = 'px'){
    element.style.width = `${width}${unit}`
    element.style.height = `${height}${unit}`
}

function setheight(element, height, unit){
    element.style.height = `${height}${unit}`
}

function setwidth(element, width, unit){
    element.style.width = `${width}${unit}`
}

function setright(element, right, unit = '%'){
    element.style.right = `${right}${unit}`
}

function setleft(element, left, unit = '%'){
    element.style.left = `${left}${unit}`
}

function settop(element, top, unit = '%'){
    element.style.top = `${top}${unit}`
}

function setbottom(element, bottom, unit = '%'){
    element.style.bottom = `${bottom}${unit}`
}

function setdisplay(element, display){
    element.style.display = `${display}`
}

function setOpacity(element, opacity){
    element.style.opacity = `${opacity}`
}

function settransformtranslateX(element, transform, unit = '%'){
    element.style.transform = `translateX(${transform}${unit})`
}

function settransformtranslateY(element, transform, unit = '%'){
    element.style.transform = `translateY(${transform}${unit})`
}
function settransformscale(element, transform, unit = '%'){
    element.style.transform = `scale(${transform}${unit})`
}
function setbackground(element, color){
    element.style.background = color
}
function setcolor(element, color){
    element.style.color = color
}