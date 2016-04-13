var key = document.querySelectorAll(".wrapper td");
var result;
var findResult;
	for(var i = 0; i < key.length; i++) {
		key[i].onclick = (function(e) {
			console.log(e);
			var input = document.querySelector(".display td");
			var inputVal = input.innerHTML;
			var printInput = this.innerHTML;
			console.log(printInput);



			
				if(printInput === "CE"){
            input.innerHTML = printInput[printInput.length-1];
				}else if (printInput === "AC") {
				input.innerHTML = "";
			}else if (printInput === "="){
				result = input.innerHTML;
				input.innerHTML = eval(result);
			}else{
			input.innerHTML += printInput; }
			console.log(input)
		})
		

	}