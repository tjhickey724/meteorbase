Template.quiz.helpers(
 {
   survey: function() {
     return quiz.find();
   }
 }
)

Template.quiz.events ({
  "click .js-submit-quiz": function(event) {
    console.log("!")
    const age = $(".js-age").val();
    const gender = document.getElementById("js-gender").value; 
    const other = $(".js-otherGender").val();
    const zipcode = $(".js-zipcode").val();
    const lifestyle = document.getElementById("js-lifestyle").value;
    const ocd = document.getElementById("js-ocd").value;
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

    const quizResult = { age: age, gender: gender, zipcode: zipcode, lifestyle: lifestyle, ocd: ocd, music: music, 
        substance: substance, sleepHabbits: sleepHabbits, sleepTime: sleepTime, personality: personality,
        pets: pets, petType: petType, animal: animal, color: color, hobby: hobby, movie: movie,
        cook: cook, sex: sex, userId: Meteor.userId() } 


    //console.log(gender);
    //console.log(lifestyle);
                         //pets: pets, petType: petType, animal: animal, favColor: favColor, hobby: hobby, movie: movie,
                         //cook: cook, sex: sex ,
                         //userId: Meteor.userId()}

    console.log(quizResult);
    const oldval = QuizResults.findOne({userId:Meteor.userId()})
    if (oldval) QuizResults.remove(oldval._id);
    QuizResults.insert(quizResult);
   Router.go("myprofile")
  }
  ,

  "click .js-clear": function(event) {
    Meteor.call("clearData");
    console.dir(quizResult);
  }


})

