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
    console.log("test",testSession("biomicore"));
    return testSession("biomicore");
  },
  cphftw: function(){
    return testSession("cphftw");
  },
  kollektiv: function(){
    return testSession("kollektiv");
  },
  drone: function(){
    return testSession("drone");
  },
  reibels: function(){
    return testSession("reibels");
  },
  photography: function(){
    return testSession("photography");
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
    console.log("HAI HAI");
    sessionSet("biomicore");
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

Template.jobApplication.rendered = function(){
  createTimeline();
}

var createTimeline = function(){
  var dataObject = {
    "timeline":
  {
    "headline":"My timeline",
    "type":"default",
    "text":"<p>This is a timeline that interactively show my life so far and why I'm relevant for the position as Assistant Professor at MIT Media Lab</p>",
    "asset": {
      "media":"http://localhost:3000/images/me.jpg",
      //"credit":"Credit Name Goes Here",
      "caption":"Hi, this is me."
    },
    "date": [
  {
    "startDate":"1983,7,28",
    "endDate":"1983,7,28",
    "headline":"Michael is born",
    "text":"<p>I'm born in Gentofte, a suburb North of Copenhagen, Denmark and raised in that area. Son of lawyer and a paralegal. I have one 5 year younger sister, who today is a kindergarten teacher.</p>",
    "tag":"Inventive",
    //"classname":"optionaluniqueclassnamecanbeaddedhere",
    "asset": {        "media":"https://www.google.dk/maps/place/2820+Gentofte/@55.7248855,12.550578,12z/data=!4m2!3m1!1s0x46524df13122cd2b:0x6bccfd37a50cd28b",
    "thumbnail":"http://localhost:3000/images/timeline/gentofte.png",
  }
},
{
  "startDate":"1989,6",
  "endDate":"1989,6",
  "headline":"I'm going to be an inventor",
  "text":"<p> The first time I remember wanting to be an inventor was around the age of 5, when I realized that there seemed to be a relationship between my parents being happy and the weather. So I remember trying to build a machine to control the weather out of paper. My first invention wasn't particularly succesful, but being and enjoying observantion with the purpose to understand is a part of my nature I think I have from back then. Unfortunately, I don't have my original blueprints...</p>",
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/weather.png",
    "thumbnail":"http://localhost:3000/images/timeline/weather.png"
  }
},
{
  "startDate":"1989,8,1",
  "endDate":"2002,5,31",
  "headline":"Attending public school and highschool",
  "text":"<p>I went to school at Ordrup public school. Despite the fact that I stutter (and do so occasionally today) I'm a grade A student especially in mathematics and science. That continues at Gammel Hellerup Gymnasium (my highschool).</p>",
  "tag":"Education",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/skole.jpg",
    "thumbnail":"http://localhost:3000/images/timeline/skole.jpg",
  }
},
{
  "startDate":"1990,7",
  "endDate":"1990,7",
  "headline":"Disappointment",
  "text":"<p>The first time I remember the urge to build was when I around the age of 7 or 8 got a Lego pirate ship as a birthday present. I started to assemble part of it but it was too late in the evening so I went to sleep before finishing it. When I woke up my parents had built it for me so I could play with it. Very sweet thing to do but I just wanted to build it...</p>",
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/lego.jpg",
    "thumbnail":"http://localhost:3000/images/timeline/lego.jpg"
  }
},
{
  "startDate":"2002,9,1",
  "endDate":"2008,2,1",
  "headline":"Engineering school",
  "text":"<p>Right after highschool I continued straight on to engineering school at The Technical University of Denmark. As an undergraduate I studied Computer Science and as a graduate student I started out studying software engineering but later on turned more towards digital hardware, because I wanted to create physical things. My study time was fairly uneventful because I at the time didn't realize that when you're a student that's when you have the most time and flexibility in the world. What a wasted opportunity...</p>",
  "tag":"Education",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/dtu.jpg",
    "thumbnail":"http://localhost:3000/images/timeline/dtu.jpg",
  }
},
{
  "startDate":"2007,9,1",
  "endDate":"2008,2,1",
  "headline":"Master thesis was the kickoff",
  "text":"<p>I didn't want just a standard master thesis I wanted to do something more bold. So as a thesis supervisor I picked the most inventive Professor I could find: Full Professor Jan Madsen, head of section at the Embedded Systems Engineering at the Department of Matemathics and Computer Science. After bouncing a few ideas back and forth we landed on the problem formulation for a master thesis that sounded something like this: 'Wouldn't if be cool if we combined biological organisms with hardware?' The end result: A software model of a self-reparing chip, a patent, a PhD, NASAs Jet Propulsion Lab and a startup. For more info, see <a href='#'>this link.</a></p>", //TODO REMEMBER LINK HERE!!
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/edna.png",
    "thumbnail":"http://localhost:3000/images/timeline/edna.png",
  }
},
{
  "startDate":"2008,6,1",
  "endDate":"2011,9",
  "headline":"PhD + Patent + NASAs Jet Propulsion Laboratory",
  "text":"<p>The subject of the PhD was to build a working prototype of the self-repairing chip technology I laid the groundwork for during my master thesis. After all getting a patent from a master thesis is quite rare in that department. My aim from the beginning was clear: Get to do a collaboration with NASA. In 2010 I succeded in convincing Dr. Didier Keymeulen of the Flight System Avionics group that I should come visit him at the Jet Propulsion Laboratory and demonstrate my technology. The demo application was that I should integrate it into a novel Fourier Transform Spectrometer architecture. It was also where I got my first taste of physical and analog hardware - only that my first test case was a 100K+ USD space-grade spectrometer. During my time there I also helped to build a calibration system for testing new lasers. </p>", // TODO more info here??
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/jpl.png",
    "thumbnail":"http://localhost:3000/images/timeline/jpl.png",
  }
},
{
  "startDate":"2008,11,1",
  "endDate":"2015,3,15",
  "headline":"The Reibels",
  "text":"<p>Around the time I started my PhD was also the time where my joy for playing music was re-ignited by a sudden decision to learn how to play guitar. About a year after that I convined my sister that we should start a band. She has an amazing voice and with my newly rekindled love for playing piano and guitar it just made sense.. So we decided to form a band around 2010: The Reibels. We play blues, old rock'n'roll and a mix of danish/nordic traditionals. We have had our ups and downs and have yet to make a major appearance, but we recently relaunched, so who knows where this ends.</p>", // TODO link to myspace + add Vårvisen
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    //"media":"http://localhost:3000/images/timeline/jpl.png",
    //"thumbnail":"http://localhost:3000/images/timeline/jpl.png",
  }
},
{
  "startDate":"2011,6",
  "endDate":"2014,3",
  "headline":"Let the startup times begin",
  "text":"<p>After finishing my PhD, the Professor and I wanted to continue the project but I made it quite clear that an academic career wasn't for me. Ever since I studied I had always had an interest in entrepreneurship, but never really new how I should get it going. This might be it! So Biomicore was born. Realizing that we knew nothing about starting companies we decided to try and find some professional business development help. So we added Niels Boje Lund and Carsten Snedker to the team early on. See the <a href='#'>Biomicore section</a> for more info.</p>", // TODO Add link!
  "tag":"Startup",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    "media":"http://localhost:3000/images/timeline/biomicore.png",
    "thumbnail":"http://localhost:3000/images/timeline/biomicore.png",
  }
},
{
  "startDate":"2011,8",
  "endDate":"2015,3,15",
  "headline":"Building the Copenhagen startup community",
  "text":"<p>The first question I asked after starting Biomicore was: 'What does an entrepreneur do?' And with that question I started searching for answers. The first thing I did was joining the local relaunch of the Silicon Vikings Chapter. I immediately became hooked and after talking a bit with the chairman I joined the team as the event manager. In the period from 2011 to 2015 I have been a driving force behind organizations such as Silicon Vikings, Silicon Drinkabout Copenhagen and Startup Grind Copenhagen. I also initially served as the president of the Nordic Startup Conference. But most proudly together with Sebastian Felix Schwemer and renowned danish entrepeneur Thomas Madsen-Mygdal I took the initial steps to building what was to become known as #cphftw, which is an ecosystem initiative focussed on making it easier for startups in Denmark. Here's the interview I did at our first Startup Grind event with Thomas Madsen-Mygdal. </p><iframe width='560' height='315' src='https://www.youtube.com/embed/7bOUswwSREw?list=PLJ81xh1c0JYBmiRRZMw2VAnCicTTzRM-U' frameborder='0' allowfullscreen></iframe>",
  "tag":"Startup",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    //"media":"http://localhost:3000/images/timeline/biomicore.png",
    //"thumbnail":"http://localhost:3000/images/timeline/biomicore.png",
  }
},
{
  "startDate":"2012,9,1",
  "endDate":"2015,3,15",
  "headline":"AppGarage",
  "text":"<p>In 2012 I started to talk with my former supervisor Professor Jan Madsen that the university needed somewhere for student startups to go. He liked the idea so he hired me and we launched AppGarage at the Technical University of Denmark. AppGarage is a place for students to go with startup ideas. We have a small co-working space, but most importantly I take deep part in each of the student startup projects and assists them where I can. Usually with advising on business models, technology choices and network. No equity taken.</p>", // TODO link to myspace + add Vårvisen
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    //"media":"http://localhost:3000/images/timeline/jpl.png",
    //"thumbnail":"http://localhost:3000/images/timeline/jpl.png",
  }
},
{
  "startDate":"2014,3",
  "endDate":"2015,3,15",
  "headline":"The Ko.llektiv",
  "text":"<p>Together with 3 friends I started Ko.llektiv. The aim is to explore different web concepts. During the course of a year we built and MVP-launched two projects: <a href='http://flowtale.com'>Flowtale</a> and <a href='http://hiigloo.com'>Igloo</a> and investigated countless others. We decided to stop Flowtale because (1) it didn't pass our 'don't be a dick'-rule and (2) because the market didn't satisfy our insatiable need for scalability. Igloo is a quick nodejs hack we're playing with, but which have yet to see any traction. </p>",
  "tag":"Startup",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    //"media":"http://localhost:3000/images/timeline/biomicore.png",
    //"thumbnail":"http://localhost:3000/images/timeline/biomicore.png",
  }
},
{
  "startDate":"2014,11",
  "endDate":"2015,3,15",
  "headline":"Photography",
  "text":"<p>I've always been fascinated by really skilled wildlife photographers. So I decided to become one. Bought a Nikon d5300 and a Nikkor 70-300 4.5-5.6G IF-ED lens. So now I'm good to go. Work so far can be found <a href='https://500px.com/reibel'>here</a></p><br/><br/><button type='button' class='btn btn-sm btn-success next'>Play The Reibel Game</button>",
  "tag":"Inventive",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    //"media":"http://localhost:3000/images/timeline/biomicore.png",
    //"thumbnail":"http://localhost:3000/images/timeline/biomicore.png",
  }
},
{
  "startDate":"2014,9",
  "endDate":"2015,3,15",
  "headline":"The Mothership",
  "text":"<p>In the autumn of 2014 started doing some freelancing on the side. I mostly do web-development work - mostly in Nodejs frameworks such as Meteor. But one day it hit me, that doing freelance work can be the perfect platform for doing even more awesome stuff. So together with a friend I'm building two semi-scalable data-based projects where the motive is for both of us to get a passive income - to be able to do other more fun stuff. Recently I've become very interested in private research labs such as e.g. Saul Griffiths Otherlab. Right now a lab like that is my endgame. My first subject is drones. Started on January 1st I'm building my first.</p>",
  "tag":"Startup",
  //"classname":"optionaluniqueclassnamecanbeaddedhere",
  "asset": {
    //"media":"http://localhost:3000/images/timeline/biomicore.png",
    //"thumbnail":"http://localhost:3000/images/timeline/biomicore.png",
  }
}
/*{
"startDate":"2011,12,10",
"endDate":"2011,12,11",
"headline":"Headline Goes Here",
"text":"<p>Body text goes here, some HTML is OK</p>",
"tag":"This is Optional",
"classname":"optionaluniqueclassnamecanbeaddedhere",
"asset": {
"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
"thumbnail":"http://localhost:3000/images/me.jpg",
"credit":"Credit Name Goes Here",
"caption":"Caption text goes here"
}
}*/
],
"era": [
{
  "startDate":"1983,7,28",
  "endDate":"2015,3,15",
  "headline":"Summary of my life",
  "text":"<p>Body text goes here, some HTML is OK</p>",
  "tag":"This is Optional"
}
]
}
};
createStoryJS({
  type:       'timeline',
  width:      '100%',
  height:     '600',
  source:     dataObject,
  embed_id:   'my-timeline'           // ID of the DIV you want to load the timeline into
});
};
