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


let arr = [];


d3.selectAll("svg")
.on("mousemove",function(event){

    console.log(Math.round(d3.pointer(event)[1]));

   svg.selectAll("text")
    .data(arr)
    .exit()
    .remove();

   svg
    .append("text")
    .attr("x",d3.pointer(event)[0] + 5) 
    .attr("y",d3.pointer(event)[1] + 5)
    .text("X: " + d3.pointer(event)[0]+ " Y: " + Math.round(d3.pointer(event)[1]));

    


});

 svg.selectAll("circle")
 .on("mouseover", function(event){
 d3.select(this)
 .transition()
 .attr("r","100")
 .attr("fill", "Orange");
  // Get current event info
 // Note: d3.event (event) passed as the first argument to all listeners
 console.log(event);
 // Get x & y co-ordinates
 // Note: d3.mouse was removed in d3v6, you should use d3.pointer(event)
 console.log(d3.pointer(event));
 })

 .on("mouseout", function(){
 d3.select(this)
 .transition()
 .attr("r", "50")
 .attr("fill", "SteelBlue");
 });