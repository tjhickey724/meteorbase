	function storevariables()
  	{
  		const type = $(".gametype").val();
  		 const current = parseInt($(".currentplayers").val());
  		 const needed = parseInt($(".playersneeded").val());
  		 const location = $(".loc").val();
  		 const cont = $(".contact").val();
  		 console.log(type);
  		 console.log(current);
  		 console.log(needed);
  		 console.log(location);
  		 console.log(cont);
  		 const gameinfo = {gametype: type, currentplays: current, need: needed, gameloc: location, contactinfo: cont}
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