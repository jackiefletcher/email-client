Email.Router.map(function() {
  this.resource('emails', {path: '/'}, function() {
    this.resource('message', {path: ':email_id'});
  });
  this.resource('new-email');
});
