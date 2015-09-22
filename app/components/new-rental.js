import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

  save1() {
    var params = {
      type: this.get('type'),
      length: this.get('length'),
      color: this.get('color'),
      age: this.get('age'),
      image: this.get('image')
    };
    this.set('addNewRental', false);
    this.sendAction('save2', params);
  }
}
});
