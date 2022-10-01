//document.write("Where is my JS code?");
//window.alert(5 + 6);
//window.alert(5 + 6);
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);

/*//A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt('Please enter your name', 'Type your name here');
document.write(user_name);

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt();       //  open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"

// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt('Please enter your name', 'Type your name here');
document.write(user_name);*/

/*x = 22;
const y =33;
document.writeln(x + y)  ;
document.writeln("<br>");
document.writeln(x += 33);*/

// document.writeln("<button onclick='condition()'>Conditional Test</button>")
//
// function condition()
// {
//   x = confirm("Are you sure you want to proceed?");
//   if(x)
//   {
//     document.writeln("You chose Okay!");
//   }
//   else
//   {
//     document.writeln("You chose Cancel!");
//   }
// }

// arr = ["Joe","April","Mark","Sara"];
// for (var i=0; i < arr.length; i++)
// {
//   document.writeln(arr[i],"<br>");
// }

//A prompt box is used to prompt users to input a value before entering a page.

//var user_name = window.prompt('Please enter your name', 'Type your name here');
//document.write('<h1>Hello, Welcome to my webpage, '+user_name +' !</h1>');
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
	        document.write("<tr>");
	        for(var column = 0; column <webmaps[0].length; column++){
	            document.write("<td>"+webmaps[row][column]+"</td>");
	        }
	    document.write('</tr>')
	    }
	    document.write('</table>')
	}
