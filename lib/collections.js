question = new Mongo.Collection("question");
answer = new Mongo.Collection("answer");
response = new Mongo.Collection("response");

Meteor.methods({
  addQuestion: function(name,text){
    if (Meteor.user().admin){
      question.insert({
        name: name,
        text: text,
        order: question.find().fetch().length+1 // default insert question at length +1, then use swap to swap them around
      });
    }
    else{
      throw new Meteor.Error("You're not the admin. I curse you.");
    }
  },
  addAnswer: function(qname,text,correct){
    if (Meteor.user().admin){
      answer.insert({
        qname: qname, // Name of the question: Used to permanently lock the answer to a question
        text: text,
        correct: correct,
        answerNr: answer.find({qname: qname}).fetch().length+1 // Automatically insert the answer as the last one
      });
    }
    else{
      throw new Meteor.Error("You're not the admin. I curse you.");
    }

  },
  addResponse: function(userId,answers,score){
    if (userId == Meteor.userId()){
      response.insert({
        userId: userId,
        answer: answers,
        score: score
      });
    }
    else{
      throw new Meteor.Error("Are you trying to save an answer to somebody elses profile? You naughty boygirl");
    }
  }
})

/*KISS = new Mongo.Collection("kiss");
data = new Mongo.Collection("data"); // Data which goes directly into graphs
dataAPI = new Mongo.Collection("dataAPI"); // Data that comes from incoming and outgoing data API
//apiDataSubscriber = new Mongo.Collection("apiDataSubscriber"); // API key and customer name collection
subscriptionIncomingAPI = new Mongo.Collection("subscriptionIncomingAPI"); // API calls that customers call on our service to deliver data
subscriptionOutgoingAPI = new Mongo.Collection("subscriptionOutgoingAPI"); // API calls that we make on behalf of customers to external services (e.g. Kissmetric etc)

Meteor.methods({
  addKISS: function (kissToken,userid,date) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    KISS.insert({
      token: kissToken,
      owner: userid,
      createdAt: date
    });
  },

  // Methods related to graph data (data-collection)
  addData: function(name,x,y){
    // TODO what kind of security should be here?
    data.insert({
      name: name,
      x: x,
      y: y
    });
  },
  updateData: function(id,name,x,y){
    data.update({_id: id},{name: name, x: x, y: y});
  },
  upsertData: function(name,x,y){
    data.upsert({name: name, x: x},{name: name, x: x, y: y});
  },
  removeAllData: function(){
    data.remove({});
  },

  // Methods related to data API subscriber (subscriptionOutgoingAPI), i.e. data that users send to us
  addSubscriptionIncomingAPI: function(customer,userid){
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    // TODO Check that the userid is related to the customer
    subscriptionIncomingAPI.insert({
      customer: customer,
      apikey: userid
    });
  },

  // Metods related to our service subscribing to external APIs
  addSubscriptionOutgoingAPI: function(userID,name,time,params){

  return subscriptionOutgoingAPI.insert({
    ownerID: userID,
    name: name,
    time: time,
    params: params
  });
}

});
*/
