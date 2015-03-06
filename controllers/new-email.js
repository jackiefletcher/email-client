Email.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        sender: this.get('sender'),
        subject: this.get('subject'),
        message: this.get('message'),
      });

      newEmail.save().then(function() {
      });

      this.transitionToRoute('emails');
    }
  }
});
