Template.bebasi.events({
	"click .js-yes": function(event){
		//console.log("clicked!!");
		const firstname = $("#firstname").val();
		//console.log(firstname);

		const lastname = $("#lastname").val();
		const age = $("#age").val();
		const email = $("#email").val();
		const zip = $("#zip").val();
		const obj = {firstname, lastname, email, age, zip, userId:Meteor.userId()};
		console.dir(obj);
		BaSis.insert(obj);

		
	}
})