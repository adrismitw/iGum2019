// your code goes here ...
	var age=[];
	var relationship=[];
	var smoker=[];
	var object={age:age , relationship:relationship, smoker: smoker };
	var next=0;
	

//check if person has added anyone
	if(document.getElementById("add").click()){
		//retrieve the values
		var ageIn= document.getElementsByName("age");
		var relationshipIn= document.getElementsByName("rel");
		var smokerIn= document.getElementsByName("smoker");

		//restrict values
		if(stringToint(ageIn)<1){
			document.getElementById("debug").innerHTML("That is far too young!! Enter another age please!\n");
	
		}else if(relationshipIn== "---"){
			document.getElementById("debug").innerHTML("Please make this person more relatable by entering a relationship. #CantRelate owo\n");
	
		}else if(smokerIn==NULL){
			document.getElementById("debug").innerHTML("Enter smoking or non smoking, please? :)\n");
		}else{
		//add the family member to the tree
		addFam(ageIn,relationshipIn,smokerIn);
		}
	}
	
//check to see if submit button pressed
if(document.getElementById("submit").click()){

	
	if(object==NULL)
		document.getElementById("debug").innerHTML("There is no family to print out! Add some!\n");
		
		//start printing the 'tree' or list of family members or people
	var i;
	for( i=0; i < object.length(); i++){
		document.body.innerHTML("age:"+ object.age[i]+ "\n relationship:" + object.relationship[i]);
		document.body.innerHTML("\n smoker?" + object.smoker[i]+ "\n");
	}
	
	//create a button to return to previous
	var btn= document.createElement("BUTTON").innerHTML("Create a New Family"); 
	btn.classListadd('newFam');
	document.body.appendChild(btn);
	if(document.getElementById(".newFam").click()){
		//refresh page
		window.location.reload();
	
	}
}


//This function will create an object for family tree
function addFam(){
	object.age[next]=ageIn;
	object.relationship[next]=relationshipIn;
	object.smoker[next]=smokerIn;
	next++;
}

