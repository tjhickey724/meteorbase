Template.layout2.helpers({
  noProfile: function(){
      const userId = Meteor.userId();
      const loggedIn = (userId != null);
      const userInfo = UserInfo.findOne({userId:userId});
      const hasProfile = (userInfo!= null);
      console.dir({userId, loggedIn, userInfo, hasProfile});
      return loggedIn && !hasProfile;
  }
})
