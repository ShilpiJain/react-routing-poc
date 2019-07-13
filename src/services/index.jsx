import axios from 'axios';
const BaseApi = "https://jsonplaceholder.typicode.com";


const getApi = () => {
    axios.get(BaseApi+ "/post")
    .then(res =>{
        return console.log(res)
    }).catch(err =>{
        console.log("Error", err)
    })
}

export default getApi;