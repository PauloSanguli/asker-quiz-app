btnSubmit.addEventListener("click", () => {
    username = input_name.value
    age = input_age.value
    registUser(username, age)
    
    setlenght(
        element = layer_black,
        width = 0,
        height = 100,
        unit = '%'
    )
})

link_home.addEventListener("click", () => {
    setright(
        element = page_ranking,
        right = -100
    )
    setright(
        element = page_about,
        right = -100
    )
})

link_about.addEventListener("click", () => {
    setright(
        element = page_ranking,
        right = -100
    )
    setright(
        element = page_about,
        right = 0
    )
})

link_ranking.addEventListener("click", () => {
    getRanking()
    setright(
        element = page_about,
        right = -100
    )
    setright(
        element = page_ranking,
        right = 0
    )
})
