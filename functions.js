var c, s, b;
var SpeedSlider1 = document.querySelector("input[id=speed1]");
SpeedSlider1.oninput = (_) => {
  s = "ss1";
};
var SpeedSlider2 = document.querySelector("input[id=speed2]");
SpeedSlider2.oninput = (_) => {
  s = "ss2";
};
var SpeedSlider3 = document.querySelector("input[id=speed3]");
SpeedSlider3.oninput = (_) => {
  s = "ss3";
};
function send_command(m, s, b, r, g, bl) {
  var command = "python3 facer_rgb.py";
  command +=
    " -m " +
    m +
    " -s " +
    s +
    " -b " +
    b +
    // " -d " +
    // d +
    " -cR " +
    r +
    " -cG " +
    g +
    " -cB " +
    bl;
  window.api.send("toMain", command);
}
function send_command2(m, s, b) {
  var command = "python3 facer_rgb.py";
  command += " -m " + m + " -s " + s + " -b " + b;
  window.api.send("toMain", command);
}
var Slider1 = document.querySelector("input[id=red1]");
Slider1.style.setProperty("--SliderColor1", `rgb(0, 0, 0)`);
Slider1.oninput = (_) => {
  Slider1.style.setProperty("--SliderColor1", `rgb(${Slider1.value}, 0, 0)`);
  document.getElementById("rec1").style.backgroundColor =
    "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
  // var xy = document.getElementById("radio1").checked;
  // console.log(xy);
  // send_command(c,)
};

var Slider2 = document.querySelector("input[id=green1]");
Slider2.style.setProperty("--SliderColor2", `rgb(0, 0, 0)`);
Slider2.oninput = (_) => {
  Slider2.style.setProperty("--SliderColor2", `rgb(0, ${Slider2.value}, 0)`);
  document.getElementById("rec1").style.backgroundColor =
    "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
};
var Slider3 = document.querySelector("input[id=blue1]");
Slider3.style.setProperty("--SliderColor3", `rgb(0, 0, 0)`);
Slider3.oninput = (_) => {
  document.getElementById("rec1").style.backgroundColor =
    "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
  Slider2.style.setProperty("--SliderColor2", `rgb(0, ${Slider2.value}, 0)`);
};
var Slider4 = document.querySelector("input[id=red2]");
Slider4.style.setProperty("--SliderColor1", `rgb(0, 0, 0)`);
Slider4.oninput = (_) => {
  Slider4.style.setProperty("--SliderColor1", `rgb(${Slider4.value}, 0, 0)`);
  document.getElementById("rec2").style.backgroundColor =
    "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
};

var Slider5 = document.querySelector("input[id=green2]");
Slider5.style.setProperty("--SliderColor2", `rgb(0, 0, 0)`);
Slider5.oninput = (_) => {
  Slider5.style.setProperty("--SliderColor2", `rgb(0, ${Slider5.value}, 0)`);
  document.getElementById("rec2").style.backgroundColor =
    "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
};
var Slider6 = document.querySelector("input[id=blue2]");
Slider6.style.setProperty("--SliderColor3", `rgb(0, 0, 0)`);
Slider6.oninput = (_) => {
  Slider6.style.setProperty("--SliderColor3", `rgb(0, 0, ${Slider6.value})`);
  document.getElementById("rec2").style.backgroundColor =
    "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
};

document.getElementById("sl1").style.display = "none";
document.getElementById("sl2").style.display = "none";
document.getElementById("sl3").style.display = "none";
document.getElementById("back").style.display = "none";
var clicked = 0;
function func(arg) {
  // b = document.getElementById("brightness1").value;
  // window.api.send("toMain", x);
  var c1, c2;
  var slider;
  if (arg == "zoom") {
    c = "mediumseagreen2";
    c1 = "mediumseagreen";
    c2 = "mediumseagreen3";
    slider = "sl1";
  } else if (arg == "breathe") {
    c = "mediumseagreen";
    c1 = "mediumseagreen2";
    c2 = "mediumseagreen3";
    slider = "sl2";
  } else if (arg == "wave") {
    slider = "sl3";
    c = "mediumseagreen3";
    c1 = "mediumseagreen";
    c2 = "mediumseagreen2";
  } else if (arg == "back") {
    var style_1 = document.querySelector("." + "mediumseagreen").style;
    var style1_1 = document.querySelector("." + "mediumseagreen2").style;
    var style2_1 = document.querySelector("." + "mediumseagreen3").style;
    style_1.setProperty("--background", "transparent");
    style1_1.setProperty("--background", "transparent");
    style2_1.setProperty("--background", "transparent");
    style_1.display = "block";
    style1_1.display = "block";
    style2_1.display = "block";
    clicked = 0;
    document.getElementById("sl1").style.display = "none";
    document.getElementById("sl2").style.display = "none";
    document.getElementById("sl3").style.display = "none";
    document.getElementById("back").style.display = "none";
  }
  console.log(arg);
  if (arg != "apply" && arg != "back") {
    document.getElementById("back").style.display = "block";
    var style = document.querySelector("." + c).style;
    var style1 = document.querySelector("." + c1).style;
    var style2 = document.querySelector("." + c2).style;
    var button = document.getElementById(arg);
    if (clicked == 0) {
      clicked = 1;
      style.setProperty("--background", "rgb(30, 136, 78)");
      // style.display = "block";
      style1.display = "none";
      style2.display = "none";
      var x = document.getElementById(slider);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      // style2.setProperty("--background", transparent);
    }
    // else {
    //   clicked = 0;
    //   style.setProperty("--background", "transparent");
    //   // style.display = "block";
    //   // document.getElementById("back").style.display = "none";
    //   style1.display = "block";
    //   style2.display = "block";
    // }
  } else if (arg == "apply" && arg != "back") {
    var cR, cG, cB;
    var m;
    if (c == "mediumseagreen2") {
      m = 5;
      cR = "red1";
      cG = "green1";
      cB = "blue1";
      b = document.getElementById("brightness1").value;
    } else if (c == "mediumseagreen") {
      m = 1;
      cR = "red2";
      cG = "green2";
      cB = "blue2";
      b = document.getElementById("brightness2").value;
    } else if (c == "mediumseagreen3") {
      m = 3;
      b = document.getElementById("brightness3").value;
    }
    if (s == "ss1") {
      s = SpeedSlider1.value;
    } else if (s == "ss2") {
      s = SpeedSlider2.value;
    } else if (s == "ss3") {
      s = SpeedSlider3.value;
    }
    // var d;
    // var r2l = document.getElementById("radio1").checked;
    // if (r2l == true) {
    //   d = 1;
    // } else {
    //   d = 2;
    // }
    // if()
    console.log(b);
    if (m == 3) {
      send_command2(m, s, b, 100);
    } else {
      send_command(
        m,
        s,
        b,
        // d,
        document.getElementById(cR).value,
        document.getElementById(cG).value,
        document.getElementById(cB).value,
      );
    }
  }
}

window.api.receive("fromMain", (data) => {
  console.log(`Received ${data} from main process`);
});
