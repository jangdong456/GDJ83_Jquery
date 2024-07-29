// const info = document.getElementById("info");
// const btn = document.getElementById("btn");
// const result = document.getElementById("result");


// btn.addEventListener("click", ()=>{
//     let i = info.value;
//     result.innerHTML = i;
// })

$('#btn').click(()=>{
    let i = $('#info').val();
    $('#result').html(i);
    $('#')
})

$('#info').on({               // 하나의 선택자로 여러개를 사용할 때
    focus : function(){
        console.log("focus");
    },
    blur : () =>{
        console.log("blur");
    }
}) 

// const ch = document.getElementsByClassName("ch");
// for(let c of ch){
//     c.addEventListener("click", ()=>{
//         alert(c.value);
//     })
// }


$('.ch').click(function(){
    let flag = true;
    $('.ch').each((idx,item)=>{
        if(!$(item).prop("checked")){ // prop() : 속성의 값이 동적으로 바뀌는것 | attr() : 속성 값이 고정인거
            flag = false;
            $('#all').prop("checked", flag);
            return flag;
        } 
        
    });
    $('#all').prop("checked", flag);
});

// 화살표 함수를 사용하면 -> this가 윈도우로 잡힘 | 이유: 화살표 함수엔 this가 없기 때문이다. | 화살표함수를 사용하고 싶다면 이벤트(e) e.target을 사용해야한다. 
// $('.ch').click((e)=>{
//     alert(this); // window
//     console.log(e.target); //element 잡힘
// })