$("#clickMe").dblclick(() => alert("IT WOULD BE NICE"));

$('.box').css({
    'height': '100px',
    "background-color": "gray",
    "width": '50vw',
    "border": '2px solid black',
    "margin-top": "20px"
})

$(".box").hover(
    function (){
            $(this).css('background-color','green');
},
    function (){
        $(this).css('background-color', "gray")
    })