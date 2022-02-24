//Append a Div element and style it
var div = d3.select('body')
 .append("div");

div.style('width', '100px')
.style('height', '100px')
.style('background-color', 'blue')

//Define on mouseover behavior
d3.selectAll("div")
.on("mouseover",function(event){ 

    div //first transition to half the size and red over 1 second
    .transition()
    .duration(1000)
    .style("background-color", "red")
    .style('width', '50px')
    .style('height', '50px')
    .transition() //then transition to three times the size and green over 2 seconds
    .duration(2000)
    .style("background-color","green")
    .style('width', '150px')
    .style('height', '150px');
})

//On mouseleave return to original size and color
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
