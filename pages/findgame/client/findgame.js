Template.findgame.helpers({
	gamelist: function(){
		return GameList.find({},{sort:{gametype:1}});
	}
})

Template.showgame.events({
	"click .js-join": function(event){
		event.preventDefault();
		console.log("clicked it");
		console.dir(this);
	        const userId = Meteor.userId();
	        console.dir(this);
	        if (_.contains(this.g.currentIds,userId)) {
                  const userId = Meteor.userId();
                  alert("You are already in this game");
                  return;
                }

                GameList.update(this.g._id,{$push:{currentIds:userId}});

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
