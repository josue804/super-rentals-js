import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hoesAndHose');
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
