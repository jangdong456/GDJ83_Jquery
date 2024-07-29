
$("#btn").click(()=> {
    let b = '<button class="ch">add</button>';
    $('#result').append(b);
});

$('#result').on("click", ".ch",()=> { // ."ch" -> 이벤트 위임
    alert('add');
})