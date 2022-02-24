//Append an SVG
var svg = d3.select('body')
 .append('svg')
 .attr('width', '400px')
 .attr('height', '400px')
 .style("border", '1px solid green');

//Append a circle to the SVG
svg.append("circle")
    .attr("cx", "200")
    .attr("cy", "200")
    .attr("r", "50")
    .attr("fill", "SteelBlue");

//on mouseover, increase circle radius and change its color
svg.selectAll("circle")
 .on("mouseover", function(event){
    d3.select(this)
    .transition()
    .attr("r","100")
    .attr("fill", "Orange");
 })

 //on mouseout, return it to its original size and color
.on("mouseout", function(){
    d3.select(this)
    .transition()
    .attr("r", "50")
    .attr("fill", "SteelBlue");
 });