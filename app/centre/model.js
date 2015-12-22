import DS from 'ember-data';

/**
 * Models our centre object.
 *  This class relies on the Ember Data libraries to create an instance of a Model, with a multiple attributes.
 */
export default DS.Model.extend({
  name: DS.attr('string'),
  male_capacity: DS.attr('number'),
  female_capacity: DS.attr('number'),
  male_in_use: DS.attr('number'),
  female_in_use: DS.attr('number'),
  male_out_of_commission: DS.attr('number'),
  female_out_of_commission: DS.attr('number')
});
