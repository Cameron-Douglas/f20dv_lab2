//Create an array of numbers
let num = [100];


let paragraph = d3.select("body")
 .selectAll("span")
 .data(num)
 .text(function (d, i) {
 return 'cont ' + i + ' ';
 })
 .style("color", "DarkSlateGrey")
 .style("font-family","monospace")
 .attr("class", function(d,i) { return "span"+i; });



let p = d3.select("body")
 .selectAll("div")
 .data(num)
 .text(function (d, i) {
    return 'value = ' + d;
    }).attr("class", function(d,i) { return "div"+i; });
