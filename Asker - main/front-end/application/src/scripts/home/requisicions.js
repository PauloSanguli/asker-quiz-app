function getRanking(){
    fetch (`http://localhost:2323/user/get_ranking/`,{
        "method": "get",
        "content-type": "aplication/json"
    })
    .then(resp => resp.json())
    .then((resp) => {
        if(resp.response){
            ranking = resp.datas
            updateRanking(ranking)
        }
    })
    .catch((error) => {
        console.error(error)
    })
}

function registUser(username, age){
    fetch (`http://localhost:2323//user/registration/${username}/${age}/`,{
        "method": "get",
        "content-type": "aplication/json"
    })
    .then(resp => resp.json())
    .then((resp) => {
        return resp.response
    })
    .catch((error) => {
        console.error(error)
    })
}