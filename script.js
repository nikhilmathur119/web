function reveal() 
{
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) 
    {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
    
        if (elementTop < windowHeight - elementVisible) 
        {
            reveals[i].classList.add("active");
        } 
        else
        {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);



$(document).ready(function() {
  $('.btn_nav').click(function(e) {
    e.preventDefault(); // Prevent default link behavior
    
    var nextPage = $(this).attr('href'); // Get the href attribute of the clicked link
    
    // animate content
    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(1600).fadeIn();

    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 1900);

    setTimeout(function() {
      // Load the next page using AJAX
      window.location.href = nextPage; // Redirect to the next page
    }, 1900);
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1800);
    
  });
});


