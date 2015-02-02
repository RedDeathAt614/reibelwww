Template.main.events({
  "click .gameon": function(event){
    Session.set("gameOn",true);
    Session.set("applicationOn",false);
    Session.set("questionNr",0);
  },
  "click .applicationOn": function(event){
    Session.set("gameOn",false);
    Session.set("applicationOn",true);
  },
  "click .startOn": function(event){
    Session.set("gameOn",false);
    Session.set("applicationOn",false);
  },
});

Template.main.helpers({
  gameOn: function(){
    return Session.get("gameOn");
  },
  applicationOn: function(){
    return Session.get("applicationOn");
  }
});
