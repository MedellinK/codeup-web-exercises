

//cannot use "this" keyword with arrow function //
// jQuery("h3").click((event)=>{
//     $(event.target).next().slideToggle(500);
// });

// we cand and ususally do use "$ as shorthand for calling the jquery function//
// jQuery("h3").click(function (){
//     $(this).next().slideToggle(500);
// });


// this is how you teel the js to not execute till the page has loaded in case you put the links at the top oe sowmthing
// function init(){
//     jQuery("h3").click(function (){
//         $(this).next().slideToggle(500);
//     });
// }
//
// window.onload = init;

$(document).ready(function (){
    jQuery("h3").click(function (){
        $(this).next().slideToggle(500);
    });
})

// window.onload = alert("IM LOADED")

// $("#library").text("JQUERY is a JAVACRIPT Library")

const $LibraryReference = $("#library")
let libraryText = $LibraryReference.text();
console.log(libraryText)
$LibraryReference.text(`${libraryText} is library`)
console.log(libraryText)


// some easy css thingy to change more than 1 css property//
$(".framework").css("border", "1px solid black" );

$(".framework").css({
    "border": "1px solid black",
    "width": "fit-content",
    'padding': '4px',
    'border-radius': "5px",
    "margin-bottom": "3px",
})

$("p,li").text("jQuery takes over").css("color","hotpink");