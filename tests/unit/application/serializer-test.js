import { moduleForModel, test } from 'ember-qunit';

moduleForModel('centre', 'Unit | Serializer | centre', {
  needs: ['model:centre']
});

// Replace this with your real tests.
test('it serializes records', function (assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
