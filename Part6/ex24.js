let intr = d3.interpolate( [20, 40, 4], [1, 12, 10]);
let cc = d3.interpolate('red', 'green');

let date1 = new Date(2022,1,16);
let date2 = new Date(2000,5,07);
let dateInterpolate = d3.interpolateDate(date1,date2);

const u = d3.select("body");

// Append Heading
u.append("h5")
.text("Exercise 24:")

// Append body text for exercise 24
u.append("div")
.text("Type of returned function is: " + typeof (intr))
.append("div")
.text("intr(0.2) => " +  intr(0.2))
.append("div")
.append("p")
.text(" ")
.append("div")
.text("The function returned is called an 'interpolator', given two values 'a' and 'b', it takes in a parameter 't' with the domain [0,1].") 
.append("div")
.text("'t=0' will return 'a' and 't=1' will return 'b'. Values in between will interpolate between 'a' and 'b', biased towards one or the other based on 't'.")
.append("div")
.append("p")
.text(" ")

// Append Heading
u.append("h5")
.text("Exercise 25:")

// Append body text for exercise 25
u.append("div")
.text("'cc' is the interpolator between ")
.append("span")
.text('red ')
.style("color","red")
.style("font-weight","bold")
.append("span")
.text('and ')
.style("color","DarkSlateGrey")
.style("font-weight","normal")
.append("span")
.text('green ')
.style("color","green")
.style("font-weight","bold")
.append("div")
.text("The color returned from cc(0.5) is: ")
.style("font-weight","normal")
.append("span")
.text(cc(0.5))
.style("color",cc(0.5))
.style("font-weight","bold")
.append("div")
.append("p")
.text(" ")

// Append Heading
u.append("h5")
.text("Exercise 26:")

// Append body text for exercise 26
u.append("div")
.text("'date1' is: "+date1 + " and 'date2' is: " + date2)
.style("font-weight","normal")
.append("div")
.text("Interpolating between the two gives the date: " + dateInterpolate(0.5));