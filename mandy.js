var WantedColor = document.querySelector("span");
var button = document.querySelector("button");
var select = document.querySelector("select");
var container = document.querySelector(".container");

select.value = "0";

function pickrandomcolor() {
  var random1 = Math.floor(Math.random() * 256 + 1) - 1;
  var random2 = Math.floor(Math.random() * 256 + 1) - 1;
  var random3 = Math.floor(Math.random() * 256 + 1) - 1;

  var string =
    "rgb(" +
    random1.toString() +
    ", " +
    random2.toString() +
    ", " +
    random3.toString() +
    ")";

  return string;
}
var e = [];
function Refresh() {
  var squares = document.querySelectorAll(".square");

  squares = document.querySelectorAll(".square");
  var sq = [];

  for (var i = 0; i < squares.length; i++) {
    let color = pickrandomcolor();

    if (squares[i].style.display !== "none") {
      sq.push(color);
    }

    squares[i].style.backgroundColor = color;

    e.push(color);
    // console.log(squares[i]);
  }

  var targetcolorindex = Math.floor(Math.random() * sq.length + 1) - 1;

  WantedColor.textContent = sq[targetcolorindex];

  sq = [];
}

Refresh();

button.addEventListener("click", function () {
  Refresh();
});

select.addEventListener(
  "change",
  function () {
    var squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.display = "none";
    }

    for (var i = 0; i < this.value; i++) {
      var div = document.createElement("div");

      div.classList.add("square");

      container.appendChild(div);
    }
    Refresh();

    squares = document.querySelectorAll(".square");

    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function () {
        console.log("clicked");
        let WantedColor = document.querySelector("span");
        var style = this.style.backgroundColor;
        console.log(WantedColor.textContent, style);
        if (WantedColor.textContent === style) {
          var head = document.querySelector(".head");
          head.style.backgroundColor = WantedColor.textContent;
          for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = WantedColor.textContent;
          }
        } else {
          this.style.backgroundColor = "#232323";
        }
      });
    }
  },
  false
);
