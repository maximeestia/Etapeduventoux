ScrollOut({
    cssProps: true,
    threshold: 0.2
});


//

$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

$("#menu-icon").on("click", function() {
    $("nav").slideToggle();
    $(this).toggleClass("active");
});




// jQuery code
// Prevent closing from click inside dropdown
$(document).on('click', '.dropdown-menu', function(e) {
    e.stopPropagation();
});
