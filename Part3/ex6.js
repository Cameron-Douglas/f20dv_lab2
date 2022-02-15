var div = d3.select('body')
 .append("div");

div.style('width', '100px')
.style('height', '100px')
.style('background-color', 'blue')

d3.selectAll("div")
.on("mouseover",function(event){ 
    div.style('width', '100px')
    .style('height', '100px')
    .style('background-color', 'blue')
    .transition()
    .duration(1000)
    .style("background-color", "red")
    .style('width', '50px')
    .style('height', '50px')
    .transition()
    .duration(2000)
    .style("background-color","green")
    .style('width', '150px')
    .style('height', '150px');
})
.on("mouseleave",function(event){
    div.style("background-color","green")
    .style('width', '150px')
    .style('height', '150px')
    .transition()
    .duration(1500)
    .style('width', '100px')
    .style('height', '100px')
    .style('background-color', 'blue')
    
});
