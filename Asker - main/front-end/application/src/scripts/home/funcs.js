
function InitGame(Icategory){
    category = Icategory
    button = document.getElementById(category)
    settransformscale(
        element = button,
        transform = 104
    )
    setbackground(
        element = button,
        color = 'transparent'
    )
    redirectPage()
}

function redirectPage(){
    console.log(username, age)
    localStorage.setItem('category-game', category.toLowerCase())
    localStorage.setItem('level-game', 1)
    localStorage.setItem('round-game', 0)
    localStorage.setItem('level-limit', limits[`${category.toLowerCase()}`])
    localStorage.setItem('username', username)
    localStorage.setItem('age', age)
    
    window.location.href = `http://localhost:5500/Asker - main/front-end/application/src/views/game.html`
}

function updateRanking(ranking){
    for(let pos = 0; pos < ranking.length; pos++) {
        nameEntityes[pos].innerHTML = ranking[pos].name
        scoreEntityes[pos].innerHTML = ranking[pos].score
    }
}
