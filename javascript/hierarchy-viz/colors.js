  // from https://learnui.design/tools/data-color-picker.html#single
  var colorsString = `#013f4f
#005b6e
#00798d
#0099ab
#00bac9
#00dce5
#00ffff`;

var myColors = colorsString.split("\n");

function renderLegend(domElement, myColors) {
  domElement.innerHTML = `
  <div style="">
  Better Team Health
  <div style="background-color:${myColors[6]}; height: 1em; width:3em; "></div>
  <div style="background-color:${myColors[5]}; height: 1em; width:3em; "></div>
  <div style="background-color:${myColors[4]}; height: 1em; width:3em; "></div>
  <div style="background-color:${myColors[3]}; height: 1em; width:3em; "></div>
  <div style="background-color:${myColors[2]}; height: 1em; width:3em; "></div>
  <div style="background-color:${myColors[1]}; height: 1em; width:3em; "></div>
  <div style="background-color:${myColors[0]}; height: 1em; width:3em; "></div>
  Worse Team Health
  </div>
  `;  
}