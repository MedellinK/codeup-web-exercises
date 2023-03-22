$(".box").on("click",function (){
    // hide boxes in other container
   $(this).parents(".container").siblings(".container").find(".box").fadeOut();
});
