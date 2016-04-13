var key = document.querySelectorAll(".wrapper td"); //Select all table cells for calculator buttons
var result;//dispaly the result

	for(var i = 0; i < key.length; i++) {
		key[i].onclick = function(e) {
			console.log(e);
			var input = document.querySelector(".display td");
			var inputVal = input.innerHTML;
			var printInput = this.innerHTML;
			console.log(printInput);


			
			if(printInput === "CE"){
				input.innerHTML = input.innerHTML.slice(0, -1);
				
			}else if (printInput === "AC") {
				inputVal = "";
			}


			else if (printInput === "="){
				result = inputVal;
				input.innerHTML = myEval(result);
			
       			;
        		}else{
				input.innerHTML += printInput;
      		}
function myEval(inputValue)
{//
	var n = inputValue.indexOf("gt")//Find index of power
	//If n == -1 it means the opoerator is something else so the Eval function will take care of it in Else block.
	if (n > -1)
	{
		var number1 = inputValue.substring(0,n);
		var number2 =  inputValue.substring(n+2, inputValue.length);
		return Math.pow(number1, number2);
	}
else
{
return eval(inputValue);
}
}


		}
	}

