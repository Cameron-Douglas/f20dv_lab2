var svg = d3.select('body')
 .append('svg')
 .attr('width', '400px')
 .attr('height', '400px')
 .style("border", '1px solid green');
 
svg.append("text")
    .attr("x", "150")
    .attr("y", "150")
    .attr("font-size", "16px")
    .text("Hover Over Me!")
    .attr("fill","SteelBlue")
    .attr("font-family","monospace");

//Increase font size on mouseover
 svg.selectAll("text")
 .on("mouseover", function(event){
    d3.select(this)
    .attr("font-size", "16px")
    .transition()
    .duration(2000)
    .attr("fill", "Orange")
    .attr('font-size', '24px');
 })
//Reduce font size on mouseout
 .on("mouseout", function(){
    d3.select(this)
    .attr('font-size', '24px')
    .transition()
    .duration(1000)
    .attr("fill", "SteelBlue")
    .attr("font-size", "16px");
 });