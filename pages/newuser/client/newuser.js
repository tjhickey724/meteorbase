Session.set("checked", false);

Template.newuser.helpers({
   disabled: function(){
     if (Session.get("checked"))
	 return "";
     else 
	 return "disabled";
   },

})

Template.newuser.events({
  "click .js-submit-newuser": function(event) {
     console.dir(event);
      event.preventDefault();
     const username = $("#username").val();
     const email = $("#email").val();
     const userId = Meteor.userId();
     const obj = {username,email,userId};
     UserInfo.insert(obj);
     Router.go("createfind");
   },

    "change #terms": function(){
       const checkbox = document.getElementById("terms"); 
       console.dir(checkbox);
       const isChecked = checkbox.checked;
       console.dir(isChecked);
	Session.set("checked",isChecked);
    },


})
