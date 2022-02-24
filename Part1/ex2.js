// Create an array of numbers
let num = [100, 200, 350];

// Create a body variable
let paragraph = d3.select("body")

// For all elements in the num array
for(let i = 0; i<num.length; i++){
   // Append a span to the body
   paragraph.append("span")
   .text(' num ' + i + ' ');
   // Append a div to the body after the span
  paragraph.append("div")
  .text('value = ' + num[i]);
}
