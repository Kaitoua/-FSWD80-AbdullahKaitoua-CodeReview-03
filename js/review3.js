
function calculateInsurance () 

{

    var selectme = document.getElementById("country");

    //Get selected value from dropdown list
    var country = selectme.options[selectme.selectedIndex].text;

    switch (country) 
    {
		case "Austria":
			a = 100;
			b = 50;
			c = 0;
			break;
		case "Hungary":
			a = 120;
			b = 100;
			c = 0;
			break;
		case "Greece":
			a = 150;
			b = 50;
			c = 3;
			break;
		default:
			document.getElementById("mycalc").innerHTML= "please fill out the formula";
			break;
	}

		    var myhorsepower = Number(document.getElementById("horsepower").value);

		    var myage = Number(document.getElementById("age").value);

		    var res = myhorsepower * a / (myage + c) + b;

		    var myname = document.getElementById("name").value;


		    mytext = myname + ", your insurance costs "+ Math.floor(res) + "€";

			document.getElementById("mycalc").innerHTML = mytext;
  }



document.getElementById("calcMe").addEventListener("click",calculateInsurance);


