// $("#btn").click(()=>{
    
//     // $.get("https://jsonplaceholder.typicode.com/posts/1", (r)=>{
//     //     console.log(r.title);
//     // })

//     $.post("https://jsonplaceholder.typicode.com/posts", {
//       title: "test",
//       body: "contents",
//       userId : 2
//     },(res)=>{
//         console.log(res);
//     })
// })

$.ajax({
    type: "PUT",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    data: {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    },
    success:(res)=> {
        console.log("성공")
        console.log(res);
    },
    error : (res) => {
        console.log("실패")
        console.log(res);
    }
})