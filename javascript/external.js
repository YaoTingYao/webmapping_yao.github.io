function welcome()

{

let a = 'Please enter your name.';
let b = 'Type your name here.';

// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);

message = '<h1>Hello, welcome to my webpage, ' + user_name + '!</h1>'

return message

}

var webmaps =
[
    ["National Risk Index for Natural Hazards",
    "https://hazards.fema.gov/nri/map",
    "Visualizes natural hazard risk metrics developed by FEMA. The primary purpose to identifies communities most at risk to 18 natural hazards in county and census tract level. It includes data about expected annual losses from natural hazards, social vulnerability and community resilience."
    ],
    ["Active US Wildfires with Smoke Forecasts",
    "https://storymaps.esri.com/stories/usa-wildfires/",
    "Current fires and associated smoke forecasts developed by Esri.It designs for general use and helps people to check the changes of magnitude through timeline within a day. GIS functionality is smoke density map. "
    ],
];

function webmap_table(){
	    document.write("<table width=100%>")
	    for(var row = 0; row <webmaps.length; row++){
        if (row < 1) {document.write("<tr style='background-color:rgb(204, 156, 172);'>")} else {document.write("<tr style='background-color:rgb(209, 196, 233);'>")};
	        for(var column = 0; column <webmaps[0].length; column++){
            document.write("<td>"+webmaps[row][column]+"</td>");
	        }
	    document.write('</tr>')
    }
	    document.write('</table>')
	}

  window.onload=function() { // the page has loaded - anonymous function
    document.getElementById("button").onclick=function() { // anonymous function
      var  a=document.getElementById("length").value; // using commas to separate vars
      var  b=document.getElementById("width").value;
      var output = document.getElementById("output");

      output.innerHTML = a * b;
    }
  }
