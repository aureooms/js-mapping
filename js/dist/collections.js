"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _bind = Function.prototype.bind;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/000-tools */
		/* js/src/000-tools/KeyError.js */

		var KeyError = function KeyError(message) {

			this.message = message;
		};

		exports.KeyError = KeyError;

		/* js/src/000-tools/Mapping.js */

		var Mapping = {};

		Mapping.fromkeys = regeneratorRuntime.mark(function callee$2$0(seq) {
			var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 3;
						_iterator = seq[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 12;
							break;
						}

						key = _step.value;
						context$3$0.next = 9;
						return [key, value];

					case 9:
						_iteratorNormalCompletion = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError = true;
						_iteratorError = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports.Mapping = Mapping;

		/* js/src/000-tools/NamedTuple.js */

		var _NamedTuple = function _NamedTuple(Dict, OrderedDict) {

			var NamedTuple = function NamedTuple() {};

			NamedTuple.prototype = [];

			NamedTuple.make = function (Constructor, iterable) {

				return new (_bind.apply(Constructor, [null].concat(_toConsumableArray(iterable))))();
			};

			NamedTuple.replace = function (Constructor, tuple, dict) {

				var values = new Dict();

				var fields = tuple._fields;

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var key = _step2.value;
						values.set(key, tuple[key]);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = dict[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _step3$value = _slicedToArray(_step3.value, 2);

						var key = _step3$value[0];
						var value = _step3$value[1];
						values.set(key, value);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return new (_bind.apply(Constructor, [null].concat(_toConsumableArray((function () {
					var _ref = [];
					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;

					try {
						for (var _iterator4 = fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var key = _step4.value;

							_ref.push(values.get(key));
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
								_iterator4["return"]();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}

					return _ref;
				})()))))();
			};

			NamedTuple.asdict = function (tuple) {

				var fields = tuple._fields;

				return new OrderedDict((function () {
					var _ref2 = [];
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = fields[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var key = _step5.value;

							_ref2.push([key, tuple[key]]);
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
								_iterator5["return"]();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}

					return _ref2;
				})());
			};

			return NamedTuple;
		};

		exports._NamedTuple = _NamedTuple;

		/* js/src/000-tools/namedtuple.js */

		var _namedtuple = function _namedtuple(NamedTuple) {

			var namedtuple = function namedtuple(typename, field_names) {

				var fields = [].concat(_toConsumableArray(field_names));

				var definition = "( function ( ) {\n\nvar " + typename + " = function (";

				definition += " " + fields.join(" , ");

				definition += " )";
				definition += " {\n\n";

				var fieldlist = (function () {
					var _fieldlist = [];
					var _iteratorNormalCompletion6 = true;
					var _didIteratorError6 = false;
					var _iteratorError6 = undefined;

					try {
						for (var _iterator6 = fields[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
							var field = _step6.value;

							_fieldlist.push("\"" + field + "\" ");
						}
					} catch (err) {
						_didIteratorError6 = true;
						_iteratorError6 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
								_iterator6["return"]();
							}
						} finally {
							if (_didIteratorError6) {
								throw _iteratorError6;
							}
						}
					}

					return _fieldlist;
				})();

				definition += "\t" + "this._fields = [ " + fieldlist.join(", ") + "] ;\n";

				for (var i = 0; i < fields.length; ++i) {

					var field = fields[i];

					definition += "\n";
					definition += "\t" + "this[" + i + "] = this." + field + " = " + field + " ;";
				}

				definition += "\n} ;\n\n";

				definition += typename + ".prototype = [ ] ;\n\n";
				definition += typename + "._make = function ( iterable ) {\n";
				definition += "\t" + "return NamedTuple.make( " + typename + " , iterable ) ;\n";
				definition += "} ;\n\n";
				definition += typename + ".prototype._replace = function ( dict ) {\n";
				definition += "\t" + "return NamedTuple.replace( " + typename + " , this , dict ) ;\n";
				definition += "} ;\n\n";
				definition += typename + ".prototype._asdict = function ( ) {\n";
				definition += "\t" + "return NamedTuple.asdict( this ) ;\n";
				definition += "} ;\n\n";
				definition += typename + ".prototype[Symbol.iterator] = function ( ) {\n";
				definition += "\t" + "return this.slice( )[Symbol.iterator]( ) ;\n";
				definition += "} ;\n\n";

				definition += "return " + typename + " ;\n\n} )( )";

				console.log(definition);

				return eval(definition);
			};

			return namedtuple;
		};

		exports._namedtuple = _namedtuple;

		/* js/src/001-adt */
		/* js/src/001-adt/ChainMap.js */

		var _ChainMap = function _ChainMap(Dict, Set) {

			var ChainMap = function ChainMap() {
				for (var _len = arguments.length, maps = Array(_len), _key = 0; _key < _len; _key++) {
					maps[_key] = arguments[_key];
				}

				this.maps = maps;

				if (this.maps.length === 0) this.maps.push(new Dict());
			};

			ChainMap.prototype.__missing__ = function (key) {

				throw new KeyError(key);
			};

			ChainMap.prototype.get = function (key) {
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {

					for (var _iterator7 = this.maps[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var map = _step7.value;

						try {

							return map.get(key);
						} catch (e) {

							if (!(e instanceof KeyError)) throw e;
						}
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
							_iterator7["return"]();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				return this.__missing__(key);
			};

			ChainMap.prototype.getdefault = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return this.has(key) ? this.get(key) : dflt;
			};

			ChainMap.prototype._keys = function () {

				var keys = new Set();

				var _iteratorNormalCompletion8 = true;
				var _didIteratorError8 = false;
				var _iteratorError8 = undefined;

				try {
					for (var _iterator8 = this.maps[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
						var map = _step8.value;
						keys.update(map.keys());
					}
				} catch (err) {
					_didIteratorError8 = true;
					_iteratorError8 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
							_iterator8["return"]();
						}
					} finally {
						if (_didIteratorError8) {
							throw _iteratorError8;
						}
					}
				}

				return keys;
			};

			ChainMap.prototype.len = function () {

				return this._keys().len();
			};

			ChainMap.prototype[Symbol.iterator] = ChainMap.prototype.items = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion9 = true;
							_didIteratorError9 = false;
							_iteratorError9 = undefined;
							context$4$0.prev = 3;
							_iterator9 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step9.value;
							context$4$0.next = 9;
							return [key, this.get(key)];

						case 9:
							_iteratorNormalCompletion9 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError9 = true;
							_iteratorError9 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
								_iterator9["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError9) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError9;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			ChainMap.prototype.has = function (key) {
				var _iteratorNormalCompletion10 = true;
				var _didIteratorError10 = false;
				var _iteratorError10 = undefined;

				try {

					for (var _iterator10 = this.maps[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
						var map = _step10.value;

						if (map.has(key)) return true;
					}
				} catch (err) {
					_didIteratorError10 = true;
					_iteratorError10 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
							_iterator10["return"]();
						}
					} finally {
						if (_didIteratorError10) {
							throw _iteratorError10;
						}
					}
				}

				return false;
			};

			ChainMap.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new ChainMap(Dict.fromkeys(seq, value));
			};

			ChainMap.prototype.copy = function () {
				var _maps = _toArray(this.maps);

				var child = _maps[0];

				var parents = _maps.slice(1);

				return new (_bind.apply(ChainMap, [null].concat([child.copy()], _toConsumableArray(parents))))();
			};

			ChainMap.prototype.new_child = function () {
				var map = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				if (map === null) map = new Dict();

				return new (_bind.apply(ChainMap, [null].concat([map], _toConsumableArray(this.maps))))();
			};

			ChainMap.prototype.parents = function () {
				var _maps2 = _toArray(this.maps);

				var child = _maps2[0];

				var parents = _maps2.slice(1);

				return new (_bind.apply(ChainMap, [null].concat(_toConsumableArray(parents))))();
			};

			ChainMap.prototype.set = function (key, value) {

				return this.maps[0].set(key, value);
			};

			ChainMap.prototype["delete"] = function (key) {

				try {

					this.maps[0]["delete"](key);
				} catch (e) {

					if (!(e instanceof KeyError)) throw e;

					throw new KeyError("Key not found in the first mapping: " + key);
				}

				return this;
			};

			ChainMap.prototype.popitem = function () {

				try {

					return this.maps[0].popitem();
				} catch (e) {

					if (!(e instanceof KeyError)) throw e;

					throw new KeyError("No keys found in the first mapping.");
				}
			};

			ChainMap.prototype.pop = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				try {

					if (arguments.length <= 1) return this.maps[0].pop(key);

					return this.maps[0].pop(key, dflt);
				} catch (e) {

					if (!(e instanceof KeyError)) throw e;

					throw new KeyError("Key not found in the first mapping: " + key);
				}
			};

			ChainMap.prototype.clear = function () {

				this.maps[0].clear();

				return this;
			};

			ChainMap.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this._keys(), "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			ChainMap.prototype.values = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion11 = true;
							_didIteratorError11 = false;
							_iteratorError11 = undefined;
							context$4$0.prev = 3;
							_iterator11 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step11.value;
							context$4$0.next = 9;
							return this.get(key);

						case 9:
							_iteratorNormalCompletion11 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError11 = true;
							_iteratorError11 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
								_iterator11["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError11) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError11;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			return ChainMap;
		};

		exports._ChainMap = _ChainMap;

		/* js/src/001-adt/Counter.js */

		var _Counter = function _Counter(Map, Dict) {

			var Counter = function Counter() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				this.container = new Map();

				if (iterable !== null) this.update(iterable);
			};

			Counter.prototype = new Dict();

			Counter.prototype.get = function (key) {

				if (this.has(key)) return this.container.get(key);

				return 0;
			};

			Counter.prototype.elements = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _step12$value, key, count;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion12 = true;
							_didIteratorError12 = false;
							_iteratorError12 = undefined;
							context$4$0.prev = 3;
							_iterator12 = this[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
								context$4$0.next = 17;
								break;
							}

							_step12$value = _slicedToArray(_step12.value, 2);
							key = _step12$value[0];
							count = _step12$value[1];

						case 9:
							if (!(count-- > 0)) {
								context$4$0.next = 14;
								break;
							}

							context$4$0.next = 12;
							return key;

						case 12:
							context$4$0.next = 9;
							break;

						case 14:
							_iteratorNormalCompletion12 = true;
							context$4$0.next = 5;
							break;

						case 17:
							context$4$0.next = 23;
							break;

						case 19:
							context$4$0.prev = 19;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError12 = true;
							_iteratorError12 = context$4$0.t0;

						case 23:
							context$4$0.prev = 23;
							context$4$0.prev = 24;

							if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
								_iterator12["return"]();
							}

						case 26:
							context$4$0.prev = 26;

							if (!_didIteratorError12) {
								context$4$0.next = 29;
								break;
							}

							throw _iteratorError12;

						case 29:
							return context$4$0.finish(26);

						case 30:
							return context$4$0.finish(23);

						case 31:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 19, 23, 31], [24,, 26, 30]]);
			});

			Counter.prototype.increment = function (key) {
				var amount = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

				this.set(key, this.get(key) + amount);
			};

			Counter.prototype.decrement = function (key) {
				var amount = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

				this.increment(key, -amount);
			};

			Counter.prototype.update = function (iterable) {
				var _iteratorNormalCompletion13 = true;
				var _didIteratorError13 = false;
				var _iteratorError13 = undefined;

				try {

					for (var _iterator13 = iterable[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
						var key = _step13.value;
						this.increment(key);
					}
				} catch (err) {
					_didIteratorError13 = true;
					_iteratorError13 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
							_iterator13["return"]();
						}
					} finally {
						if (_didIteratorError13) {
							throw _iteratorError13;
						}
					}
				}
			};

			Counter.prototype.add = function (other) {
				var _iteratorNormalCompletion14 = true;
				var _didIteratorError14 = false;
				var _iteratorError14 = undefined;

				try {

					for (var _iterator14 = other[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
						var _step14$value = _slicedToArray(_step14.value, 2);

						var key = _step14$value[0];
						var count = _step14$value[1];
						this.increment(key, count);
					}
				} catch (err) {
					_didIteratorError14 = true;
					_iteratorError14 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
							_iterator14["return"]();
						}
					} finally {
						if (_didIteratorError14) {
							throw _iteratorError14;
						}
					}
				}
			};

			Counter.prototype.subtract = function (other) {
				var _iteratorNormalCompletion15 = true;
				var _didIteratorError15 = false;
				var _iteratorError15 = undefined;

				try {

					for (var _iterator15 = other[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
						var _step15$value = _slicedToArray(_step15.value, 2);

						var key = _step15$value[0];
						var count = _step15$value[1];
						this.decrement(key, count);
					}
				} catch (err) {
					_didIteratorError15 = true;
					_iteratorError15 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
							_iterator15["return"]();
						}
					} finally {
						if (_didIteratorError15) {
							throw _iteratorError15;
						}
					}
				}
			};

			return Counter;
		};

		exports._Counter = _Counter;

		/* js/src/001-adt/DefaultDict.js */

		var _DefaultDict = function _DefaultDict(Dict, Map) {

			var DefaultDict = function DefaultDict() {
				var default_factory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var mapping = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				this.container = new Map(mapping);

				this.default_factory = default_factory;
			};

			DefaultDict.prototype = new Dict();

			DefaultDict.prototype.__missing__ = function (key) {

				if (this.default_factory !== null) throw new KeyError(key);

				return default_factory();
			};

			return DefaultDict;
		};

		exports._DefaultDict = _DefaultDict;

		/* js/src/001-adt/Dict.js */

		var _Dict = function _Dict(Map) {

			var Dict = function Dict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				this.container = new Map(mapping);
			};

			Dict.prototype.len = function () {

				return this.container.size;
			};

			Dict.prototype.isequal = function (other) {

				if (this.len() !== other.len()) return false;

				var _iteratorNormalCompletion16 = true;
				var _didIteratorError16 = false;
				var _iteratorError16 = undefined;

				try {
					for (var _iterator16 = other[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
						var _step16$value = _slicedToArray(_step16.value, 2);

						var key = _step16$value[0];
						var value = _step16$value[1];

						if (!this.has(key)) return false;

						if (this.get(key) !== value) return false;
					}
				} catch (err) {
					_didIteratorError16 = true;
					_iteratorError16 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
							_iterator16["return"]();
						}
					} finally {
						if (_didIteratorError16) {
							throw _iteratorError16;
						}
					}
				}

				return true;
			};

			Dict.prototype.__missing__ = function (key) {

				throw new KeyError(key);
			};

			Dict.prototype.get = function (key) {

				if (!this.container.has(key)) return this.__missing__(key);

				return this.container.get(key);
			};

			Dict.prototype.set = function (key, value) {

				this.container.set(key, value);

				return this;
			};

			Dict.prototype["delete"] = function (key) {

				if (!this.container["delete"](key)) throw new KeyError();

				return this;
			};

			Dict.prototype.has = function (key) {

				return this.container.has(key);
			};

			Dict.prototype.clear = function () {

				this.container.clear();

				return this;
			};

			Dict.prototype.copy = function () {

				return new Dict(this.items());
			};

			Dict.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new Dict(Mapping.fromkeys(seq, value));
			};

			Dict.prototype.getdefault = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (this.has(key)) return this.get(key);

				return dflt;
			};

			Dict.prototype.setdefault = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (this.has(key)) return this.get(key);

				this.set(key, dflt);

				return dflt;
			};

			Dict.prototype.pop = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (this.has(key)) {

					var value = this.get(key);

					this["delete"](key);

					return value;
				}

				if (arguments.length < 2) throw new KeyError();

				return dflt;
			};

			Dict.prototype.popitem = function () {

				if (this.len() === 0) throw new KeyError();

				var key = this.keys().next().value;

				return [key, this.pop(key)];
			};

			Dict.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion17 = true;
							_didIteratorError17 = false;
							_iteratorError17 = undefined;
							context$4$0.prev = 3;
							_iterator17 = this.container.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step17.value;
							context$4$0.next = 9;
							return key;

						case 9:
							_iteratorNormalCompletion17 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError17 = true;
							_iteratorError17 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
								_iterator17["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError17) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError17;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Dict.prototype.values = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _step18$value, key, value;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion18 = true;
							_didIteratorError18 = false;
							_iteratorError18 = undefined;
							context$4$0.prev = 3;
							_iterator18 = this.container[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
								context$4$0.next = 14;
								break;
							}

							_step18$value = _slicedToArray(_step18.value, 2);
							key = _step18$value[0];
							value = _step18$value[1];
							context$4$0.next = 11;
							return value;

						case 11:
							_iteratorNormalCompletion18 = true;
							context$4$0.next = 5;
							break;

						case 14:
							context$4$0.next = 20;
							break;

						case 16:
							context$4$0.prev = 16;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError18 = true;
							_iteratorError18 = context$4$0.t0;

						case 20:
							context$4$0.prev = 20;
							context$4$0.prev = 21;

							if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
								_iterator18["return"]();
							}

						case 23:
							context$4$0.prev = 23;

							if (!_didIteratorError18) {
								context$4$0.next = 26;
								break;
							}

							throw _iteratorError18;

						case 26:
							return context$4$0.finish(23);

						case 27:
							return context$4$0.finish(20);

						case 28:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
			});

			Dict.prototype.items = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.container, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Dict.prototype.update = function (mapping) {
				var _iteratorNormalCompletion19 = true;
				var _didIteratorError19 = false;
				var _iteratorError19 = undefined;

				try {

					for (var _iterator19 = mapping[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
						var _step19$value = _slicedToArray(_step19.value, 2);

						var key = _step19$value[0];
						var value = _step19$value[1];
						this.set(key, value);
					}
				} catch (err) {
					_didIteratorError19 = true;
					_iteratorError19 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
							_iterator19["return"]();
						}
					} finally {
						if (_didIteratorError19) {
							throw _iteratorError19;
						}
					}
				}
			};

			Dict.prototype[Symbol.iterator] = Dict.prototype.items;

			return Dict;
		};

		exports._Dict = _Dict;

		/* js/src/001-adt/OrderedDict.js */

		var _OrderedDict = function _OrderedDict(Dict, Map, DLL) {

			var OrderedDict = function OrderedDict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				this.container = new Map();

				this.map = new Map();

				this.list = new DLL();

				if (mapping !== null) this.update(mapping);
			};

			OrderedDict.prototype = new Dict();

			OrderedDict.prototype.isequal = function (other) {

				if (!(other instanceof OrderedDict)) return false;

				if (!Dict.prototype.isequal.call(this, other)) return false;

				var keys = this.keys();

				var _iteratorNormalCompletion20 = true;
				var _didIteratorError20 = false;
				var _iteratorError20 = undefined;

				try {
					for (var _iterator20 = other.keys()[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
						var key = _step20.value;

						if (keys.next().value !== key) return false;
					}
				} catch (err) {
					_didIteratorError20 = true;
					_iteratorError20 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
							_iterator20["return"]();
						}
					} finally {
						if (_didIteratorError20) {
							throw _iteratorError20;
						}
					}
				}

				return true;
			};

			OrderedDict.prototype.set = function (key, value) {

				if (!this.has(key)) {

					this.map.set(key, this.list.push(key));
				}

				this.container.set(key, value);

				return this;
			};

			OrderedDict.prototype["delete"] = function (key) {

				if (!this.container["delete"](key)) throw new KeyError();

				this.list.erase(this.map.get(key));
				this.map["delete"](key);

				return this;
			};

			OrderedDict.prototype.clear = function () {

				this.container.clear();

				this.map.clear();

				this.list.clear();

				return this;
			};

			OrderedDict.prototype.copy = function () {

				return new OrderedDict(this.items());
			};

			OrderedDict.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new OrderedDict(Mapping.fromkeys(seq, value));
			};

			OrderedDict.prototype.popitem = function () {
				var last = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

				if (this.len() === 0) throw new KeyError();

				var key = last ? this.list.end().prev().value : this.list.begin().next().value;

				return [key, this.pop(key)];
			};

			OrderedDict.prototype.move_to_end = function (key) {
				var last = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

				if (!this.container.has(key)) throw new KeyError();

				this.list.erase(this.map.get(key));

				var iterator = last ? this.list.push(key) : this.list.unshift(key);

				this.map.set(key, iterator);

				return this;
			};

			OrderedDict.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion21 = true;
							_didIteratorError21 = false;
							_iteratorError21 = undefined;
							context$4$0.prev = 3;
							_iterator21 = this.list[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step21.value;
							context$4$0.next = 9;
							return key;

						case 9:
							_iteratorNormalCompletion21 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError21 = true;
							_iteratorError21 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
								_iterator21["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError21) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError21;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			OrderedDict.prototype.values = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion22 = true;
							_didIteratorError22 = false;
							_iteratorError22 = undefined;
							context$4$0.prev = 3;
							_iterator22 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step22.value;
							context$4$0.next = 9;
							return this.container.get(key);

						case 9:
							_iteratorNormalCompletion22 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError22 = true;
							_iteratorError22 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
								_iterator22["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError22) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError22;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			OrderedDict.prototype.items = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion23 = true;
							_didIteratorError23 = false;
							_iteratorError23 = undefined;
							context$4$0.prev = 3;
							_iterator23 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step23.value;
							context$4$0.next = 9;
							return [key, this.container.get(key)];

						case 9:
							_iteratorNormalCompletion23 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError23 = true;
							_iteratorError23 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
								_iterator23["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError23) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError23;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			OrderedDict.prototype[Symbol.iterator] = OrderedDict.prototype.items;

			return OrderedDict;
		};

		exports._OrderedDict = _OrderedDict;

		/* js/src/001-adt/Set.js */

		var _Set = function _Set(BaseSet) {

			var Set = function Set() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				this.container = new BaseSet(iterable);
			};

			Set.wrap = function (A) {

				if (A instanceof Set) return A;

				return new Set(A);
			};

			Set._operator = function (method) {

				return function () {
					for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
						args[_key2] = arguments[_key2];
					}

					return method.apply(this, (function () {
						var _method$apply = [];
						var _iteratorNormalCompletion24 = true;
						var _didIteratorError24 = false;
						var _iteratorError24 = undefined;

						try {
							for (var _iterator24 = args[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
								var arg = _step24.value;

								_method$apply.push(Set.wrap(arg));
							}
						} catch (err) {
							_didIteratorError24 = true;
							_iteratorError24 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
									_iterator24["return"]();
								}
							} finally {
								if (_didIteratorError24) {
									throw _iteratorError24;
								}
							}
						}

						return _method$apply;
					})());
				};
			};

			Set._inclusion = function (A, B) {

				return A._ispropersubset(B) ? -1 : B._ispropersubset(A) ? 1 : 0;
			};

			Set.inclusion = Set._operator(Set._inclusion);

			Set.prototype[Symbol.iterator] = Set.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.container, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Set.prototype.len = function () {

				return this.container.size;
			};

			Set.prototype.has = function (key) {

				return this.container.has(key);
			};

			Set.prototype._isdisjoint = function (other) {

				return this._commonkeys(other).next().done;
			};

			Set.prototype.isdisjoint = Set._operator(Set.prototype._isdisjoint);

			Set.prototype._isequal = function (other) {

				return this._issubset(other) && other._issubset(this);
			};

			Set.prototype.isequal = Set._operator(Set.prototype._isequal);

			Set.prototype._issubset = function (other) {

				if (this.len() > other.len()) return false;

				var _iteratorNormalCompletion25 = true;
				var _didIteratorError25 = false;
				var _iteratorError25 = undefined;

				try {
					for (var _iterator25 = this[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
						var key = _step25.value;
						if (!other.has(key)) return false;
					}
				} catch (err) {
					_didIteratorError25 = true;
					_iteratorError25 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
							_iterator25["return"]();
						}
					} finally {
						if (_didIteratorError25) {
							throw _iteratorError25;
						}
					}
				}

				return true;
			};

			Set.prototype.issubset = Set._operator(Set.prototype._issubset);

			Set.prototype._ispropersubset = function (other) {

				return this._issubset(other) && !this._issuperset(other);
			};

			Set.prototype.ispropersubset = Set._operator(Set.prototype._ispropersubset);

			Set.prototype._issuperset = function (other) {

				return other._issubset(this);
			};

			Set.prototype.issuperset = Set._operator(Set.prototype._issuperset);

			Set.prototype._ispropersuperset = function (other) {

				return this._issuperset(other) && !this._issubset(other);
			};

			Set.prototype.ispropersuperset = Set._operator(Set.prototype._ispropersuperset);

			Set.prototype.union = Set.prototype._union = function () {
				var _copy;

				return (_copy = this.copy())._update.apply(_copy, arguments);
			};

			Set.prototype._commonkeys = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion26,
				    _didIteratorError26,
				    _iteratorError26,
				    _iterator26,
				    _step26,
				    key,
				    _iteratorNormalCompletion27,
				    _didIteratorError27,
				    _iteratorError27,
				    _len3,
				    others,
				    _key3,
				    _iterator27,
				    _step27,
				    other,
				    args$4$0 = arguments;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion26 = true;
							_didIteratorError26 = false;
							_iteratorError26 = undefined;
							context$4$0.prev = 3;
							_iterator26 = this[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done) {
								context$4$0.next = 39;
								break;
							}

							key = _step26.value;
							_iteratorNormalCompletion27 = true;
							_didIteratorError27 = false;
							_iteratorError27 = undefined;
							context$4$0.prev = 10;

							for (_len3 = args$4$0.length, others = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
								others[_key3] = args$4$0[_key3];
							}

							_iterator27 = others[Symbol.iterator]();

						case 13:
							if (_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done) {
								context$4$0.next = 20;
								break;
							}

							other = _step27.value;

							if (other.has(key)) {
								context$4$0.next = 17;
								break;
							}

							return context$4$0.abrupt("continue", 36);

						case 17:
							_iteratorNormalCompletion27 = true;
							context$4$0.next = 13;
							break;

						case 20:
							context$4$0.next = 26;
							break;

						case 22:
							context$4$0.prev = 22;
							context$4$0.t0 = context$4$0["catch"](10);
							_didIteratorError27 = true;
							_iteratorError27 = context$4$0.t0;

						case 26:
							context$4$0.prev = 26;
							context$4$0.prev = 27;

							if (!_iteratorNormalCompletion27 && _iterator27["return"]) {
								_iterator27["return"]();
							}

						case 29:
							context$4$0.prev = 29;

							if (!_didIteratorError27) {
								context$4$0.next = 32;
								break;
							}

							throw _iteratorError27;

						case 32:
							return context$4$0.finish(29);

						case 33:
							return context$4$0.finish(26);

						case 34:
							context$4$0.next = 36;
							return key;

						case 36:
							_iteratorNormalCompletion26 = true;
							context$4$0.next = 5;
							break;

						case 39:
							context$4$0.next = 45;
							break;

						case 41:
							context$4$0.prev = 41;
							context$4$0.t1 = context$4$0["catch"](3);
							_didIteratorError26 = true;
							_iteratorError26 = context$4$0.t1;

						case 45:
							context$4$0.prev = 45;
							context$4$0.prev = 46;

							if (!_iteratorNormalCompletion26 && _iterator26["return"]) {
								_iterator26["return"]();
							}

						case 48:
							context$4$0.prev = 48;

							if (!_didIteratorError26) {
								context$4$0.next = 51;
								break;
							}

							throw _iteratorError26;

						case 51:
							return context$4$0.finish(48);

						case 52:
							return context$4$0.finish(45);

						case 53:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 41, 45, 53], [10, 22, 26, 34], [27,, 29, 33], [46,, 48, 52]]);
			});

			Set.prototype._intersection = function () {

				return new Set(this._commonkeys.apply(this, arguments));
			};

			Set.prototype.intersection = Set._operator(Set.prototype._intersection);

			Set.prototype.difference = Set.prototype._difference = function () {
				var _copy2;

				return (_copy2 = this.copy())._difference_update.apply(_copy2, arguments);
			};

			Set.prototype.symmetric_difference = Set.prototype._symmetric_difference = function (other) {

				return this.copy()._symmetric_difference_update(other);
			};

			Set.prototype.copy = function () {

				return new Set(this);
			};

			Set.prototype.update = Set.prototype._update = function () {
				var _iteratorNormalCompletion28 = true;
				var _didIteratorError28 = false;
				var _iteratorError28 = undefined;

				try {
					for (var _len4 = arguments.length, others = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
						others[_key4] = arguments[_key4];
					}

					for (var _iterator28 = others[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
						var other = _step28.value;
						var _iteratorNormalCompletion29 = true;
						var _didIteratorError29 = false;
						var _iteratorError29 = undefined;

						try {

							for (var _iterator29 = other[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
								var key = _step29.value;
								this.add(key);
							}
						} catch (err) {
							_didIteratorError29 = true;
							_iteratorError29 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion29 && _iterator29["return"]) {
									_iterator29["return"]();
								}
							} finally {
								if (_didIteratorError29) {
									throw _iteratorError29;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError28 = true;
					_iteratorError28 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion28 && _iterator28["return"]) {
							_iterator28["return"]();
						}
					} finally {
						if (_didIteratorError28) {
							throw _iteratorError28;
						}
					}
				}

				return this;
			};

			Set.prototype._intersection_update = function () {

				var intersection = this._intersection.apply(this, arguments);

				this.clear().update(intersection);

				return this;
			};

			Set.prototype.intersection_update = Set._operator(Set.prototype._intersection_update);

			Set.prototype.difference_update = Set.prototype._difference_update = function () {
				var _iteratorNormalCompletion30 = true;
				var _didIteratorError30 = false;
				var _iteratorError30 = undefined;

				try {
					for (var _len5 = arguments.length, others = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
						others[_key5] = arguments[_key5];
					}

					for (var _iterator30 = others[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
						var other = _step30.value;
						var _iteratorNormalCompletion31 = true;
						var _didIteratorError31 = false;
						var _iteratorError31 = undefined;

						try {

							for (var _iterator31 = other[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
								var key = _step31.value;
								this.discard(key);
							}
						} catch (err) {
							_didIteratorError31 = true;
							_iteratorError31 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion31 && _iterator31["return"]) {
									_iterator31["return"]();
								}
							} finally {
								if (_didIteratorError31) {
									throw _iteratorError31;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError30 = true;
					_iteratorError30 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion30 && _iterator30["return"]) {
							_iterator30["return"]();
						}
					} finally {
						if (_didIteratorError30) {
							throw _iteratorError30;
						}
					}
				}

				return this;
			};

			Set.prototype.symmetric_difference_update = Set.prototype._symmetric_difference_update = function (other) {
				var _iteratorNormalCompletion32 = true;
				var _didIteratorError32 = false;
				var _iteratorError32 = undefined;

				try {

					for (var _iterator32 = other[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
						var key = _step32.value;

						if (this.has(key)) this.discard(key);else this.add(key);
					}
				} catch (err) {
					_didIteratorError32 = true;
					_iteratorError32 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion32 && _iterator32["return"]) {
							_iterator32["return"]();
						}
					} finally {
						if (_didIteratorError32) {
							throw _iteratorError32;
						}
					}
				}

				return this;
			};

			Set.prototype.add = function (key) {

				this.container.add(key);

				return this;
			};

			Set.prototype.remove = function (key) {

				if (!this.container["delete"](key)) throw new KeyError();

				return this;
			};

			Set.prototype.discard = function (key) {

				this.container["delete"](key);

				return this;
			};

			Set.prototype.pop = function () {

				if (this.len() === 0) throw new KeyError();

				var key = this.keys().next().value;

				this.discard(key);

				return key;
			};

			Set.prototype.clear = function () {

				this.container.clear();

				return this;
			};

			return Set;
		};

		exports._Set = _Set;

		/* js/src/002-sugar */
		/* js/src/002-sugar/chainmap.js */

		var _chainmap = function _chainmap(ChainMap) {

			var chainmap = function chainmap() {
				for (var _len6 = arguments.length, maps = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
					maps[_key6] = arguments[_key6];
				}

				return new (_bind.apply(ChainMap, [null].concat(maps)))();
			};

			return chainmap;
		};

		exports._chainmap = _chainmap;

		/* js/src/002-sugar/counter.js */

		var _counter = function _counter(Counter) {

			var counter = function counter() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new Counter(iterable);
			};

			return counter;
		};

		exports._counter = _counter;

		/* js/src/002-sugar/defaultdict.js */

		var _defaultdict = function _defaultdict(DefaultDict) {

			var defaultdict = function defaultdict() {
				var default_factory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var mapping = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new DefaultDict(default_factory, mapping);
			};

			return defaultdict;
		};

		exports._defaultdict = _defaultdict;

		/* js/src/002-sugar/dict.js */

		var _dict = function _dict(Dict) {

			var dict = function dict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new Dict(mapping);
			};

			return dict;
		};

		exports._dict = _dict;

		/* js/src/002-sugar/ordereddict.js */

		var _ordereddict = function _ordereddict(OrderedDict) {

			var ordereddict = function ordereddict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new OrderedDict(mapping);
			};

			return ordereddict;
		};

		exports._ordereddict = _ordereddict;

		/* js/src/002-sugar/set.js */

		var _set = function _set(Set) {

			var set = function set() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new Set(iterable);
			};

			return set;
		};

		exports._set = _set;

		/* js/src/003-compile.js */

		var compile = function compile(_ref3) {
			var BaseSet = _ref3.BaseSet;
			var DLL = _ref3.DLL;
			var BaseMap = _ref3.BaseMap;

			var Set = exports._Set(BaseSet);
			var Dict = exports._Dict(BaseMap);
			var OrderedDict = exports._OrderedDict(Dict, BaseMap, DLL);
			var NamedTuple = exports._NamedTuple(Dict, OrderedDict);
			var DefaultDict = exports._DefaultDict(Dict, BaseMap);
			var ChainMap = exports._ChainMap(Dict, Set);
			var Counter = exports._Counter(BaseMap, Dict);
			var namedtuple = exports._namedtuple(NamedTuple);

			return {
				KeyError: KeyError,
				Mapping: Mapping,
				Set: Set,
				set: exports._set(Set),
				Dict: Dict,
				dict: exports._dict(Dict),
				OrderedDict: OrderedDict,
				ordereddict: exports._ordereddict(OrderedDict),
				DefaultDict: DefaultDict,
				defaultdict: exports._defaultdict(DefaultDict),
				ChainMap: ChainMap,
				chainmap: exports._chainmap(ChainMap),
				Counter: Counter,
				counter: exports._counter(Counter),
				NamedTuple: NamedTuple,
				namedtuple: namedtuple
			};
		};

		exports.compile = compile;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-collections", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["collections"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-collections");
})();