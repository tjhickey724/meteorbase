Template.findgame.helpers({
	gamelist: function(){
		return GameList.find();
	}
})

Template.showgame.events({
	"click .js-join": function(event){
		event.preventDefault();
		console.log("clicked it");
		console.dir(this);
		GameList.update(this.g._id,{$inc:{currentplays:1}})
		GameList.update(this.g._id,{$inc:{need:-1}})

	}
})