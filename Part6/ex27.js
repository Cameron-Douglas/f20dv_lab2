var dataset1 = {
    apples: [5345, 2879, 1997, 2437, 4045],
   };
var dataset2 = {
    apples: [1738, 3110, 2000, 1964, 6432],
   };

   var width = 460,
    height = 300,
    radius = Math.min(width, height) / 2;
   var color = d3.scaleOrdinal().range(d3.schemeSet3);

   var pie = d3.pie()
    .sort(null);

   var arc = d3.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 50);

   var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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

function update(dataset){

   var path = svg.selectAll("path")
    .data(pie(dataset.apples))
    
    path.enter()
    .append("path")
    .merge(path)
    .transition()
    .duration(1000)
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc);
}

draw(dataset1)