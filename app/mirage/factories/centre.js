/**
 * @file Factory definition for centres
 * To seed our database with fake data. Factories are objects that dynamically generate data - blueprints for database
 * records. Faker ships with Mirage, used to generate random quantities for our available centres.
 */
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function (i) {
    return 'Centre ' + i;
  },
  male_capacity: 500,
  female_capacity: 500,
  male_in_use: faker.list.random(450, 475, 480, 490, 495, 500),
  female_in_use: faker.list.random(450, 475, 480, 490, 495, 500),
  male_out_of_commission: faker.list.random(5, 10, 15, 20, 35, 50),
  female_out_of_commission: faker.list.random(5, 10, 15, 20, 35, 50)
});
