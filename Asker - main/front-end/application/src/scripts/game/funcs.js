function submitAnswer(option){
    setTimeout(() => {
        if(option == correct){
            delegateClasslist('answer-correct', option, true)
            responseValue = true
        }
        else{
            //            delegateClasslist('answer-wrong', option)
            responseValue = false
            delegateClasslist('answer-wrong', option)
        }
    }, awaitSubmitAnswer)

    setTimeout(() => {
        response(responseValue)
    },3000)
}

function delegateClasslist(classlist, option, correctOption=false) {
    divButtons.forEach((element, index) => {
        if(dic[option] == index){
            element.classList.add(classlist)
        }
        if(!correctOption){
            if (dic[correct] == index) {
                element.classList.add('answer-correct')
            }
        }
    })
}

function removeClasslist(){
    divButtons.forEach(function(element){
            element.classList.remove('answer-wrong')
            element.classList.remove('answer-correct')
            element.classList.remove('eliminated')
        })
}

function reloadLetters(){
    counter = 0
    optionsLetters.forEach((element, index) => {
        if(index%2 == 0){
            strLetter = answers[counter].toUpperCase()
            element.innerText = strLetter
            setcolor(element, '#fff')
            counter++
        }
    })
}

function response(win){
    if(win){
        removeClasslist()
        userWin()
    }else{
        userLoose()
    }
}

function initGame(){
    level = localStorage.getItem('level-game')
    round = localStorage.getItem('round-game')
    category = localStorage.getItem('category-game')
    
    reloadLetters()
    formatPage()
}

function requestAsks(){
    limit = localStorage.getItem('level-limit')
    category = localStorage.getItem('category-game')

    getAsks(limit, category)
}

requestAsks()
setTimeout(() => {
    initGame()
}, 2000)