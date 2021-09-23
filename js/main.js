jQuery(document).ready(function ($) {
    "use strict";
  
    var navclone = function () {
      $(".js-clone-nav").each(function () {
        var $this = $(this);
        $this.clone().attr("class", "clone-view").appendTo(".mobile-view-body");
      });
  
      $("body").on("click", ".js-toggle", function (e) {
        var $this = $(this);
        e.preventDefault();
  
        if ($("body").hasClass("off-view")) {
          $("body").removeClass("off-view");
        } else {
          $("body").addClass("off-view");
        }
      });
  
      $(document).mouseup(function (e) {
        var container = $(".mobile-view");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("off-view")) {
            $("body").removeClass("off-view");
          }
        }
      });
  
      $(window).resize(function () {
        var $this = $(this),
          w = $this.width();
        if (w > 768) {
          if ($("body").hasClass("off-view")) {
            $("body").removeClass("off-view");
          }
        }
      });
    };
    navclone();
  });