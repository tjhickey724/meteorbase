Template.bebasi.events({
	"click .js-yes": function(event){
		//console.log("clicked!!");
		const firstname = $("#firstname").val();
		//console.log(firstname);

		const lastname = $("#lastname").val();
		const obj = {firstname, lastname, userId:Meteor.userId()};
		console.dir(obj);
		BaSis.insert(obj);
	}
})