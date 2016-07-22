Template.feedback.helpers({

users:function(){
	return feedback.find();
}



})



Template.feedback.events({
	"click .js-yes": function(event){
		//console.log("clicked!!");
		const name = $("#name").val();
		//console.log(firstname);

		const date = $("#date").val();
		const message = $("#message").val();
		
		const users = {name, date, message, userId:Meteor.userId()};
		console.dir(users);
		BaSis.insert(users);

		
	}
})