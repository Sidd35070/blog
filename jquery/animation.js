function hiddd() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll(".hidd");
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
        init();
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().y;

  
        if (positionFromTop <= windowHeight / 1.3) {

          if (element.classList.contains("aleft")) {
            element.classList.add("fade-in-left");
          } else if (element.classList.contains("aright")) {
            element.classList.add("fade-in-right");
          } else if (element.classList.contains("abottom")) {
            element.classList.add("fade-in-bottom");
          } else element.classList.add("fade-in-element");
          element.classList.remove("hidd");
        }
      }
    }
  
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  
    init();
    checkPosition();
  }
  hiddd();