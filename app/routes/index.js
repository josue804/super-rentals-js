import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hoesAndHose');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('hoesAndHose', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
