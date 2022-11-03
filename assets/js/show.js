// We are going to use axios in order to make an HTTP request to our server in order to get the spirits data that is located in our mongodb database in order to insert that data into our HTML page

const params = new URLSearchParams(window.location.search);
const id = params.get('id')

axios.get('/getById?id=' + id)
    .then(res => {
        console.log(res)
        const firstGolf = res.data;
        console.log('golf info', firstGolf)
        document.getElementById('title').innerText = firstGolf.title
        document.getElementById('clip').innerText = firstGolf.clip
        document.getElementById('tags').innerText = firstGolf.tags
        document.getElementById('description').innerText = firstGolf.description
        document.getElementById('video').innerText = firstGolf.video

    })
let = video

