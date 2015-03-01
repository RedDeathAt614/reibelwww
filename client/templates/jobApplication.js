var testSession = function(test){
  return Session.get("selector") == test;
}

var sessionSet = function(value){
  return Session.set("selector",value);
}

Template.jobApplication.helpers({
  none: function(){
    if(Session.get("selector") === undefined){
      //createTimeline();
    }
    return Session.get("selector") === undefined;
    //den begyndte pludselig på disse her underlige : Error: Expected template rendered with Blaze.render
    //overvej at refreshe til seneste commit. men har lavet røv meget siden..
    /*if (testSession("none")){
      console.log("hejsa");
      //createTimeline();
    }
    return testSession("none");*/
  },
  biomicore: function(){
    return testSession("biomicore");
  },
  cphftw: function(){
    return testSession("cphftw");
  },
  university: function(){
    return testSession("university");
  },
  kollektiv: function(){
    return testSession("kollektiv");
  },
  mothership: function(){
    return testSession("mothership");
  },
  creative: function(){
    return testSession("creative");
  },
  media: function(){
    return testSession("media");
  },
  realtime: function(){
    return testSession("realtime");
  },
  cv: function(){
    return testSession("cv");
  }
});

Template.jobApplication.events({
  "click .next": function(event){
    if (testSession(undefined)){
      sessionSet("biomicore");
    }
    else if (testSession("biomicore")){
      sessionSet("university");
    }
    else if (testSession("university")){
      sessionSet("cphftw");
    }
    else if (testSession("cphftw")){
      sessionSet("kollektiv");
    }
    else if (testSession("kollektiv")){
      sessionSet("mothership");
    }
    else if (testSession("mothership")){
      sessionSet("creative");
    }
    else if (testSession("creative")){
      sessionSet("media");
    }
    else if (testSession("media")){
      sessionSet("realtime");
    }
    else if (testSession("realtime")){
      sessionSet(undefined);
    }
  },
  "click #biomicore": function(event){
    sessionSet(event.target.id);
  },
  "click #cphftw": function(event){
    sessionSet(event.target.id);
  },
  "click #kollektiv": function(event){
    sessionSet(event.target.id);
  },
  "click #drone": function(event){
    sessionSet(event.target.id);
  },
  "click #photography": function(event){
    sessionSet(event.target.id);
  },
  "click #reibels": function(event){
    sessionSet(event.target.id);
  },
  "click #media": function(event){
    sessionSet(event.target.id);
  },
  "click #realtime": function(event){
    sessionSet(event.target.id);
  },
  "click #cv": function(event){
    sessionSet(event.target.id);
  },
  "click #none": function(event){
    sessionSet(undefined);
  }
})
