Template.game.helpers({
  getQuestion: function(){
    return question.findOne({order: Session.get("questionNr")});
  },
  getAnswers: function(){
    if (Session.get("questionNr") > 0 && Session.get("questionNr") <= question.find().fetch().length){
      var q = question.findOne({order: Session.get("questionNr")}).name;
      return answer.find({qname: q});
    }
    else{
      return [];
    }
  },
  gameStart: function(){
    return Session.get("questionNr") == 0;
  },
  gameDone: function(){
    return Session.get("questionNr") > question.find().fetch().length
  },
  score: function(){
    return Meteor.user().lastScore;
  }
});

Template.game.events({
  "click .nextQuestion": function(event){
    var userAnswers = [
      document.getElementById("option-1") ? document.getElementById("option-1").checked : false,
      document.getElementById("option-2") ? document.getElementById("option-2").checked : false,
      document.getElementById("option-3") ? document.getElementById("option-3").checked : false,
    ];
    var nrOfQuestions = question.find().fetch().length;
    if (Session.get("questionNr") > 0){
      console.log("answers",userAnswers);
      // TODO Double lookup: Not ideal
      // Determine if answer was correct
      var q = question.findOne({order: Session.get("questionNr")}).name;
      var correctAnswers = answer.find({qname: q}).fetch();
      userAnswers.push(false);// Insert whether or not the person answered the question correct at the end
      for(var i=0;i<correctAnswers.length;i++){
        if (correctAnswers[i].correct){
          userAnswers[3] = userAnswers[i];
          break;
        }
      }
      // TODO If user refreshes Session disappears. Not ideal... (Store in DB?)
      Session.set("answer" + Session.get("questionNr").toString(),userAnswers);
    }
    // If we're done store all answers and check the score
    if (Session.get("questionNr") >= nrOfQuestions){
      var response = [];
      var correctCount = 0;
      for(var i=1;i<=nrOfQuestions;i++){
        var theanswer = Session.get("answer" + i.toString());
        correctCount = theanswer[3] ? correctCount+1 : correctCount;
        response.push(theanswer);
      }
      var score = (correctCount/nrOfQuestions)*100;
      Meteor.users.update({_id: Meteor.userId()},{$set: {lastScore: score}});
      Meteor.call("addResponse",Meteor.userId(),response,score);
    }
    Session.set("questionNr",Session.get("questionNr")+1);
  },
  "click .applicationOn": function(event){
    Session.set("gameOn",false);
    Session.set("applicationOn",true);
    AntiModals.dismissAll();
  },
  "click #login-buttons-logout": function(event){
    AntiModals.dismissAll();
    delete Session.keys['gameOn'];
    delete Session.keys['applicationOn'];
    delete Session.keys['questionNr'];
  }
})
