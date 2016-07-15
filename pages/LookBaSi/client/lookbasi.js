Template.lookbasi1.helpers({
	BaSis: function() {return BaSis.find();},


})

Template.lookbasi1.events({
	"click .js-delete": function(event){
		BaSis.remove(this.basi._id);
	}
})