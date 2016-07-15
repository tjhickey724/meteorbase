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
		if(this.g.need <= 1)
		{
			GameList.remove(this.g._id);

		}
		else
		{

		GameList.update(this.g._id,{$inc:{currentplays:1}})
		GameList.update(this.g._id,{$inc:{need:-1}})
		}
	}
})