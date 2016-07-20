Session.set("gametype","Choose Filter");

Template.findgame.helpers({
	gamelist: function(){
		const gametype = Session.get("gametype").toLowerCase();
		if (gametype=="choose filter"){
			return GameList.find({},{sort:{gametype:1}});
		}
		
		const games = 
		GameList.find({gametype:gametype},{sort:{gametype:1}});
		if (games.count()==0) {
			alert("No Games Exist With that Filter");
			return GameList.find({},{sort:{gametype:1}});
		}
		return games;

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
function storedvariables1()
{

const base = $(".sports").val();
if(base == GameList.type){
	GameList.find(base)
}
else{

	alert("No Games Exist With that Filter");
}
}

Template.findgame.events({
"change .sports": function(event){
	Session.set("gametype",$(".sports").val());
      //storedvariables1();
}
})
