// // window.onload = alert("IM LOADED")
// const $mainHeader = $('#main-header')
// alert($mainHeader.text())
//
// const $lorem = $('#lorem-p')
// alert($lorem.text())
//
// $('li').css({
//     'font-size': '20px',
// })

// $('h1,p,li').css({
//     'background-color': 'yellow'
// })
//
//     $('.clock').cass({
//     'background-color': 'red'
// })

$("#main-header").css("cursor","pointer")
$("#main-header").click(function (){
    $(this).css({
        'background-color': "red",
        "cursor":"pointer"
    })
})

$("p").css({
    "cursor": "pointer"
})
$("p").dblclick(function (){
    $(this).css({
        "font-size": "18px",
    })
})

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);
