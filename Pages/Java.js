function Angles(){
	var user_angle1= prompt("Enter your first Angle!");
	var user_angle2= prompt("Enter your second Angle!");
	if(180 - user_angle1 -user_angle2 >=0){
		alert(180-user_angle1 - user_angle2)
		//Here it would take both angles and find the third unkown angle//
	}
	if(180-user_angle1-user_angle2 <=0){
		alert("This can not be done. Please put two other angles.")
		//THis is made if the user have given angles that were not able to become a traingle//
	}
}

function Years(){
	var user_century= prompt("What is the year you want?");
	 if(user_century%1000 ==0){
		alert("Your are in the " + user_century/100 + " Centrey!")
		}
	else if(user_century>=0 && user_century<= 100){
		alert("You are in the 1st Centrey!");
	}
	else{

		alert("You are in the " + Math.floor(user_century / 100 + 1 ) + " Centrey!")
		}
	}
//Math.floor is used to round the number created down//
function Numbers(){
for(var i=1; i<=100; i++){
	if(i%4 ===0 && i%10 ===0){
		console.log("TenFour!")
	}
	else if(i%10 ===0){
		console.log("ten")
	}
	else if(i%4 ===0){
		console.log("four")
	}
	else{
		console.log(i);
	}
}
}
//the numbers will be shown in console//
function Alternative(){
	var txt = prompt("What is your sentence/word??");
	var character = txt.toLowerCase().split("");
	for(var i=0; i <character.length; i+=2){
		character[i] = character[i].toUpperCase();
	}
	console.log(character.join(""));
}
function login(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username=="RahulMarwaha" && password == "HelloWorld"){
		alert("Login accepted");
	}
	else{
		alert("Login denied. Please Try again or change your password!")
	}
}
function Counter(){
	var txt = prompt("Type in a word or a sentance");
	console.log(txt + " is " + txt.length + " characters long!!")
}
function Encryption(){
	var str =document.getElementById("Message").value;
	//The variable str is taking what the user had in the input/form and creating it into a value
	var changes ={
		a:'e', b:'v', c:'u', d:'l',
		e:'a', f:'m', g:'p', h:'r',
		i:'t', j:'q', k:'x', l:'d',
		m:'f', n:'s', o:'t', p:'g',
		q:'j', r:'h', s:'n', t:'o',
		u:'c',	v:'b', w:'y', x:'k',
		y:'w', z:'z',$:'$',
	}
	//All letters are switched in a way that their frequency levels would be same or a little bit off. So that the person trying to break my code will have to work a little harder.
	//The money sign is being used as a symbol to represent a space
	//The variable key is what I will give to my friend to know what the code means when it is in our code
	str = str.toLowerCase();
	var encryptor = '';
	for(var i=0; i<str.length; i++){
		encryptor += changes[str[i]];
	}
	//This for loop goes through the whole message that the user put in the form and changes it with the assigned letter it has in the variable key
 var answer = alert(encryptor);
}
function Decryptor(){
	var str = document.getElementById("message").value;
		//The variable str is taking what the user had in the input/form and creating it into a value

	var changes ={
		a:'e', b:'v', c:'u', d:'l',
		e:'a', f:'m', g:'p', h:'r',
		i:'t', j:'q', k:'x', l:'d',
		m:'f', n:'s', o:'t', p:'g',
		q:'j', r:'h', s:'n', t:'o',
		u:'c', v:'b', w:'y', x:'k',
		y:'w', z:'z',$:'$',
	}
	//All letters are switched in a way that their frequency levels would be same or a little bit off. So that the person trying to break my code will have to work a little harder.
	//The money sign is being used as a symbol to represent a space
	//The variable key is what I will give to my friend to know what the code means when it is in our code
	var decryptor ='';
	for(var i=0; i<str.length; i++){
		decryptor += changes[str[i]];
	}
		//This for loop goes through the whole message that the user put in the form and changes it with the assigned letter it has in the variable key

	return decryptor
}