var width = 400, height = 400;
// setup svg
d3.select('body').append('svg').attr('width',width).attr('height',height);
// generate some random data
var numNodes = 100;
var nodes = d3.range(numNodes).map(function(d) {
 return {radius: Math.random() * 25}
})

var colorRange = d3.scaleLinear().domain([0,25]).range(["blue", "red"]);

var simulation = d3.forceSimulation(nodes)
 .force('charge', d3.forceManyBody().strength(5))
 .force('center', d3.forceCenter(width / 2, height / 2))
 .force('collision', d3.forceCollide().radius(function(d) {
 return d.radius
 }))
 .on('tick', ticked);
function ticked() {
 var u = d3.select('svg')
 .selectAll('circle')
 .data(nodes)
 .join('circle')
 .attr('fill', function(d){
     return colorRange(d.radius);
 })
 .attr('r', function(d) {
 return d.radius
 })
 .attr('cx', function(d) {
 return d.x
 })
 .attr('cy', function(d) {
 return d.y
 })
}
console.log('ready..');