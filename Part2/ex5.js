//Append an SVG to the body
var svg = d3.select('body')
 .append('svg')
 .attr('width', '400px')
 .attr('height', '400px')
 .style("border", '1px solid green');


//Define a placeholder array
let arr = [];


d3.selectAll("svg")
.on("mousemove",function(event){

    //remove all existing text to ensure there is only one text element at a time
   svg.selectAll("text")
    .data(arr)
    .exit()
    .remove();

    //append a new text element with the x and y coords of the cursor obtained from the event
   svg
    .append("text")
    .attr("x",d3.pointer(event)[0] + 5) 
    .attr("y",d3.pointer(event)[1] + 5)
    .text("X: " + d3.pointer(event)[0]+ " Y: " + Math.round(d3.pointer(event)[1]));
});
;