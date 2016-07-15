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
    const musicPrf = $(".js-music").val();
    const substance = $(".js-subFree").val();
    const sleepHabbits = $(".js-sleepHab").val();
    const sleepTime = $(".js-sleepTime").val();
    const personality = $(".js-personality").val();
    const pets = $(".js-pet").val();
    const typeOfPet = $(".js-petYes").val();
    const animal = $(".js-animal").val();
    const favColor = $("js-color").val();
    const favHobby = $(".js-hobby").val();
    const movieGenre = $(".js-movie").val();
    const cook = $(".js-cook").val();
    const sex = $(".js-sexLife").val();

    console.log(age);
    console.log(gender);
    console.log(substance);
    console.log(typeOfPet);
    console.log(favColor);
    console.log(movieGenre);

    const quizResult = { age: age, gender: gender, lifestyle: lifestyle, messiness: messiness, musicPrf: musicPrf, 
                         substance: substance, sleepHabbits: sleepHabbits, sleepTime: sleepTime, personality: personality,
                         pets: pets, typeOfPet: typeOfPet, animal: animal, favColor: favColor, favHobby: favHobby, movieGenre: movieGenre,
                         cook: cook, sex: sex }

    console.log(quizResult);
    QuizResults.insert(quizResult);
   
  }


})