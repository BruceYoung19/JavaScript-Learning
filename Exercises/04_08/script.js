// constants 
const AIR = 7;
console.log("Air constant = ", AIR);

// let
function logScope(){
	var localVar = 2;

	
	// 
	if (localVar){
		var localVar = "im different";
		console.log("Nested localVar:", localVar);
	}

	console.log("log scope = ",localVar );
}

logScope();