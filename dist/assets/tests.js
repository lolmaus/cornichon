'use strict';

define('cornichon/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/gist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/gist.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/md5-color.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/md5-color.js should pass ESLint\n\n');
  });

  QUnit.test('macros/bool.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'macros/bool.js should pass ESLint\n\n');
  });

  QUnit.test('models/error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/error.js should pass ESLint\n\n');
  });

  QUnit.test('models/file.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/file.js should pass ESLint\n\n');
  });

  QUnit.test('models/gist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/gist.js should pass ESLint\n\n');
  });

  QUnit.test('models/scenario.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/scenario.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/feature-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/feature-file/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/gist/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/gist/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/gist/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/gist/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/gist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/gist.js should pass ESLint\n\n');
  });
});
define('cornichon/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const { __container__: container } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('cornichon/tests/test-helper', ['cornichon/app', 'cornichon/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('cornichon/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define('cornichon/config/environment', [], function() {
  var prefix = 'cornichon';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('cornichon/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
