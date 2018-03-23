"use strict";

define('cornichon/adapters/gist', ['exports', 'ember-data/adapters/rest', 'ember-macro-helpers/computed'], function (exports, _rest, _computed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _rest.default.extend({

    host: 'https://api.github.com',

    headers: (0, _computed.default)(function () {
      return {
        Accept: 'application/vnd.github.v3+json'
      };
    })

  });
});
define('cornichon/app', ['exports', 'cornichon/resolver', 'ember-load-initializers', 'cornichon/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('cornichon/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('cornichon/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('cornichon/helpers/app-version', ['exports', 'cornichon/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('cornichon/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('cornichon/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('cornichon/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('cornichon/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('cornichon/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('cornichon/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('cornichon/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('cornichon/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('cornichon/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('cornichon/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('cornichon/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('cornichon/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('cornichon/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('cornichon/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('cornichon/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('cornichon/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('cornichon/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('cornichon/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('cornichon/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('cornichon/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('cornichon/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('cornichon/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('cornichon/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('cornichon/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('cornichon/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('cornichon/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('cornichon/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('cornichon/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('cornichon/helpers/md5-color', ['exports', 'md5'], function (exports, _md) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.md5Color = md5Color;


  // Check color brightness
  // returns brightness value from 0 to 255
  // http://www.webmasterworld.com/forum88/9769.htm
  function getBrightness(hexCode) {
    // strip off any leading #
    hexCode = hexCode.replace('#', '');

    var c_r = parseInt(hexCode.substr(0, 2), 16);
    var c_g = parseInt(hexCode.substr(2, 2), 16);
    var c_b = parseInt(hexCode.substr(4, 2), 16);

    return (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  }

  function md5Color([str] /*, hash*/) {
    const bgColor = '#' + (0, _md.default)(str).slice(0, 6);
    const color = getBrightness(bgColor) > 160 ? 'black' : 'white';
    const style = `background-color: ${bgColor}; color: ${color};`;
    return Ember.String.htmlSafe(style);
  }

  exports.default = Ember.Helper.helper(md5Color);
});
define('cornichon/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('cornichon/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('cornichon/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('cornichon/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('cornichon/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('cornichon/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('cornichon/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('cornichon/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('cornichon/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('cornichon/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('cornichon/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('cornichon/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('cornichon/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('cornichon/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('cornichon/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('cornichon/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('cornichon/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('cornichon/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('cornichon/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('cornichon/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('cornichon/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('cornichon/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('cornichon/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('cornichon/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('cornichon/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('cornichon/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('cornichon/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'cornichon/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('cornichon/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('cornichon/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('cornichon/initializers/ember-simple-auth', ['exports', 'cornichon/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('cornichon/initializers/export-application-global', ['exports', 'cornichon/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('cornichon/initializers/install-devtools', ['exports', 'ember-chrome-devtools/initializers/install-devtools'], function (exports, _installDevtools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _installDevtools.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _installDevtools.initialize;
    }
  });
});
define('cornichon/initializers/model-fragments', ['exports', 'ember-data-model-fragments'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'fragmentTransform',
    before: 'ember-data',

    initialize(application) {
      application.inject('transform', 'store', 'service:store');
    }
  };
});
define("cornichon/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('cornichon/macros/bool', ['exports', 'ember-macro-helpers/curried-computed'], function (exports, _curriedComputed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _curriedComputed.default)(value => !!value);
});
define('cornichon/models/error', ['exports', 'ember-data/attr', 'ember-data-model-fragments/fragment'], function (exports, _attr, _fragment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _fragment.default.extend({
    message: (0, _attr.default)('string'),
    line: (0, _attr.default)('number')
  });
});
define('cornichon/models/file', ['exports', 'ember-data/attr', 'ember-data-model-fragments/fragment', 'ember-data-model-fragments/attributes', 'ember-awesome-macros', 'ember-awesome-macros/array', 'ember-macro-helpers/computed', 'ember-macro-helpers/raw', 'cornichon/macros/bool'], function (exports, _attr, _fragment, _attributes, _emberAwesomeMacros, _array, _computed, _raw, _bool) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _fragment.default.extend({
    filename: (0, _attr.default)('string'),
    size: (0, _attr.default)('number'),
    rawUrl: (0, _attr.default)('string'),
    type: (0, _attr.default)('string'),
    language: (0, _attr.default)('string'),
    truncated: (0, _attr.default)('boolean'),
    content: (0, _attr.default)('string'),

    feature: (0, _attr.default)('string'),
    comments: (0, _attr.default)('string'),
    annotations: (0, _attributes.array)('string'),
    scenarios: (0, _attributes.fragmentArray)('scenario'),
    errors: (0, _attributes.fragmentArray)('error'),

    extension: (0, _computed.default)('filename', filename => filename.split('.').get('lastObject')),
    isFeature: (0, _emberAwesomeMacros.equal)('extension', (0, _raw.default)('feature')),
    expandableScenarios: (0, _array.filterBy)('scenarios', (0, _raw.default)('isExpandable'), true),
    isExpandable: (0, _emberAwesomeMacros.and)('isFeature', (0, _bool.default)('expandableScenarios.length')),

    areAnyScenariosExpandable: (0, _array.isAny)('scenarios', (0, _raw.default)('isExpandable'), true),
    areAnyExpandableScenariosExpanded: (0, _array.isAny)('expandableScenarios', (0, _raw.default)('isExpanded'), true),
    areAnyExpandableScenariosCollapsed: (0, _array.isAny)('expandableScenarios', (0, _raw.default)('isExpanded'), false),

    setAll(value) {
      this.scenarios.forEach(scenario => {
        if (scenario.content.length) scenario.set('isExpanded', value);
      });
    }
  });
});
define('cornichon/models/gist', ['exports', 'ember-data/attr', 'ember-data/model', 'ember-data-model-fragments/attributes', 'ember-awesome-macros/array', 'ember-macro-helpers/raw'], function (exports, _attr, _model, _attributes, _array, _raw) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({
    description: (0, _attr.default)('string'),
    files: (0, _attributes.fragmentArray)('file'),

    featureFiles: (0, _array.filterBy)('files', (0, _raw.default)('isFeature'), true),
    expandableFeatureFiles: (0, _array.filterBy)('featureFiles', (0, _raw.default)('isExpandable'), true),

    areAnyScenariosExpandable: (0, _array.isAny)('featureFiles', (0, _raw.default)('areAnyScenariosExpandable'), true),
    areAnyExpandableScenariosExpanded: (0, _array.isAny)('expandableFeatureFiles', (0, _raw.default)('areAnyExpandableScenariosExpanded'), true),
    areAnyExpandableScenariosCollapsed: (0, _array.isAny)('expandableFeatureFiles', (0, _raw.default)('areAnyExpandableScenariosCollapsed'), true),

    setAll(value) {
      this.files.invoke('setAll', value);
    }
  });
});
define('cornichon/models/scenario', ['exports', 'ember-data/attr', 'ember-data-model-fragments/fragment', 'ember-data-model-fragments/attributes'], function (exports, _attr, _fragment, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _fragment.default.extend({
    name: (0, _attr.default)('string'),
    content: (0, _attr.default)('string'),
    comments: (0, _attr.default)('string'),
    annotations: (0, _attributes.array)('string'),

    isExpanded: false,

    isExpandable: Ember.computed.bool('content.length')
  });
});
define("cornichon/pods/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "47hLhlxJ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"route-application\"],[8],[0,\"\\n\\n  \"],[6,\"header\"],[10,\"class\",\"route-application-header\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"route-application-header-item _first\"],[8],[0,\"\\n      \"],[6,\"h2\"],[8],[0,\"Cornichon: Cucumber/Gherkin viewer\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"route-application-header-item _last\"],[8],[0,\"\\n\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n\\n\\n  \"],[6,\"main\"],[10,\"class\",\"route-application-content\"],[8],[0,\"\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "cornichon/pods/application/template.hbs" } });
});
define('cornichon/pods/components/feature-file/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    file: null,

    classNames: ['featureFile'],

    actions: {
      setAll(value) {
        this.file.setAll(value);
      },

      toggleScenario(scenario) {
        scenario.toggleProperty('isExpanded');
      }
    }
  });
});
define("cornichon/pods/components/feature-file/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mEeKD5Gq", "block": "{\"symbols\":[\"error\",\"scenario\",\"annotation\",\"annotation\"],\"statements\":[[6,\"div\"],[10,\"class\",\"featureFile-header\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"featureFile-header-item _title\"],[8],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"featureFile-title\"],[8],[0,\"\\n      \"],[1,[22,[\"file\",\"feature\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"file\",\"annotations\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"featureFile-annotations\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"file\",\"annotations\"]]],null,{\"statements\":[[0,\"          \"],[6,\"span\"],[10,\"class\",\"featureFile-annotation\"],[11,\"style\",[26,\"md5-color\",[[21,4,[]]],null],null],[8],[0,\"\\n            \"],[1,[21,4,[]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"]],\"parameters\":[4]},null],[0,\"\\n      \"],[9],[0,\"\\n    \"]],\"parameters\":[]},null],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"file\",\"areAnyScenariosExpandable\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"featureFile-header-item _controls featureFile-controls\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"file\",\"areAnyExpandableScenariosCollapsed\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[10,\"href\",\"\"],[3,\"action\",[[21,0,[]],\"setAll\",true]],[8],[1,[20,\"concat\"],false],[0,\"Expand All\"],[1,[20,\"concat\"],false],[9],[0,\"\\n      \"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"file\",\"areAnyExpandableScenariosExpanded\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[10,\"href\",\"\"],[3,\"action\",[[21,0,[]],\"setAll\",false]],[8],[1,[20,\"concat\"],false],[0,\"Collapse All\"],[1,[20,\"concat\"],false],[9],[0,\"\\n      \"]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]},null],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[6,\"div\"],[10,\"class\",\"featureFile-content\"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"featureFile-filename\"],[8],[0,\"\\n    \"],[1,[22,[\"file\",\"filename\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"file\",\"comments\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"featureFile-comments\"],[8],[1,[22,[\"file\",\"comments\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"file\",\"scenarios\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"featureFile-scenarios\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"file\",\"scenarios\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n            featureFile-scenario\\n            \",[26,\"if\",[[21,2,[\"content\",\"length\"]],\"-content\",\"-no-content\"],null],\"\\n            \",[26,\"if\",[[21,2,[\"isExpanded\"]],\"-expanded\",\"-collapsed\"],null],\"\\n          \"]]],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[21,2,[\"isExpanded\"]],[21,2,[\"comments\",\"length\"]]],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"featureFile-scenario-comments\"],[8],[1,[21,2,[\"comments\"]],false],[9],[0,\"\\n          \"]],\"parameters\":[]},null],[0,\"\\n\\n          \"],[6,\"div\"],[10,\"class\",\"featureFile-scenario-title\"],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"content\",\"length\"]]],null,{\"statements\":[[0,\"              \"],[6,\"a\"],[10,\"href\",\"\"],[3,\"action\",[[21,0,[]],\"toggleScenario\",[21,2,[]]]],[8],[1,[26,\"if\",[[21,2,[\"isExpanded\"]],\"⊟\",\"⊞\"],null],false],[9],[0,\"\\n            \"]],\"parameters\":[]},null],[0,\"\\n\\n            \"],[6,\"span\"],[10,\"class\",\"featureFile-scenario-name\"],[8],[0,\"\\n              \"],[1,[21,2,[\"name\"]],false],[0,\"\\n            \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[21,2,[\"annotations\",\"length\"]]],null,{\"statements\":[[0,\"              \"],[6,\"span\"],[10,\"class\",\"featureFile-scenario-annotations\"],[8],[0,\"\\n\"],[4,\"each\",[[21,2,[\"annotations\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"span\"],[10,\"class\",\"featureFile-scenario-annotation featureFile-annotation\"],[11,\"style\",[26,\"md5-color\",[[21,3,[]]],null],null],[8],[0,\"\\n                    \"],[1,[21,3,[]],false],[0,\"\\n                  \"],[9],[0,\"\\n                \"]],\"parameters\":[3]},null],[0,\"\\n              \"],[9],[0,\"\\n            \"]],\"parameters\":[]},null],[0,\"\\n          \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[21,2,[\"isExpanded\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"featureFile-scenario-content\"],[8],[1,[21,2,[\"content\"]],false],[9],[0,\"\\n          \"]],\"parameters\":[]},null],[0,\"\\n        \"],[9],[0,\"\\n      \"]],\"parameters\":[2]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"file\",\"errors\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"featureFile-errors\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"file\",\"errors\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"featureFile-error\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"featureFile-error-message\"],[8],[0,\"\\n            \"],[1,[21,1,[\"line\"]],false],[0,\":\\n            \"],[1,[21,1,[\"essage\"]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"]],\"parameters\":[1]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "cornichon/pods/components/feature-file/template.hbs" } });
});
define('cornichon/pods/gist/controller', ['exports', 'ember-macro-helpers/reads'], function (exports, _reads) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    model: null,

    gist: (0, _reads.default)('model.gist'),

    actions: {
      setAll(value) {
        this.gist.setAll(value);
      }
    }
  });
});
define('cornichon/pods/gist/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model({ gistId }) {
      return Ember.RSVP.hash({
        gistId,
        gist: this.store.findRecord('gist', gistId)
      });
    }
  });
});
define("cornichon/pods/gist/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AFbSr1TH", "block": "{\"symbols\":[\"file\"],\"statements\":[[6,\"div\"],[10,\"class\",\"route-gist\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"gist\",\"areAnyScenariosExpandable\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"route-gist-controls\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"gist\",\"areAnyExpandableScenariosCollapsed\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[10,\"href\",\"\"],[3,\"action\",[[21,0,[]],\"setAll\",true]],[8],[1,[20,\"concat\"],false],[0,\"Expand All\"],[1,[20,\"concat\"],false],[9],[0,\"\\n      \"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"gist\",\"areAnyExpandableScenariosExpanded\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[10,\"href\",\"\"],[3,\"action\",[[21,0,[]],\"setAll\",false]],[8],[1,[20,\"concat\"],false],[0,\"Collapse All\"],[1,[20,\"concat\"],false],[9],[0,\"\\n      \"]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\\n  \"],[6,\"div\"],[10,\"class\",\"route-gist-features\"],[8],[0,\"\\n\"],[4,\"each\",[[26,\"sort-by\",[\"feature\",[22,[\"gist\",\"featureFiles\"]]],null]],null,{\"statements\":[[0,\"      \"],[1,[26,\"feature-file\",null,[[\"class\",\"file\"],[\"route-gist-feature\",[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "cornichon/pods/gist/template.hbs" } });
});
define('cornichon/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('cornichon/router', ['exports', 'cornichon/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('gist', { path: ":gistId" });
  });

  exports.default = Router;
});
define('cornichon/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { Route } = Ember;

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  exports.default = Route.extend();
});
define('cornichon/serializers/gist', ['exports', 'ember-data/serializers/json', 'lodash'], function (exports, _json, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _json.default.extend({
    keyForAttribute(attr, method) {
      return Ember.String.underscore(attr);
    },

    normalize(typeClass, payload) {
      payload.files = _lodash.default.map(payload.files, (file, filename) => {
        file = _lodash.default.mapKeys(file, (value, key) => Ember.String.camelize(key));

        file.filename = filename;

        if (file.filename.split('.').lastObject === 'feature') {
          const {
            feature,
            annotations,
            scenarios,
            comments,
            errors
          } = this._generateFeature(file.content);

          file.feature = feature;
          file.annotations = annotations;
          file.scenarios = scenarios;
          file.comments = comments;
          file.errors = errors;
        }

        return file;
      });

      return this._super(typeClass, payload);
    },

    _generateFeature(content) {
      let featureName;
      let featureComments = '';
      const featureAnnotations = [];

      let currentScenarioName;
      let currentScenarioComments = '';
      let currentScenarioContent = '';
      let currentScenarioAnnotations = [];

      const scenarios = [];
      const errors = [];

      content.split("\n").forEach((line, i) => {
        if (this._isEmptyLine(line)) {
          if (currentScenarioName) currentScenarioContent += "\n";
          return;
        }

        const indentation = this._indentation(line);

        // FEATURE
        if (indentation === 0) {
          if (this._isAnnotation(line)) {
            if (featureName) {
              errors.push({
                message: "Unexpected root-level annotation",
                line: i
              });
              return;
            }

            featureAnnotations.push(line);
          } else if (this._isFeature(line)) {
            if (featureName) {
              errors.push({
                message: "Expected one feature per file",
                line: i
              });
              return;
            }

            featureName = line;
          } else if (this._isComment(line)) {
            if (featureName) {
              errors.push({
                message: "Encountered root comment after feature",
                line: i
              });
              return;
            }

            if (featureComments.length) featureComments += "\n";
            featureComments += line.trim();
          }

          // SCENARIO
        } else if (indentation === 2) {
          if (!featureName) {
            errors.push({
              message: `Unexpected indentation of 2 without a feature`,
              line: i
            });
            return;
          }

          // Wrapping up previous scenario
          if (currentScenarioName) {
            scenarios.push({
              name: currentScenarioName,
              content: currentScenarioContent.trim(),
              annotations: currentScenarioAnnotations,
              comments: currentScenarioComments
            });

            currentScenarioName = null;
            currentScenarioContent = '';
            currentScenarioComments = '';
            currentScenarioAnnotations = [];
          }

          if (this._isAnnotation(line)) {
            currentScenarioAnnotations.push(line.trim());
          } else if (this._isComment(line)) {
            if (currentScenarioComments.length) currentScenarioComments += "\n";
            currentScenarioComments += line.trim();
          } else {
            currentScenarioName = line.trim();
          }

          // CONTENT
        } else if (indentation >= 4) {
          if (!currentScenarioName) {
            errors.push({
              message: `Unexpected indentation of ${indentation} without a scenario`,
              line: i
            });
            return;
          }

          if (currentScenarioContent.length) currentScenarioContent += "\n";
          currentScenarioContent += line.slice(4);
        } else {
          errors.push({
            message: `Unexpected indentation of ${indentation}`,
            line: i
          });
        }
      });

      // Wrapping up last scenario
      if (currentScenarioName) {
        scenarios.push({
          name: currentScenarioName,
          content: currentScenarioContent.trim(),
          annotations: currentScenarioAnnotations,
          comments: currentScenarioComments
        });
      }

      return {
        feature: featureName,
        annotations: featureAnnotations,
        comments: featureComments,
        scenarios,
        errors
      };
    },

    _isAnnotation(line) {
      return line.trim()[0] === '@';
    },

    _isComment(line) {
      return line.trim()[0] === '#';
    },

    _isEmptyLine(line) {
      return !line.trim().length;
    },

    _isFeature(line) {
      return (/^Feature: /.test(line)
      );
    },

    _indentation(line) {
      return line.match(/^( *)/)[0].length;
    }
  });
});
define('cornichon/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('cornichon/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('cornichon/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('cornichon/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define('cornichon/transforms/array', ['exports', 'ember-data-model-fragments/transforms/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _array.default;
});
define('cornichon/transforms/fragment-array', ['exports', 'ember-data-model-fragments/transforms/fragment-array'], function (exports, _fragmentArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _fragmentArray.default;
});
define('cornichon/transforms/fragment', ['exports', 'ember-data-model-fragments/transforms/fragment'], function (exports, _fragment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _fragment.default;
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

if (!runningTests) {
  require("cornichon/app")["default"].create({"name":"cornichon","version":"0.0.0+cf1d1b4d"});
}
//# sourceMappingURL=cornichon.map
