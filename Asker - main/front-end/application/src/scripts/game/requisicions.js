async function getAsks(level, category){
    fetch (`http://localhost:2323/app/get_asks/${category}/${level}`,{
        "method": "get",
        "content-type": "aplication/json"
    })
    .then(resp => resp.json())
    .then((resp) => {
        if(resp.response){
            setResponse(resp.datas, category)
        }
    })
    .catch((error) => {
        console.error(error)
    })
}

async function setScore(username, score){
    fetch(`http://localhost:2323/user/update_score/${username}/${score}`, {
        "method": "get",
        "content-type": "aplication/json"
    })
    .then(resp => resp.json())
    .then((resp) => {
        if(resp.response){
            console.log("Score seted")
        }
    })
    .catch((error) => {
        console.error(error)
    })
}