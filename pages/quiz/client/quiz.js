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
    const gender = $(".js-gender").val();
    const lifestyle = $(".js-lifestyle").val();
    const messiness = $(".js-ocd").val();
    const musicPref = $(".js-music").val();
    const substance = $(".js-subFree").val();
    const sleepHabbits = $(".js-sleepHab").val();
    const sleepTime = $(".js-sleepTime").val();
    const personality = $(".js-personality").val();
    const pets = $(".js-pet").val();
    const petType = $(".js-petYes").val();
    const animal = $(".js-animal").val();
    const favColor = $("js-color").val();
    const hobby = $(".js-hobby").val();
    const movie = $(".js-movie").val();
    const cook = $(".js-cook").val();
    const sex = $(".js-sexLife").val();

    const quizResult = { age: age, gender: gender, lifestyle: lifestyle, messiness: messiness, musicPref: musicPref, 
                         substance: substance, sleepHabbits: sleepHabbits, sleepTime: sleepTime, personality: personality,
                         pets: pets, petType: petType, animal: animal, favColor: favColor, hobby: hobby, movie: movie,
                         cook: cook, sex: sex ,
                         userId: Meteor.userId()}

    console.log(quizResult);
    const oldval = QuizResults.findOne({userId:Meteor.userId()})
    if (oldval) QuizResults.remove(oldval._id);
    QuizResults.insert(quizResult);
   Router.go("myprofile")
  }
  ,

  "click .js-clear": function(event) {
    Meteor.call("clearData");
    console.dir(QuizResults);
  }


})

