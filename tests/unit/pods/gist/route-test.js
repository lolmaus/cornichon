import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gist');
    assert.ok(route);
  });
});
