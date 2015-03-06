Email.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('message', {path: 'email_id'});
  this.resource('new-email');
});
