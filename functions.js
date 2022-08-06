var c,
  s,
  b,
  d = 1;

function rightToLeft() {
  d = 2;
  func("apply");
  document.getElementById("left").style.color = "mediumseagreen";
  document.getElementById("right").style.color = "rgba(0, 0, 0, 0.19)";
}

function leftToRight() {
  d = 1;
  func("apply");
  document.getElementById("right").style.color = "mediumseagreen";
  document.getElementById("left").style.color = "rgba(0, 0, 0, 0.19)";
}
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
var SpeedSlider4 = document.querySelector("input[id=speed4]");
SpeedSlider4.oninput = (_) => {
  s = "ss4";
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

function select_color(val) {
  var hex = document.getElementById("rec" + val).value;
  //#123456
  var hex_r = hex.substring(1, 3),
    hex_g = hex.substring(3, 5),
    hex_b = hex.substring(5, 7);
  if (val == 1) {
    var slider1 = document.querySelector("input[id=red1]");
    var slider2 = document.querySelector("input[id=green1]");
    var slider3 = document.querySelector("input[id=blue1]");
    slider1.value = parseInt(hex_r, 16);
    slider2.value = parseInt(hex_g, 16);
    slider3.value = parseInt(hex_b, 16);
  } else {
    var slider4 = document.querySelector("input[id=red2]");
    var slider5 = document.querySelector("input[id=green2]");
    var slider6 = document.querySelector("input[id=blue2]");
    slider4.value = parseInt(hex_r, 16);
    slider5.value = parseInt(hex_g, 16);
    slider6.value = parseInt(hex_b, 16);
  }
  func("apply");
}

function send_command2(m, s, b) {
  var command = "python3 facer_rgb.py";
  command += " -m " + m + " -s " + s + " -b " + b + " -d " + d;
  window.api.send("toMain", command);
}
var Slider1 = document.querySelector("input[id=red1]");
Slider1.style.setProperty("--SliderColor1", `rgb(0, 0, 0)`);
Slider1.oninput = (_) => {
  Slider1.style.setProperty("--SliderColor1", `rgb(${Slider1.value}, 0, 0)`);
  document.getElementById("rec1").value =
    "#" +
    Math.abs(parseInt(Slider1.value)).toString(16) +
    Math.abs(parseInt(Slider2.value)).toString(16) +
    Math.abs(parseInt(Slider3.value)).toString(16);
  // "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
  // var xy = document.getElementById("radio1").checked;
  // console.log(xy);
  // send_command(c,)
};

var Slider2 = document.querySelector("input[id=green1]");
Slider2.style.setProperty("--SliderColor2", `rgb(0, 0, 0)`);
Slider2.oninput = (_) => {
  Slider2.style.setProperty("--SliderColor2", `rgb(0, ${Slider2.value}, 0)`);
  document.getElementById("rec1").value =
    "#" +
    Math.abs(parseInt(Slider1.value)).toString(16) +
    Math.abs(parseInt(Slider2.value)).toString(16) +
    Math.abs(parseInt(Slider3.value)).toString(16);
  // "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
};
var Slider3 = document.querySelector("input[id=blue1]");
Slider3.style.setProperty("--SliderColor3", `rgb(0, 0, 0)`);
Slider3.oninput = (_) => {
  document.getElementById("rec1").value =
    "#" +
    Math.abs(parseInt(Slider1.value)).toString(16) +
    Math.abs(parseInt(Slider2.value)).toString(16) +
    Math.abs(parseInt(Slider3.value)).toString(16);
  // "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
  Slider2.style.setProperty("--SliderColor2", `rgb(0, ${Slider2.value}, 0)`);
};
var Slider4 = document.querySelector("input[id=red2]");
Slider4.style.setProperty("--SliderColor1", `rgb(0, 0, 0)`);
Slider4.oninput = (_) => {
  Slider4.style.setProperty("--SliderColor1", `rgb(${Slider4.value}, 0, 0)`);
  document.getElementById("rec2").value =
    "#" +
    Math.abs(parseInt(Slider4.value)).toString(16) +
    Math.abs(parseInt(Slider5.value)).toString(16) +
    Math.abs(parseInt(Slider6.value)).toString(16);
  // "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
};

var Slider5 = document.querySelector("input[id=green2]");
Slider5.style.setProperty("--SliderColor2", `rgb(0, 0, 0)`);
Slider5.oninput = (_) => {
  Slider5.style.setProperty("--SliderColor2", `rgb(0, ${Slider5.value}, 0)`);
  document.getElementById("rec2").value =
    "#" +
    Math.abs(parseInt(Slider4.value)).toString(16) +
    Math.abs(parseInt(Slider5.value)).toString(16) +
    Math.abs(parseInt(Slider6.value)).toString(16);
  // "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
};
var Slider6 = document.querySelector("input[id=blue2]");
Slider6.style.setProperty("--SliderColor3", `rgb(0, 0, 0)`);
Slider6.oninput = (_) => {
  Slider6.style.setProperty("--SliderColor3", `rgb(0, 0, ${Slider6.value})`);
  document.getElementById("rec2").value =
    "#" +
    Math.abs(parseInt(Slider4.value)).toString(16) +
    Math.abs(parseInt(Slider5.value)).toString(16) +
    Math.abs(parseInt(Slider6.value)).toString(16);
  // "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
};

document.getElementById("sl1").style.display = "none";
document.getElementById("sl2").style.display = "none";
document.getElementById("sl3").style.display = "none";
document.getElementById("sl4").style.display = "none";
document.getElementById("back").style.display = "none";
var clicked = 0;
function func(arg) {
  // func("apply");
  // b = document.getElementById("brightness1").value;
  // window.api.send("toMain", x);
  var c1, c2;
  var slider;
  if (arg == "zoom") {
    document.getElementById("direction").style.display = "none";
    c = "mediumseagreen2";
    c1 = "mediumseagreen";
    c2 = "mediumseagreen3";
    c3 = "mediumseagreen4";
    slider = "sl1";
  } else if (arg == "breathe") {
    document.getElementById("direction").style.display = "none";
    c = "mediumseagreen";
    c1 = "mediumseagreen2";
    c2 = "mediumseagreen3";
    c3 = "mediumseagreen4";
    slider = "sl2";
  } else if (arg == "wave") {
    document.getElementById("direction").style.display = "block";
    slider = "sl3";
    c = "mediumseagreen3";
    c1 = "mediumseagreen";
    c2 = "mediumseagreen2";
    c3 = "mediumseagreen4";
  } else if (arg == "neon") {
    document.getElementById("direction").style.display = "none";
    slider = "sl4";
    c = "mediumseagreen4";
    c1 = "mediumseagreen2";
    c2 = "mediumseagreen3";
    c3 = "mediumseagreen";
  } else if (arg == "back") {
    document.getElementById("direction").style.display = "none";
    var style_1 = document.querySelector("." + "mediumseagreen").style;
    var style1_1 = document.querySelector("." + "mediumseagreen2").style;
    var style2_1 = document.querySelector("." + "mediumseagreen3").style;
    var style3_1 = document.querySelector("." + "mediumseagreen4").style;
    style_1.setProperty("--background", "transparent");
    style1_1.setProperty("--background", "transparent");
    style2_1.setProperty("--background", "transparent");
    style3_1.setProperty("--background", "transparent");
    style_1.display = "block";
    style1_1.display = "block";
    style2_1.display = "block";
    style3_1.display = "block";
    clicked = 0;
    document.getElementById("sl1").style.display = "none";
    document.getElementById("sl2").style.display = "none";
    document.getElementById("sl3").style.display = "none";
    document.getElementById("sl4").style.display = "none";
    document.getElementById("back").style.display = "none";
  }
  console.log(arg);
  if (arg != "apply" && arg != "back") {
    document.getElementById("back").style.display = "block";
    var style = document.querySelector("." + c).style;
    var style1 = document.querySelector("." + c1).style;
    var style2 = document.querySelector("." + c2).style;
    var style3 = document.querySelector("." + c3).style;
    var button = document.getElementById(arg);
    if (clicked == 0) {
      clicked = 1;
      style.setProperty("--background", "rgb(30, 136, 78)");
      // style.display = "block";
      style1.display = "none";
      style2.display = "none";
      style3.display = "none";
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
    } else if (c == "mediumseagreen4") {
      m = 2;
      b = document.getElementById("brightness4").value;
    }
    if (s == "ss1") {
      s = SpeedSlider1.value;
    } else if (s == "ss2") {
      s = SpeedSlider2.value;
    } else if (s == "ss3") {
      s = SpeedSlider3.value;
    } else if (s == "ss4") {
      s = SpeedSlider4.value;
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
    if (m == 3 || m == 2) {
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
  console.log(data);
  if (typeof data.s == "undefined") s = 9;
  else s = data.s;
  if (typeof data.b == "undefined") b = 99;
  else b = data.b;
  b = data.b;
  d = data.d;
  if (data.cB) {
    if (data.m == 5) {
      document.getElementById("red1").value = data.cR;
      document.getElementById("green1").value = data.cG;
      document.getElementById("blue1").value = data.cB;
      document.getElementById("brightness1").value = data.b;
      document.getElementById("speed1").value = data.s;
    } else if (data.m == 1) {
      document.getElementById("red2").value = data.cR;
      document.getElementById("green2").value = data.cG;
      document.getElementById("blue2").value = data.cB;
      document.getElementById("brightness2").value = data.b;
      document.getElementById("speed2").value = data.s;
    }
  } else {
    document.getElementById("speed3").value = data.s;
    document.getElementById("brightness3").value = data.b;
    if (data.d == 1) {
      document.getElementById("right").style.color = "mediumseagreen";
      document.getElementById("left").style.color = "rgba(0, 0, 0, 0.19)";
    } else {
      document.getElementById("left").style.color = "mediumseagreen";
      document.getElementById("right").style.color = "rgba(0, 0, 0, 0.19)";
    }
  }
  try {
    Slider1.style.setProperty("--SliderColor1", `rgb(${Slider1.value}, 0, 0)`);
    document.getElementById("rec1").value =
      "#" +
      Math.abs(parseInt(Slider1.value)).toString(16) +
      Math.abs(parseInt(Slider2.value)).toString(16) +
      Math.abs(parseInt(Slider3.value)).toString(16);
    // "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
  } catch (e) {}
  try {
    Slider2.style.setProperty("--SliderColor2", `rgb(0, ${Slider2.value}, 0)`);
    document.getElementById("rec1").value =
      "#" +
      Math.abs(parseInt(Slider1.value)).toString(16) +
      Math.abs(parseInt(Slider2.value)).toString(16) +
      Math.abs(parseInt(Slider3.value)).toString(16);
    // "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
  } catch (e) {}
  try {
    document.getElementById("rec1").value =
      "#" +
      Math.abs(parseInt(Slider1.value)).toString(16) +
      Math.abs(parseInt(Slider2.value)).toString(16) +
      Math.abs(parseInt(Slider3.value)).toString(16);
    // "rgb(" + Slider1.value + "," + Slider2.value + "," + Slider3.value + ")";
    Slider2.style.setProperty("--SliderColor2", `rgb(0, ${Slider2.value}, 0)`);
  } catch (e) {}
  try {
    Slider4.style.setProperty("--SliderColor1", `rgb(${Slider4.value}, 0, 0)`);
    document.getElementById("rec2").value =
      "#" +
      Math.abs(parseInt(Slider4.value)).toString(16) +
      Math.abs(parseInt(Slider5.value)).toString(16) +
      Math.abs(parseInt(Slider6.value)).toString(16);
    // "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
  } catch (e) {}
  try {
    Slider5.style.setProperty("--SliderColor2", `rgb(0, ${Slider5.value}, 0)`);
    document.getElementById("rec2").value =
      "#" +
      Math.abs(parseInt(Slider4.value)).toString(16) +
      Math.abs(parseInt(Slider5.value)).toString(16) +
      Math.abs(parseInt(Slider6.value)).toString(16);
    // "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
  } catch (e) {}
  try {
    Slider6.style.setProperty("--SliderColor3", `rgb(0, 0, ${Slider6.value})`);
    document.getElementById("rec2").value =
      "#" +
      Math.abs(parseInt(Slider4.value)).toString(16) +
      Math.abs(parseInt(Slider5.value)).toString(16) +
      Math.abs(parseInt(Slider6.value)).toString(16);
    // "rgb(" + Slider4.value + "," + Slider5.value + "," + Slider6.value + ")";
  } catch (e) {}
});
