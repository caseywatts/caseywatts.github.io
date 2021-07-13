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
  <div class="flex justify-center items-center text-center">
  <span class="p-8">Worse<br />Team Health</span>
  <span style="display:inline-block; background-color:${myColors[0]}; height: 3em; width:3em; "></span>
  <span style="display:inline-block; background-color:${myColors[1]}; height: 3em; width:3em; "></span>
  <span style="display:inline-block; background-color:${myColors[2]}; height: 3em; width:3em; "></span>
  <span style="display:inline-block; background-color:${myColors[3]}; height: 3em; width:3em; "></span>
  <span style="display:inline-block; background-color:${myColors[4]}; height: 3em; width:3em; "></span>
  <span style="display:inline-block; background-color:${myColors[5]}; height: 3em; width:3em; "></span>
  <span style="display:inline-block; background-color:${myColors[6]}; height: 3em; width:3em; "></span>
  <span class="p-8">Better<br />Team Health</span>
  </div>
  `;  
}