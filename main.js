//first button
document.getElementById("one1").addEventListener("mouseenter",
  function() {
    document.getElementById("one1").style.backgroundColor = "#ffff00";
  }, false
);

document.getElementById("one1").addEventListener("mouseleave",
  function() {
    document.getElementById("one1").style.backgroundColor = "#ffffe0";
  }, false
);

document.getElementById("one1").addEventListener("click",
  function() {
    alert("Oooh - so close, but no cigar");
  }
);

//second button
document.getElementById("two2").addEventListener("mouseenter",
  function() {
    document.getElementById("two2").style.backgroundColor = "#003366";
  }, false
);

document.getElementById("two2").addEventListener("mouseleave",
  function() {
    document.getElementById("two2").style.backgroundColor = "#add8e6";
  }, false
);

document.getElementById("two2").addEventListener("click",
  function() {
    alert("DING DING DING - We have a winner");
  }
);

//third button
document.getElementById("three3").addEventListener("mouseenter",
  function() {
    document.getElementById("three3").style.backgroundColor = "#008000";
  }, false
);

document.getElementById("three3").addEventListener("mouseleave",
  function() {
    document.getElementById("three3").style.backgroundColor = "#90ee90";
  }, false
);

document.getElementById("three3").addEventListener("click",
  function() {
    alert("Oops, butter luck next time");
  }
);
