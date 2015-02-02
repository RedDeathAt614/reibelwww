Router.configure({
  layoutTemplate: "reibelwww"
});

Router.map(function () {

  // This will render the template "landing" when the path "/" is called
  this.route('landing', {
    path: '/',
    onBeforeAction: function (pause) {
      this.next();
    }
  });
});
