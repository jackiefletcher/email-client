Email.Email = DS.Model.extend({
  sender: DS.attr(),
  subject: DS.attr(),
  message: DS.attr(),
  date: DS.attr()
});
