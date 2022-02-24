//Append a div to the body, and set it's properties
d3.select('body')
 .append('div')
 .style('width', '100px')
 .style('height', '20px')
 .style('background-color', 'green');

//Define onmouseover behaviour: increase size, round border edges and change color
 d3.selectAll("div")
 .on("mouseover", function(event){
    d3.select(this)
    .transition()
    .style("background-color", "orange")
    .style("border-radius","3px")
    .style('width','150px')
    .style('height','30px');
    // Get x & y co-ordinates
    console.log(d3.pointer(event));
 })

//Return the div to its original size and a new color
 .on("mouseout", function(){
    d3.select(this)
    .transition()
    .style("background-color", "steelblue")
    .style("border-radius","0px")
    .style('width', '100px')
    .style('height', '20px')
 });