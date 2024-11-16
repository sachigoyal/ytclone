import axios from 'axios'

const KEY = "AIzaSyAVJtfqZIitPE4_ZEDU_V-6P6vAl0Pq3fo"

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 12 ,
        key : KEY
    },
    headers : {}
})