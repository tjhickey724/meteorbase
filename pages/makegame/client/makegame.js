	function storevariables()
  	{  
  		const type = $(".gametype").val();
  		 const current = parseInt($(".currentplayers").val());
  		 const needed = parseInt($(".playersneeded").val());
  		 const location = $(".loc").val();
  		 const cont = $(".contact").val();
       const gametime = $(".time").val();
	    const owner = Meteor.userId();
    
      if(isNaN(needed) === true || isNaN(current) === true || type == "" || location == "" || gametime == "" || cont == "")
      {
        alert("Please Complete All Fields Correctly");
        preventDefault();
      }
  		 console.log(type);
  		 console.log(current);
  		 console.log(needed);
  		 console.log(location);
  		 console.log(cont);
       console.log(gametime);
  		 const gameinfo = {gametype: type, currentplays: current, need: needed, gameloc: location, contactinfo: cont, starttime: gametime, currentIds: [Meteor.userId()], owner:owner};
       console.dir(gameinfo);
  		  GameList.insert(gameinfo);
  	}

Template.makegame.events({
  "click .js-submit": function(event){
    event.preventDefault();
      storevariables();
      Router.go('findgame');
  },


})

