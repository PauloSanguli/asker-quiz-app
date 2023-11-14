document.getElementById('btn-help-eliminate-wrong').addEventListener('click', () => {
    if(helpsLevels[0]){
        helpsLevels[0] = false
        setOpacity(document.getElementById('btn-help-eliminate-wrong'), '0.4')
        count = 0
        divButtons.forEach((element, index) => {
            if(answers[index] != correct && count != 2){
                count ++;
                element.classList.add('eliminated')
            }
        })
    }
})

document.getElementById('btn-help-sugest-friend').addEventListener('click', () => {
    if(helpsLevels[1]){
        mapLetters()
        helpsLevels[1] = false
        setOpacity(document.getElementById('btn-help-sugest-friend'), '0.4')
    }
})

document.getElementById('btn-help-jump-round').addEventListener('click', () => {
    if(helpsLevels[2]){
        removeClasslist()
        userWin()
        helpsLevels[2] = false
        setOpacity(document.getElementById('btn-help-jump-round'), '0.4')
    }
})

function mapLetters(){
    counter = 0
    counterVariants = 0
    const variantCorrect = 43
    const variantsWrong = [15,25,17]

    optionsLetters.forEach((element, index) => {
        if (index%2 == 0) {
            if(answers[counter] != correct){
                element.innerText = `${variantsWrong[counterVariants]}%`
                setcolor(element, '#123456')
                counterVariants++
            }else{
                element.innerText = `${variantCorrect}%`
                setcolor(element, 'yellow')
            }
            counter++
        }
    })
}
