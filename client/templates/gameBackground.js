Template.gameBackground.rendered = function(){
  AntiModals.overlay("game");
  Session.set("gameOn",true);
  Session.set("applicationOn",false);
  Session.set("questionNr",0);
};
