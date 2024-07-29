

let data = '[{"age":10, "name":"jang"},{"age":20, "name":"jang"},{"age":30, "name":"jang"}]';
console.log(data);
// Jion 형태로 바꾸기
let d = JSON.parse(data);
console.log(d);
console.log(d[1].age);


const num = document.getElementById("num");
const btn = document.getElementById("btn");
const list = document.getElementById('list');

const container = document.getElementById("container");

let key = "?key=b9a05b50a0632e44b820f5a2442e8fa9";
let row = "&itemPerPage=20";
let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"+key+row+"&targetDt=20240725";

fetch(url, {
    method : "GET"
    
})
.then(res => res.json())
.then(res => {

    for(let i=0; i<10; i++) {

        let div = document.createElement('div');
        div.id = 'movie';
        

        let list = res.boxOfficeResult.dailyBoxOfficeList[i];
        console.log(list);

        let movieNm = document.createElement('p');
        movieNm.innerHTML = list.movieNm;

        let imgTag = document.createElement('img');
        imgTag.src= "/img/poster"+[i]+".jpeg";
        
        movieNm.appendChild(imgTag);
        div.appendChild(movieNm);
        container.appendChild(div);

    }
        
    } 
);

// let movieListUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json"+key+row;

// fetch(movieListUrl, {
//     method : "GET"
    
// })
// .then(res => res.json())
// .then(res => {

//     for(let i=0; i<10; i++) {

//         let div = document.createElement('div');
//         div.id = 'movie';

//         let list = res.movieListResult.movieList[i];
//         console.log(list);

//         let movieNm = document.createElement('p');

//         movieNm.innerHTML = list.movieNm;

//         div.appendChild(movieNm);
//         container.appendChild(div);

//     }
        
//     } 
// );




list.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "GET"
        
    })
    .then(res=>res.json())
    .then(res=>{
    
        for(let d of res){
            console.log(d.id)
            console.log(d.title)
        }
    })
})


btn.addEventListener("click", ()=>{
    let n = num.value;
    console.log(n);

    fetch("https://jsonplaceholder.typicode.com/posts/"+n,{
        method : "GET"
        
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res.id)
        console.log(res.title)        

    })
})