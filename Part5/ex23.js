//Set Dimensions

const margin = {top: 30, right: 30, bottom: 70, left: 60};
const width = 600 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

//Create Random Points

const numPoints = 100;
const data1 = [];
for (let i = 0; i < numPoints; i++) { data1.push( {x: i/100, y: Math.sin( 6.2 * i/100 ) } ); }
const data2 = [];
for (let i = 0; i < numPoints; i++) { data2.push( {x: i/100, y: Math.cos( 6.2 * i/100 ) } ); }

//Append SVG Object to the Page
var svg = d3.select('body')
    .append('div')
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");


/* Get the 'limits' of the data - the full extent (mins and max)
so the plotted data fits perfectly */
const xExtent = d3.extent( data1, d=>{ return d.x } );
const yExtent = d3.extent( data1, d=>{ return d.y } );

//X Axis
const x = d3.scaleLinear()
.domain([ xExtent[0], xExtent[1] ])
.range([0, width]);

//Y Axis
let y = d3.scaleLinear()
.domain([ yExtent[0], yExtent[1] ])
.range([ height, 0]);

function setupAxes(data){

    //bottom
     svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    
    //top
     svg.append("g")
      .call(d3.axisTop(x));
    
    //left y axis
     svg.append("g")
      .call(d3.axisLeft(y));
    
    //right y axis
     svg.append("g")
      .attr("transform", `translate(${width},0)`)
      .call(d3.axisRight(y));
    }

//Define the function plotGraph which takes in the data1
function update(data){

    let arr = [1];
    let tmp = [];
    
//Add the line
var u = svg.selectAll("path")
    .data(tmp)
    .exit()
    .remove();

d3.selectAll("g")
    .data(arr)
    .exit()
    .remove()

setupAxes(data);

u = svg.selectAll("svg")
    .data(arr);

u.enter()
   .append("path")
   .datum(data)
   .merge(u)
   .transition()
   .duration(1000)
   .attr("fill", "none")
   .attr("stroke", "steelblue")
   .attr("stroke-width", 1.5)
   .attr("d", d3.line()
   .x(function(d) { return x(d.x); })
   .y(function(d) { return y(d.y); })
   );
}

setupAxes(data1);
update(data1);