function formatPage(){
    label_level.innerText = Number(level)
    label_round.innerText = Number(round)
    categoryRound.innerHTML = category

    label_ask.innerText = asksCategorys[`${category}`][level-1][round].statement
    label_a.innerText = asksCategorys[`${category}`][level-1][round].A
    label_b.innerText = asksCategorys[`${category}`][level-1][round].B   
    label_c.innerText = asksCategorys[`${category}`][level-1][round].C
    label_d.innerText = asksCategorys[`${category}`][level-1][round].D
    correct = asksCategorys[`${category}`][level-1][round].correct
}

function userWin(){
    if(round == endRounds){
        round = 0;
        if(level != limits[category]){
            level++;
            updateStorage()
            redirectUserNextLevel()
        }else{
            updateRanking()
            level = 1
            settop(winnLevels, "0", "%")
            updateStorage()
            setTimeout(() => {
                settop(winnLevels, "-100", "%")
                redirectUserHome()
            }, 7000)
        }
    }else{
        round++
        updateStorage()
        redirectUserNextRound()
    }
}

function updateStorage(){
    localStorage.setItem('level-game', level)
    localStorage.setItem('round-game', round)
}

function userLoose(){
    updateRanking()
    level = 1
    round = 0

    settop(looser, "0", "%")
    updateStorage()
    setTimeout(() => {
        settop(looser, "-100", "%")
        redirectUserHome()
    }, 5000)
}

function redirectUserHome(){
    window.location.href = `http://localhost:5500/Asker - main/front-end/application/src/views/home.html`
}

function redirectUserNextRound(){
    settop(winnRound, "0", "%")
    setTimeout(() => {
        settop(winnRound, "-100", "%")
    }, 3000)
    initGame()
}

function redirectUserNextLevel(){
    settop(winnLevel, "0", "%")
    setTimeout(() => {
        settop(winnLevel, "-100", "%")
    }, 3000)
    initGame()
}

function setResponse(obj, category){
    asksCategorys[`${category}`] = obj
}

function updateRanking(){
    username = localStorage.getItem('username')
    level = localStorage.getItem('level-game')
    round = localStorage.getItem('round-game')

    setScore(username, `Level ${level} round ${round}`)
}