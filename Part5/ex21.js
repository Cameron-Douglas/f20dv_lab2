// create 2 data_set
const data1 = [
    {group: "A", value: 5},
    {group: "B", value: 20},
    {group: "C", value: 9}
   ];

   const data2 = [
    {group: "A", value: 10},
    {group: "B", value: 2},
    {group: "C", value: 18}
   ];

   const data3 = [
    {group: "A", value: 17},
    {group: "B", value: 4},
    {group: "C", value: 9}
   ];

   // set the dimensions and margins of the graph
   const margin = {top: 30, right: 30, bottom: 70, left: 60};
   const width = 460 - margin.left - margin.right;
   const height = 400 - margin.top - margin.bottom;

   // append the svg object to the body of the page
   var svg = d3.select('body')
    .append('div')
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

   // X axis
   var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data1.map(function(d) { return d.group; }))
    .padding(0.2);
   svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

   // Add Y axis
   var y = d3.scaleLinear()
    .domain([0, 20])
    .range([ height, 0]);
   svg.append("g")
    .attr("class", "myYaxis")
    .call(d3.axisLeft(y));

    var xtop = d3.scaleBand()
    .range([ 0, width ])
    .domain(data1.map(function(d) { return d.group; }))
    .padding(0.2);
   svg.append("g")
    .attr("transform", "translate(0," + y.domain[1] + ")")
    .call(d3.axisTop(xtop));

   svg.append("g")
    .attr("class", "myYaxis")
    .attr("transform", "translate("+ width + ",0 )")
    .call(d3.axisRight(y));

   // A function that create / update the plot for a given variable:
   function update(data, color) {
    var u = svg.selectAll("rect")
    .data(data)
    u.enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
    .attr("x", function(d) { return x(d.group); })
    .attr("y", function(d) { return y(d.value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill", function(){
        switch(color){
            case 1:
                return "#69b3a2";
                break;
            case 2:
                return "#008080";
                break;
            case 3:
                return "#7DD0D7";
                break;
        }
    } )
   }
   // Initialize the plot with the first dataset
   update(data1,1)

   svg.selectAll("rect")
   .on("mouseover", function(event, d, i){
    
       svg.append("text")
       .attr('class', 'val') 
       .attr("x", function() { return -15; })
       .attr("y", function() { return y(d.value) ; })
       .attr("fill","DarkSlateGrey")
       .transition()
       .duration(1000)
       .attr("x", function() { return (x(d.group)+(x.bandwidth()/2)-5); })
       .attr("y", function() { return y(d.value)-10 ; })
       .attr("font-weight","bold")
       .text( function() { return d.value; } ); // Value of the text
      
    })
    .on("mouseout", function(event, d,i){
    
        d3.selectAll('.val')
        .attr("x", function() { return (x(d.group)+(x.bandwidth()/2)-5); })
       .attr("y", function() { return y(d.value)-10 ; })
       .transition()
       .duration(1000)
       .attr("x", function() { return -15; })
       .attr("y", function() { return y(d.value) ; })
       .transition()
       .duration(500)
       .attr("font-size","1px")
        .remove()
     })