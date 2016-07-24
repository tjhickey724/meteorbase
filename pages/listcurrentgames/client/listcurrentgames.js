Template.listcurrentgames.helpers({
  mygames: function(){
    return GameList.find({currentIds:Meteor.userId()},{sort:{gametype:1}});
  }
})

Template.currentgames.events ({
 "click .js-leave": function(event){
 	
 }



})

