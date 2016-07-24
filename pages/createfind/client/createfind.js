Template.createfind.events({
	"click .goToMake": function(event){
		event.preventDefault();
		console.log("clicked it");
		Router.go('makegame');
	}
})

Template.createfind.events({
	"click .goToFind": function(event){
		event.preventDefault();
		console.log("clicked it");
		Router.go('findgame');
	}
})