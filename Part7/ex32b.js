// Define SVG dimentions
const width = 900
const height = 900

// Get Slider HTML elements
const cxSlider = document.getElementById("cx");
const cySlider = document.getElementById("cy");
const redRadius = document.getElementById("redRadius");
const blueRadius = document.getElementById("blueRadius");
const strengthSlider = document.getElementById("strength");

// Get mutable values
let r1 = blueRadius.value;
let r2 = redRadius.value;
let x = cxSlider.value;
let y = cySlider.value;
let strength = strengthSlider.value;

// Initialise node array
const nodes = [].concat(
    d3.range(360).map(function() { return {type: "a", x:Math.random()*width, y: Math.random()*height}; }),
    d3.range(200).map(function() { return {type: "b"}; })
  )

// SVG variable
let u =  d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height)
  .style("border","1px solid darkslategrey")
  .style("border-radius","8px");

// Function to draw guide circles
function drawCircles(){
   
    // temp array
    let arr = [];

    // remove old circles
    u.selectAll(".guide")
        .data(arr)
        .exit()
        .remove();

    // draw two new circles
    u.append("circle")
        .attr("class","guide")
        .attr("r",r1)
        .attr("cx",x)
        .attr("cy",y)
        .attr("stroke","steelblue")
        .attr("fill","none");
    
    u.append("circle")
        .attr("class","guide")
        .attr("r",r2)
        .attr("cx",x)
        .attr("cy",y)
        .attr("stroke","brown")
        .attr("fill","none");
}

// Append nodes to the SVG
const node = d3.select("svg")
  .selectAll()
  .data(nodes)
  .join("circle")
    .attr("class","dataPoint")
    .attr("r", 5)
    .attr("cx", d=>d.x)
    .attr("cy", d=>d.y)
    .attr("fill", d => d.type === "a" ? "steelblue" : "brown")

// OnInput functions which mutate a variable, then call drawCircles() and updateSim()

cxSlider.oninput = function() {
    x=this.value;
    
    drawCircles();
    updateSim();
}

cySlider.oninput = function() {
    y=this.value;
    
    drawCircles();
    updateSim();
}

redRadius.oninput = function() {
    r2=this.value;
    
    drawCircles();
    updateSim();
}

blueRadius.oninput = function() {
    r1=this.value;
   
    drawCircles();
    updateSim();
}

strengthSlider.oninput = function() {
    strength=this.value;
    
    drawCircles();
    updateSim();
}

// initialise simulation
var simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceCollide().radius(5).iterations(2))
    .force("r", d3.forceRadial(d => d.type === "a" ? r1 : r2, x, y).strength(strength))
    .on("tick", ticked)
    .alphaTarget(0.1)

// Update sim with mutated variables 
function updateSim(){
    simulation.force("r", d3.forceRadial(d => d.type === "a" ? r1 : r2, x, y).strength(strength))
}

function ticked() { node.attr("cx", d => d.x).attr("cy", d => d.y);
}

drawCircles();
