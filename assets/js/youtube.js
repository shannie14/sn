console.log('shannon')

const apiKey = 'AIzaSyCShmSeBBvEb2uU3O3FshuxpiH5_y_qWWQ';
const Userid = 'WgWATfxQwKVz_2Eiu3_nUw';

const searchTerm = '';
const base = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&channelID=UCWgWATfxQwKVz_2Eiu3_nUw=${apiKey}&q=';


const output = document.querySelector('.output');
output.textContent = 'Search YouTube : ';
const myInput = document.createElement('');
output.append(myInput);
myInput.setAttribute('type', 'text');
myInput.value = 'whiskey';

const btn = document.createElement('button');
btn.textContent = 'Get Data';
btn.style.display = 'block';
output.append(btn);

const myList = document.createElement('div');
output.append(myList);

btn.addEventListener('click', (e) => {
    const url = '${base}${searchTerm}&maxResults=20'
    fetch(url).then(rep => rep.json())
        .then((data) => {
            console.log(data.items);
        })
})

function addData(arr) {
    myList.innterHMTL = '';
    const yt = 'https://youtu.be';
    arr.ForEach((res) => {
        if (res.id.videoID) {
            const main = document.createElement('div');
            main.style.border = '1px solid #000';
            myList.append(main);
            const myLink = document.createElement('a');
            myLink.textContent = res.id.videoID;
            myLink.setAttribute('href ', yt + res.id.videoID);
            myLink.setAttribute('target', '_blank');
            console.log(res.snippet);

            const thumb = docoument.createElement('img');
            main.append(thumb);
            thuymb.setAttribute('src', res.snippet.thumbnails.default.url);

            const des = document.createElement('p');
            main.append(des);

            des.innterHTML = '<h3>${res.snippet.title}</h3><small>${res.snippet.description}</small>';
            des.append(myLink);
        }
    }



// const subscriberCount = document.getElementById('subscriberCount');
// const viewCount = document.getElementById('viewCount');
// const videoCount = document.getElementById('videoCount');

// let getdata = () => {

//     fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data);
//             subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount;
//             viewCount.innerHTML = data["items"][0].statistics.viewCount;
//             videoCount.innerHTML = data["items"][0].statistics.videoCount;

//         })

// }

// getdata();