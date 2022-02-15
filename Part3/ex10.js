var svg = d3.select('body')
 .append('svg')
 .attr('width', '400px')
 .attr('height', '400px')
 .style("border", '1px solid green');
 
svg.append("circle")
    .attr("cx", "200")
    .attr("cy", "200")
    .attr("r", "50")
    .attr("fill", "SteelBlue");

 svg.selectAll("circle")
 .on("mouseover", function(event){
 d3.select(this)
 .attr("r", "50")
 .transition()
 .ease( d3.easeBounce )
 .duration(2000)
 .attr("fill", "Orange")
 .attr("r", "150")
 .text("Bounce");
 
 })
 .on("mouseout", function(){
 d3.select(this)
 .attr("r", "150")
 .transition()
 .ease( d3.easeBounce )
 .duration(1000)
 .attr("fill", "SteelBlue")
 .attr("r", "50")
 .text("Bounce");
 });