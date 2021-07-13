var myChart = CirclePack();
// var myChart = Treemap();
// const myChart = d3.treemap();

const asInt = (x) => {
  return parseInt(x, 10);
}

var dataToRender;
const renderDiagram = (domElement, table) => {
  // dataToRender = fillInDataForBubbles(formatDataForBubbles(json));
  // var root = dataToRender;
  // console.log(domElement)
  // console.log(table)
  var width = asInt(domElement.style.height);
  var height = asInt(domElement.style.width);
  debugger;

  var root = d3
    .stratify()
    .id(function (d) {
      return d.name;
    })
    .parentId(function (d) {
      return d.parent;
    })(table);

  var rootSummedSorted = root
    .sum(function (d) {
      return d.value;
    })
    .sort(function (a, b) {
      return b.value - a.value;
    });

  // root = d3.hierarchy(root)
  //       .sum(d => d.value)
  //       .sort((a, b) => b.value - a.value);

  // d3.treemap().size([200,200]).padding(1)(formattedData);
  // myChart(formattedData)

  // var pack = d3.pack()
  // pack(rootSummedSorted);
  //     debugger;

  //   var width = 400;
  //   var height = 400;
  //   pack = (data) => {d3.pack()
  //     .size([width - 2, height - 2])
  //     .padding(3)
  //   (d3.hierarchy(data)
  //     .sum(d => d.value)
  //     .sort((a, b) => b.value - a.value))
  //                   }
  // pack(rootSummedSorted);
  // d3.pack()(rootSummedSorted);

  return myChart
    .data(rootSummedSorted)
    .label((d) => d.id)
    .color((d, parent) => {
      return d.data.averagehealth ? myColors[round(d.data.averagehealth) - 1] : "#EEE";
    })
    .width(width)
    .height(height)
    (domElement);
}

function round(x) {
  return Math.round(Number(x));
}
