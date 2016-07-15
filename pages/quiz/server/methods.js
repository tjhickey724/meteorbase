Meteor.methods({
  "clearData": function() {
  	QuizResults.remove({});
  }
})