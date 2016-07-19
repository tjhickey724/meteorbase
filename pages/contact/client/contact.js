Template.contact.helpers({

users:function(){
	return BaSis.find();
}



})



Template.feedback.events({
	"click .js-yes": function(event){
		//console.log("clicked!!");
		const name = $("#name").val();
		//console.log(firstname);

		const email = $("#email").val();
		const message = $("#message").val();
		
		const obj = {name, email, message, userId:Meteor.userId()};
		console.dir(obj);
		BaSis.insert(obj);

		
	}
})