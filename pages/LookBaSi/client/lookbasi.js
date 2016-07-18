Session.set("zipcode",null);


Template.lookbasi1.helpers({

	BaSis: function() {
	    const zipcode = Session.get("zipcode");
	    if (zipcode==null || zipcode=="") 
		return BaSis.find();
	    if (zipcode!=null && zipcode != "")
		return BaSis.find({zip:zipcode});
       },

})


Template.lookbasi1.events({
        "click .js-submit": function(event) {
	    console.log("clicked it");
	    Session.set("zipcode",$(".js-zipcode").val());
	    console.log(Session.get("zipcode"));
	},

	"click .js-delete": function(event){
		BaSis.remove(this.basi._id);
	},

})
