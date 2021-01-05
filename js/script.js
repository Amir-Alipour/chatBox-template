$(document).ready(function () {
  $("#searchArea").keyup(function () {
    var filter = this.value.toLowerCase(); // no need to call jQuery here
    $(".user-prof").each(function () {
      /* cache a reference to the current .media (you're using it twice) */
      var _this = $(this);
      var title = _this.find("h5").text().toLowerCase();

      if (title.indexOf(filter) < 0) {
        _this.fadeOut("slow");
      } else {
        _this.fadeIn("slow");
      }
    });
  });

  // ---------------

  var profDropdownCounter = 0;
  $(".dropdown-pic").click(function (e) {
    if (profDropdownCounter === 0) {
      profDropdownCounter = 1;
      $(".dropdown-menu-prof").css("display", "block");
    } else {
      $(".dropdown-menu-prof").css("display", "none");
      profDropdownCounter = 0;
    }
  });

  // --------------------

  var UsereditCounter = 0;
  $('.editUserBtn').click(function (e) { 
    if (UsereditCounter === 0){
      UsereditCounter = 1;
      $('.userEditDropdown').css('display','flex');
    }else {
      $('.userEditDropdown').css('display','none');
      UsereditCounter = 0;
    }
  });

  var myeditCounter = 0;
  $('.myEditBtn').click(function (e) { 
    if (myeditCounter === 0){
      myeditCounter = 1;
      $('.myEditDropdown').css('display','flex');
    }else {
      $('.myEditDropdown').css('display','none');
      myeditCounter = 0;
    }
  });

});
