$(function () {
  $(".botanic").hide();
  $(".imgdiv").hide();

  $("h1, h2")
    .bind("mouseenter.glow", function () {
      $(this).css("color", "#c71585");
    })
    .bind("mouseleave.glow", function () {
      $(this).css("color", "darkgreen");
    })
    .one("dblclick", function () {
      $(this).unbind(".glow").css("color", "darkgreen");
    });

  $(".flower").on("click", function () {
    $(".botanic").hide();
    $(this).children(".botanic").show();
  });

  $(".pic").hover(
    function (evt) {
      var id = "#" + $(this).attr("title");
      var x = evt.pageX + 150;
      var y = evt.pageY;
      $(id).css({ left: x + "px", top: y + "px" }).show();
    },
    function () {
      var id = "#" + $(this).attr("title");
      $(id).hide();
    }
  );

  $(document).on("keypress", function (evt) {
    var ch = String.fromCharCode(evt.which || evt.keyCode).toLowerCase();
    if (ch >= "a" && ch <= "z" && $("#" + ch).length) {
      window.location = "#" + ch;
    }
  });

  $("nav a").on("click", function (e) {
    e.preventDefault();
    window.location.href = $(this).attr("href");
  });
});
