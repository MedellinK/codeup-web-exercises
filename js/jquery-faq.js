let $answers = $("#answers")

$answers.on('click', function() {
    $("dd").toggleClass("invisible");
})


$("dt").on('click', function() {
    $(this).toggleClass("highlight")
})

// $("dt").on("click",function (){
//     $(this).next().fadeToggle();
// });

// $paragraphs.on('click', function(){
// // $(this).toggleClass('highlight');

let $listthingy = $("#list-thingy")

// $listthingy.on("click",function (){
//     $("ul").last().css("background-color","yellow")
// })

$('.listButton').on('click', function(){
    $('ul li:nth-child(4)').css('background-color', 'yellow')
});