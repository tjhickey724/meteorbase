Template.bebasi.events({
	"click .js-yes": function(event){
		//console.log("clicked!!");
		const firstname = $("#firstname").val();
		//console.log(firstname);

		const lastname = $("#lastname").val();
		const age = $("#age").val();
		const email = $("#email").val();
		const zip = $("#zip").val();
		const phone = $("#phone").val();
		const describe = $("#describe").val();
		const obj = {firstname, lastname, email, phone, age, zip, describe, userId:Meteor.userId()};
		console.log(phone);
		console.dir(obj);
		BaSis.insert(obj);
		alert("You've successfully submitted your information! ");
		
	}
})