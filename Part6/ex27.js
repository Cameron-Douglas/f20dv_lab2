// Declare Datasets
var dataset1 = {
    apples: [5345, 2879, 1997, 2437, 4045],
   };
var dataset2 = {
    apples: [1738, 3110, 2000, 1964, 6432],
   };

// Initialise SVG properties
var width = 460,
    height = 300,
    radius = Math.min(width, height) / 2;

// Define color range 
var color = d3.scaleOrdinal().range(d3.schemeSet3);

// Initialise pie variable
var pie = d3.pie()
.sort(null);

// Initialise arc varible
var arc = d3.arc()
.innerRadius(radius - 100)
.outerRadius(radius - 50);

// Append SVG
var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


// Append path to the SVG using pie data
function draw(dataset){

    var path = svg.selectAll("path")
    .data(pie(dataset.apples))
    .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc)
    .transition()
    .duration(1000)
    .attrTween("d", function (d) {
    var i = d3.interpolate(d.endAngle, d.startAngle);
    return function (t) {
    d.startAngle = i(t);
    return arc(d);
    }
    });
}

// Update function called on button press
function update(dataset){

    // Create a new path
   var path = svg.selectAll("path")
    .data(pie(dataset.apples));

    // Merge old path to the new path
    path.enter()
    .append("path")
    .merge(path)
    .transition()
    .duration(1000)
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc); 
}

draw(dataset1)