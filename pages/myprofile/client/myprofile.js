const age = $(".js-age").val();
const gender = document.getElementById("js-gender").value; 
const other = $(".js-otherGender").val();
const lifestyle = document.getElementById("js-lifestyle").value;
const messiness = document.getElementById("js-ocd").value;
const musicPref = document.getElementById("js-music").value;
const substance = document.getElementById("js-subFree").value;
const sleepHabbits = $(".js-sleepHab").val();
const sleepTime = document.getElementById("js-sleepTime").value;
const personality = document.getElementById("js-personality").value;
const pets = document.getElementById("js-pet").value;
const petType = $(".js-petYes").val();
const animal = document.getElementById("js-animal").value;
const color = $(".js-favColor").val();
const hobby = document.getElementById("js-hobby").value;
const movie = document.getElementById("js-movie").value;
const cook = document.getElementById("js-cook").value;
const sex = document.getElementById("js-sexLife").value;
   
   

 //console.dir(item);
 //UserInfo.insert(item);

Template.myprofile.helpers({
	mydata:function(){
		console.log("getting mydata");
	   const val =  QuizResults.findOne({userId:Meteor.userId()});
	   console.dir(val); 
	   return [val];
	   // return QuizResults.find();
	}
})