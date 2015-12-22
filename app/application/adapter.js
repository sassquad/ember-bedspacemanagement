/**
 * @file RESTAdapter implementation.
 * Ember CLI Mirage 0.1.x exposes a REST API and Ember Data should be aware. Sole purpose is to define the path on the
 * server where we can find our RESTful service.
 */
import DS from 'ember-data';

export default DS. JSONAPIAdapter.extend({
  host: 'http://localhost:8080',
  namespace: 'api',
  shouldReloadAll() {
    return true;
  },
  shouldBackgroundReloadRecord() {
    return false;
  }
});
