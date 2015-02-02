Meteor.publish("question",function(){
  // TODO probably add orderNr as argument here.
  return question.find();
});

Meteor.publish("answer",function(){
  // TODO probably add security check here
  return answer.find();
});

Meteor.publish('userData', function() {
  if(!this.userId) return null;
  return Meteor.users.find({}, {fields: {"admin": 1, "lastScore": 1}});
});

Meteor.users.allow({
  update: function(userId, docs,fields) {
    if (docs._id == userId){ // can only update my own profile
      return fields.indexOf("admin") == -1; // refuse update if fields to update contains admin
    }
    else{
      return false;
    }
  }
});

/*Meteor.publish("kiss", function () {
  return KISS.find({owner: this.userId});
});

Meteor.publish("data",function(){
  return data.find();
})

Meteor.publish("dataAPI",function(){
  // TODO SECURITY HERE!! Check that the user logged on is a member of the company described in the dataAPI being returned, such that companies can't see each others data
  return dataAPI.find();
});
*/
