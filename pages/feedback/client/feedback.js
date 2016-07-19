Template.feedback.helpers({

feedbacks:function(){
	return Feedback.find();
}



})



Template.feedback.events({
	"click .js-yes": function(event){
		//console.log("clicked!!");
		event.preventDefault();
		const name = $(".js-name").val();
		//console.log(firstname);

		const date = $(".js-date").val();
		const message = $(".js-message").val();
		console.log(name);
		console.log(message);
		console.log(date);
		const obj = {name:name, date:date, message:message};
		console.dir(obj);
		Feedback.insert(obj);

		
	}
})