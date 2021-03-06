function fastpathJs() {
  $(document).ready(function(){
    //reset checkboxes on page load
    $('input:checkbox').prop('checked', false);
    //arrow slide down animation on page load
    $(".arrow").delay("fast").slideDown(1000);
    //disable hidden visibility of full page navigation overlay with menu button click
    $('label.full-cntr').click( function(e) {
      $('.full-nav').toggleClass("noshow");
    });
    //fade banners at top of page as user scrolls down based upon screen width
    if (window.screen.width <= 480) {
      //if the screen is smaller or equal to 480px do this scroll fade function:
      $(window).scroll(function(){
        var pixelstop = $(window).scrollTop();
          $(".big-banner ").css("opacity", 1 - pixelstop / 295);
      });
    } else if (window.screen.width <= 768) {
      //if the screen is smaller or equal to 768px do this slower scroll fade function:
      $(window).scroll(function(){
        var pixelstop = $(window).scrollTop();
          $(".big-banner ").css("opacity", 1 - pixelstop / 500);
      });
      //if the screen is smaller or equal to 1024px do this slower scroll fade function:
    } else if (window.screen.width <= 1024){
      $(window).scroll(function(){
        var pixelstop = $(window).scrollTop();
          $(".big-banner ").css("opacity", 1 - pixelstop / 1000);
      });
    } else {
      //if the screen does not meet any of those conditions (is larger than or equal to 1025px wide)
      //then do this slowest scroll fade function:
      $(window).scroll(function(){
        var pixelstop = $(window).scrollTop();
          $(".big-banner ").css("opacity", 1 - pixelstop / 1200);
      });
    }
  });
}

export default fastpathJs;
