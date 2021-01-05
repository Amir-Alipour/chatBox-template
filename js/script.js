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

  $(".chatbox").scrollTop($(this).height());

  $(".send-btn").click(function (e) {
    var text = $(".textbox").val();

    $(".tab-content>.active").append(
      $('<div class="message-wrapper"></div>').append(
        $(
          '<div class="col-12 col-md-12 col-lg-12 col-xl-6 float-right"></div>'
        ).append(
          $('<div class="card myChat"></div>').append(
            $('<div class="card-body"></div>').append(
              $('<p class="card-text">' + text + "</p>")
                .append('<div class="d-inline float-right></div>')
                .append(
                  $('<button class="editUserBtn float-right"></button>')
                    .append(
                      $('<i class="fa fa-ellipsis-v"aria-hidden="true"></i>')
                    )
                    .append(
                      '<div class="uk-dropdown userEditDropdown" uk-dropdown="mode:click; pos: right" style="height: 400px;"><ul class"uk-nav uk-dropdown-nav edit-dropdown" style="list-style: none; margin: 0; padding: 0; padding-top:20px;"><li style="width: 100%; height:70px; text-align: center; margin-top:8px;"><a>Reply</a></li><li style="width: 100%; height:70px; text-align: center;"><a>Copy</a></li><li style="width: 100%; height:70px; text-align: center;"><a>Pin</a></li><li style="width: 100%; height:70px; text-align: center;"><a>Edit</a></li><li style="width: 100%; height:70px; text-align: center;"><a>Delet</a></li></ul></div>'
                    )
                )
            )
          )
        )
      )
    );

    $(".textbox").val(null);
    $(".chatbox").scrollTop($('.chatbox').height());
  });
});
