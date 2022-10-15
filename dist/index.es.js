import * as React from "react";
import React__default, { createContext, useState, useEffect } from "react";
import { Config } from "js-config-helper";
import axios from "axios";
import { message as message$1, notification as notification$1 } from "antd";
import { Form } from "js-form-helper";
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p2 in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p2))
        d2[p2] = b2[p2];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __2() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__2.prototype = b.prototype, new __2());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t[p2[i]] = s[p2[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _23 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v) {
      return step([n2, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_23)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _23.label++;
            return { value: op[1], done: false };
          case 5:
            _23.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _23.ops.pop();
            _23.trys.pop();
            continue;
          default:
            if (!(t = _23.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _23 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _23.label = op[1];
              break;
            }
            if (op[0] === 6 && _23.label < t[1]) {
              _23.label = t[1];
              t = op;
              break;
            }
            if (t && _23.label < t[2]) {
              _23.label = t[2];
              _23.ops.push(op);
              break;
            }
            if (t[2])
              _23.ops.pop();
            _23.trys.pop();
            continue;
        }
        op = body.call(thisArg, _23);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var genericMessage = "Invariant Violation";
var _a$3 = Object.setPrototypeOf, setPrototypeOf = _a$3 === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a$3;
var InvariantError = function(_super) {
  __extends(InvariantError2, _super);
  function InvariantError2(message2) {
    if (message2 === void 0) {
      message2 = genericMessage;
    }
    var _this = _super.call(this, typeof message2 === "number" ? genericMessage + ": " + message2 + " (see https://github.com/apollographql/invariant-packages)" : message2) || this;
    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError2.prototype);
    return _this;
  }
  return InvariantError2;
}(Error);
function invariant$1(condition, message2) {
  if (!condition) {
    throw new InvariantError(message2);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant2) {
  invariant2.debug = wrapConsoleMethod("debug");
  invariant2.log = wrapConsoleMethod("log");
  invariant2.warn = wrapConsoleMethod("warn");
  invariant2.error = wrapConsoleMethod("error");
})(invariant$1 || (invariant$1 = {}));
function maybe$2(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}
var global$1 = maybe$2(function() {
  return globalThis;
}) || maybe$2(function() {
  return window;
}) || maybe$2(function() {
  return self;
}) || maybe$2(function() {
  return global;
}) || maybe$2(function() {
  return maybe$2.constructor("return this")();
});
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a2) {
    Object.defineProperty(global$1, GLOBAL_KEY, {
      value: maybe$2(function() {
        return "production";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global$1[GLOBAL_KEY];
  }
}
var DEV = getDEV();
function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_23) {
  }
}
var safeGlobal = maybe$1(function() {
  return globalThis;
}) || maybe$1(function() {
  return window;
}) || maybe$1(function() {
  return self;
}) || maybe$1(function() {
  return global;
}) || maybe$1(function() {
  return maybe$1.constructor("return this")();
});
var needToRemove = false;
function install() {
  if (safeGlobal && !maybe$1(function() {
    return "production";
  }) && !maybe$1(function() {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          NODE_ENV: "production"
        }
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
}
install();
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}
var SYMBOL_TO_STRING_TAG = typeof Symbol === "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";
var Kind = Object.freeze({
  NAME: "Name",
  DOCUMENT: "Document",
  OPERATION_DEFINITION: "OperationDefinition",
  VARIABLE_DEFINITION: "VariableDefinition",
  SELECTION_SET: "SelectionSet",
  FIELD: "Field",
  ARGUMENT: "Argument",
  FRAGMENT_SPREAD: "FragmentSpread",
  INLINE_FRAGMENT: "InlineFragment",
  FRAGMENT_DEFINITION: "FragmentDefinition",
  VARIABLE: "Variable",
  INT: "IntValue",
  FLOAT: "FloatValue",
  STRING: "StringValue",
  BOOLEAN: "BooleanValue",
  NULL: "NullValue",
  ENUM: "EnumValue",
  LIST: "ListValue",
  OBJECT: "ObjectValue",
  OBJECT_FIELD: "ObjectField",
  DIRECTIVE: "Directive",
  NAMED_TYPE: "NamedType",
  LIST_TYPE: "ListType",
  NON_NULL_TYPE: "NonNullType",
  SCHEMA_DEFINITION: "SchemaDefinition",
  OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
  SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
  OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
  FIELD_DEFINITION: "FieldDefinition",
  INPUT_VALUE_DEFINITION: "InputValueDefinition",
  INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
  UNION_TYPE_DEFINITION: "UnionTypeDefinition",
  ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
  ENUM_VALUE_DEFINITION: "EnumValueDefinition",
  INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
  DIRECTIVE_DEFINITION: "DirectiveDefinition",
  SCHEMA_EXTENSION: "SchemaExtension",
  SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
  OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
  INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
  UNION_TYPE_EXTENSION: "UnionTypeExtension",
  ENUM_TYPE_EXTENSION: "EnumTypeExtension",
  INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
});
function invariant(condition, message2) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message2 != null ? message2 : "Unexpected invariant triggered.");
  }
}
var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
var nodejsCustomInspectSymbol$1 = nodejsCustomInspectSymbol;
function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === "function" || invariant(0);
  classObject.prototype.inspect = fn;
  if (nodejsCustomInspectSymbol$1) {
    classObject.prototype[nodejsCustomInspectSymbol$1] = fn;
  }
}
var Location = /* @__PURE__ */ function() {
  function Location2(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  var _proto = Location2.prototype;
  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };
  return Location2;
}();
defineInspect(Location);
var Token = /* @__PURE__ */ function() {
  function Token2(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
  var _proto2 = Token2.prototype;
  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };
  return Token2;
}();
defineInspect(Token);
function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === "string";
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (_typeof$1(value)) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? "[function ".concat(value.name, "]") : "[function]";
    case "object":
      if (value === null) {
        return "null";
      }
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return "[Circular]";
  }
  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);
  if (customInspectFn !== void 0) {
    var customValue = customInspectFn.call(value);
    if (customValue !== value) {
      return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function formatObject(object, seenValues) {
  var keys = Object.keys(object);
  if (keys.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  var properties = keys.map(function(key) {
    var value = formatValue(object[key], seenValues);
    return key + ": " + value;
  });
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];
  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }
  return "[" + items.join(", ") + "]";
}
function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol$1)];
  if (typeof customInspectFn === "function") {
    return customInspectFn;
  }
  if (typeof object.inspect === "function") {
    return object.inspect;
  }
}
function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    var name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
function devAssert(condition, message2) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message2);
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
var Source = /* @__PURE__ */ function() {
  function Source2(body) {
    var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request";
    var locationOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === "string" || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(0, "line in locationOffset is 1-indexed and must be positive.");
    this.locationOffset.column > 0 || devAssert(0, "column in locationOffset is 1-indexed and must be positive.");
  }
  _createClass$3(Source2, [{
    key: SYMBOL_TO_STRING_TAG,
    get: function get2() {
      return "Source";
    }
  }]);
  return Source2;
}();
function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isSingleLine = value.indexOf("\n") === -1;
  var hasLeadingSpace = value[0] === " " || value[0] === "	";
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === "\\";
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = "";
  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += "\n" + indentation;
  }
  result += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
  if (printAsMultipleLines) {
    result += "\n";
  }
  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}
var QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
  InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
var BREAK = Object.freeze({});
function visit(root2, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
  var stack = void 0;
  var inArray = Array.isArray(root2);
  var keys = [root2];
  var index = -1;
  var edits = [];
  var node = void 0;
  var key = void 0;
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root2;
  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : void 0;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === void 0) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }
    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);
        if (result === BREAK) {
          break;
        }
        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== void 0) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }
  return newRoot;
}
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === "function") {
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === "function") {
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === "function") {
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === "function") {
        return specificKindVisitor;
      }
    }
  }
}
function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return "$" + node.name;
  },
  Document: function Document(node) {
    return join(node.definitions, "\n\n") + "\n";
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap$1("(", join(node.variableDefinitions, ", "), ")");
    var directives = join(node.directives, " ");
    var selectionSet = node.selectionSet;
    return !name && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], " ");
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
    return variable + ": " + type + wrap$1(" = ", defaultValue) + wrap$1(" ", join(directives, " "));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
    var prefix = wrap$1("", alias, ": ") + name;
    var argsLine = prefix + wrap$1("(", join(args, ", "), ")");
    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap$1("(\n", indent(join(args, "\n")), "\n)");
    }
    return join([argsLine, join(directives, " "), selectionSet], " ");
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name, value = _ref4.value;
    return name + ": " + value;
  },
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name, directives = _ref5.directives;
    return "..." + name + wrap$1(" ", join(directives, " "));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
    return join(["...", wrap$1("on ", typeCondition), join(directives, " "), selectionSet], " ");
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
    return "fragment ".concat(name).concat(wrap$1("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap$1("", join(directives, " "), " ")) + selectionSet;
  },
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value, isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === "description" ? "" : "  ") : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? "true" : "false";
  },
  NullValue: function NullValue() {
    return "null";
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return "[" + join(values, ", ") + "]";
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return "{" + join(fields, ", ") + "}";
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name, value = _ref15.value;
    return name + ": " + value;
  },
  Directive: function Directive(_ref16) {
    var name = _ref16.name, args = _ref16.arguments;
    return "@" + name + wrap$1("(", join(args, ", "), ")");
  },
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return "[" + type + "]";
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + "!";
  },
  SchemaDefinition: addDescription(function(_ref20) {
    var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
    return join(["schema", join(directives, " "), block(operationTypes)], " ");
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation, type = _ref21.type;
    return operation + ": " + type;
  },
  ScalarTypeDefinition: addDescription(function(_ref22) {
    var name = _ref22.name, directives = _ref22.directives;
    return join(["scalar", name, join(directives, " ")], " ");
  }),
  ObjectTypeDefinition: addDescription(function(_ref23) {
    var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
    return join(["type", name, wrap$1("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  }),
  FieldDefinition: addDescription(function(_ref24) {
    var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + ": " + type + wrap$1(" ", join(directives, " "));
  }),
  InputValueDefinition: addDescription(function(_ref25) {
    var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
    return join([name + ": " + type, wrap$1("= ", defaultValue), join(directives, " ")], " ");
  }),
  InterfaceTypeDefinition: addDescription(function(_ref26) {
    var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
    return join(["interface", name, wrap$1("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  }),
  UnionTypeDefinition: addDescription(function(_ref27) {
    var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
    return join(["union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
  }),
  EnumTypeDefinition: addDescription(function(_ref28) {
    var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
    return join(["enum", name, join(directives, " "), block(values)], " ");
  }),
  EnumValueDefinition: addDescription(function(_ref29) {
    var name = _ref29.name, directives = _ref29.directives;
    return join([name, join(directives, " ")], " ");
  }),
  InputObjectTypeDefinition: addDescription(function(_ref30) {
    var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
    return join(["input", name, join(directives, " "), block(fields)], " ");
  }),
  DirectiveDefinition: addDescription(function(_ref31) {
    var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
    return "directive @" + name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
    return join(["extend schema", join(directives, " "), block(operationTypes)], " ");
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name, directives = _ref33.directives;
    return join(["extend scalar", name, join(directives, " ")], " ");
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
    return join(["extend type", name, wrap$1("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
    return join(["extend interface", name, wrap$1("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
    return join(["extend union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
    return join(["extend enum", name, join(directives, " "), block(values)], " ");
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
    return join(["extend input", name, join(directives, " "), block(fields)], " ");
  }
};
function addDescription(cb) {
  return function(node) {
    return join([node.description, cb(node)], "\n");
  };
}
function join(maybeArray) {
  var _maybeArray$filter$jo;
  var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap$1("{\n", indent(join(array, "\n")), "\n}");
}
function wrap$1(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap$1("  ", str.replace(/\n/g, "\n  "));
}
function isMultiline(str) {
  return str.indexOf("\n") !== -1;
}
function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}
function checkDEV() {
  __DEV__ ? invariant$1("boolean" === typeof DEV, DEV) : invariant$1("boolean" === typeof DEV, 38);
}
removeTemporaryGlobals();
checkDEV();
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? invariant$1(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant$1(evaledValue !== void 0, 39);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root2, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root2, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
  return document && hasDirectives(["client", "export"], document, true);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? invariant$1(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant$1(directiveArguments && directiveArguments.length === 1, 40);
      var ifArgument = directiveArguments[0];
      __DEV__ ? invariant$1(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @".concat(directiveName, " directive.")) : invariant$1(ifArgument.name && ifArgument.name.value === "if", 41);
      var ifValue = ifArgument.value;
      __DEV__ ? invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 42);
      result.push({ directive, ifArgument });
    });
  }
  return result;
}
function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw __DEV__ ? new InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(43);
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    __DEV__ ? invariant$1(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant$1(fragments.length === 1, 44);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      __DEV__ ? invariant$1(fragment, "No fragment named ".concat(fragmentName)) : invariant$1(fragment, 45);
      return fragment || null;
    }
    default:
      return null;
  }
}
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new InvariantError('The inline argument "'.concat(name.value, '" of kind "').concat(value.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new InvariantError(54);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});
var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy2, key) {
      copy2[key] = value[key];
      return copy2;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === "string") {
    return result.__typename;
  }
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
  __DEV__ ? invariant$1(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant$1(doc && doc.kind === "Document", 46);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "'.concat(definition.kind, '"')) : new InvariantError(47);
    }
    return definition;
  });
  __DEV__ ? invariant$1(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant$1(operations.length <= 1, 48);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? invariant$1(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant$1(queryDef && queryDef.operation === "query", 49);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? invariant$1(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant$1(doc.kind === "Document", 50);
  __DEV__ ? invariant$1(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant$1(doc.definitions.length <= 1, 51);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? invariant$1(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant$1(fragmentDef.kind === "FragmentDefinition", 52);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition = _a2[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(53);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}
function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function(elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}
var TYPENAME_FIELD = {
  kind: "Field",
  name: {
    kind: "Name",
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === "FragmentSpread" && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function(dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = /* @__PURE__ */ Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = /* @__PURE__ */ Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
    Variable: {
      enter: function(node, _key, parent) {
        if (parent.kind !== "VariableDefinition") {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function(node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function(directive) {
            return directive.remove;
          });
          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function(arg) {
                if (arg.value.kind === "Variable") {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }
            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }
            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function(node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function(node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));
  if (modifiedDoc && filterInPlace(variablesToRemove, function(v) {
    return !!v.name && !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }
  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }
  return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === "OperationDefinition") {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function(directive) {
    var willRemove = directive.name.value === "connection";
    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function(arg) {
        return arg.name.value === "key";
      })) {
        __DEV__ && invariant$1.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
      }
    }
    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config2) {
  return function argumentMatcher(argument) {
    return config2.some(function(aConfig) {
      return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}
function removeArgumentsFromDocument(config2, doc) {
  var argMatcher = getArgumentMatcher(config2);
  return nullIfDocIsEmpty(visit(doc, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
          return !config2.some(function(arg) {
            return arg.name === varDef.variable.name.value;
          });
        }) : [] });
      }
    },
    Field: {
      enter: function(node) {
        var shouldRemoveField = config2.some(function(argConfig) {
          return argConfig.remove;
        });
        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          if (node.arguments) {
            node.arguments.forEach(function(arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }
          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function(node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config2, doc) {
  function enter(node) {
    if (config2.some(function(def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }
  return nullIfDocIsEmpty(visit(doc, {
    FragmentSpread: { enter },
    FragmentDefinition: { enter }
  }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function(selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === "FragmentSpread") {
      allFragments.push(selection);
    }
  });
  return allFragments;
}
function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document;
  }
  var modifiedDoc = visit(document, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document);
  if (modifiedDoc) {
    modifiedDoc = visit(modifiedDoc, {
      FragmentDefinition: {
        enter: function(node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
              return isField(selection) && selection.name.value === "__typename";
            });
            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }
  return modifiedDoc;
}
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = /* @__PURE__ */ new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty$6.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (!this.pastCopies.has(value)) {
        if (Array.isArray(value)) {
          value = value.slice(0);
        } else {
          value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        this.pastCopies.add(value);
      }
    }
    return value;
  };
  return DeepMerger2;
}();
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x) {
  return x instanceof Observable;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m2 = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m2)
          m2.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m2)
          m2.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m2)
          m2.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
  function Subscription2(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }
    if (this._state === "initializing")
      this._state = "ready";
  }
  var _proto = Subscription2.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass$2(Subscription2, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription2;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error2(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass$2(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable = /* @__PURE__ */ function() {
  function Observable2(subscriber) {
    if (!(this instanceof Observable2))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable2.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map(fn) {
    var _this2 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter(fn) {
    var _this3 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value))
              return;
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          if (!hasValue && !hasSeed)
            return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscription;
      var index = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v) {
            observer.next(v);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (index === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }
          var inner = C.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0)
                subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0)
          observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable2.from = function from(x) {
    var C = typeof this === "function" ? this : Observable2;
    if (x == null)
      throw new TypeError(x + " is not an object");
    var method = getMethod(x, SymbolObservable);
    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable)
        throw new TypeError(observable + " is not an object");
      if (isObservable(observable) && observable.constructor === C)
        return observable;
      return new C(function(observer) {
        return observable.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x, SymbolIterator);
      if (method) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x)) {
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x + " is not observable");
  };
  Observable2.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C = typeof this === "function" ? this : Observable2;
    return new C(function(observer) {
      enqueue(function() {
        if (observer.closed)
          return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed)
            return;
        }
        observer.complete();
      });
    });
  };
  _createClass$2(Observable2, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable2;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}
function symbolObservablePonyfill(root2) {
  var result;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result;
      } catch (err) {
      }
    }
  } else {
    result = "@@observable";
  }
  return result;
}
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
symbolObservablePonyfill(root);
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}
var toString$1 = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString$1.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }
  return obj;
}
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error2 = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result) {
            --activeCallbackCount;
            next && next.call(observer, result);
            if (completed) {
              handler.complete();
            }
          }, function(error3) {
            --activeCallbackCount;
            throw error3;
          }).catch(function(caught) {
            error2 && error2.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error2),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}
var canUseWeakMap = typeof WeakMap === "function" && maybe$2(function() {
  return navigator.product;
}) !== "ReactNative";
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
typeof maybe$2(function() {
  return window.document.createElement;
}) === "function";
maybe$2(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          _this.notify("next", result);
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function(error2) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error2];
          _this.reject(error2);
          _this.notify("error", error2);
          iterateObserversSafely(_this.observers, "error", error2);
        }
      },
      complete: function() {
        var sub = _this.sub;
        if (sub !== null) {
          var value = _this.sources.shift();
          if (!value) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            _this.notify("complete");
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.nextResultListeners = /* @__PURE__ */ new Set();
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_23) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
    }
  };
  Concast2.prototype.removeObserver = function(observer) {
    if (this.observers.delete(observer) && this.observers.size < 1) {
      this.handlers.complete();
    }
  };
  Concast2.prototype.notify = function(method, arg) {
    var nextResultListeners = this.nextResultListeners;
    if (nextResultListeners.size) {
      this.nextResultListeners = /* @__PURE__ */ new Set();
      nextResultListeners.forEach(function(listener) {
        return listener(method, arg);
      });
    }
  };
  Concast2.prototype.beforeNext = function(callback) {
    var called = false;
    this.nextResultListeners.add(function(method, arg) {
      if (!called) {
        called = true;
        callback(method, arg);
      }
    });
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
function graphQLResultHasError(result) {
  return result.errors && result.errors.length > 0 || false;
}
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function stringifyForDisplay(value) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}
function mergeOptions(defaults, options) {
  return compact(defaults, options, options.variables && {
    variables: __assign(__assign({}, defaults && defaults.variables), options.variables)
  });
}
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var throwServerError = function(response, result, message2) {
  var error2 = new Error(message2);
  error2.name = "ServerError";
  error2.response = response;
  error2.statusCode = response.status;
  error2.result = result;
  throw error2;
};
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw __DEV__ ? new InvariantError("illegal argument: ".concat(key)) : new InvariantError(26);
    }
  }
  return operation;
}
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var LinkError = function(_super) {
  __extends(LinkError2, _super);
  function LinkError2(message2, link) {
    var _this = _super.call(this, message2) || this;
    _this.link = link;
    return _this;
  }
  return LinkError2;
}(Error);
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links) {
    if (links.length === 0)
      return ApolloLink2.empty();
    return links.map(toLink).reduce(function(x, y) {
      return x.concat(y);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      __DEV__ && invariant$1.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(21);
  };
  ApolloLink2.prototype.onError = function(error2, observer) {
    if (observer && observer.error) {
      observer.error(error2);
      return false;
    }
    throw error2;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();
var execute = ApolloLink.execute;
var version = "3.7.0";
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function asyncIterator(source) {
  var _a2;
  var iterator = source[Symbol.asyncIterator]();
  return _a2 = {
    next: function() {
      return iterator.next();
    }
  }, _a2[Symbol.asyncIterator] = function() {
    return this;
  }, _a2;
}
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error2 = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error2)
      return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError(err) {
    error2 = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error2)
        return reject(error2);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, observer) {
  var _a2, _b, _c;
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _d, value, done, chunk, bi, message2, i, headers, contentType_1, body, result;
    var _e;
    return __generator(this, function(_f) {
      switch (_f.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_a2 = response.headers) === null || _a2 === void 0 ? void 0 : _a2.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _f.label = 1;
        case 1:
          if (!running)
            return [3, 3];
          return [4, iterator.next()];
        case 2:
          _d = _f.sent(), value = _d.value, done = _d.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary);
          while (bi > -1) {
            message2 = void 0;
            _e = [
              buffer.slice(0, bi),
              buffer.slice(bi + boundary.length)
            ], message2 = _e[0], buffer = _e[1];
            if (message2.trim()) {
              i = message2.indexOf("\r\n\r\n");
              headers = parseHeaders(message2.slice(0, i));
              contentType_1 = headers["content-type"];
              if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
                throw new Error("Unsupported patch content type: application/json is required.");
              }
              body = message2.slice(i);
              try {
                result = parseJsonBody(response, body.replace("\r\n", ""));
                if (Object.keys(result).length > 1 || "data" in result || "incremental" in result || "errors" in result) {
                  (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, result);
                }
              } catch (err) {
                handleError(err, observer);
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
          return [2];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i = line.indexOf(":");
    if (i > -1) {
      var name_1 = line.slice(0, i).trim().toLowerCase();
      var value = line.slice(i + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  var _a2, _b;
  if (err.name === "AbortError")
    return;
  if (err.result && err.result.errors && err.result.data) {
    (_a2 = observer.next) === null || _a2 === void 0 ? void 0 : _a2.call(observer, err.result);
  }
  (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
function readJsonBody(response, operation, observer) {
  parseAndCheckHttpResponse(operation)(response).then(function(result) {
    var _a2, _b;
    (_a2 = observer.next) === null || _a2 === void 0 ? void 0 : _a2.call(observer, result);
    (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
  }).catch(function(err) {
    return handleError(err, observer);
  });
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result) && !hasOwnProperty$5.call(result, "data") && !hasOwnProperty$5.call(result, "errors")) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result;
    });
  };
}
var serializeFetchParameter = function(p2, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p2);
  } catch (e) {
    var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new InvariantError(23);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions$1 = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions$1
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http2 = {};
  configs.forEach(function(config2) {
    options = __assign(__assign(__assign({}, options), config2.options), { headers: __assign(__assign({}, options.headers), config2.headers) });
    if (config2.credentials) {
      options.credentials = config2.credentials;
    }
    http2 = __assign(__assign({}, http2), config2.http);
  });
  options.headers = removeDuplicateHeaders(options.headers, http2.preserveHeaderCase);
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http2.includeExtensions)
    body.extensions = extensions;
  if (http2.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = { originalName: name, value: headers[name] };
  });
  var normalizedHeaders = /* @__PURE__ */ Object.create(null);
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(22);
  }
};
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var backupFetch = maybe$2(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  if (__DEV__) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions, preserveHeaderCase },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit(operation.query, {
        Variable: function(node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames_1.delete(node.name.value);
          }
        }
      });
      if (unusedNames_1.size) {
        body.variables = __assign({}, body.variables);
        unusedNames_1.forEach(function(name) {
          delete body.variables[name];
        });
      }
    }
    var controller;
    if (!options.signal) {
      var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
      controller = _controller;
      if (controller)
        options.signal = signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDirectives(["defer"], operation.query)) {
      options.headers.accept = "multipart/mixed; deferSpec=20220824, application/json";
    }
    if (options.method === "GET") {
      var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe$2(function() {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function(response) {
        var _a4;
        operation.setContext({ response });
        var ctype = (_a4 = response.headers) === null || _a4 === void 0 ? void 0 : _a4.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observer);
        } else {
          return readJsonBody(response, operation, observer);
        }
      }).catch(function(err) {
        return handleError(err, observer);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);
var _a$2 = Object.prototype, toString = _a$2.toString, hasOwnProperty$4 = _a$2.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
function check(a, b) {
  if (a === b) {
    return true;
  }
  var aTag = toString.call(a);
  var bTag = toString.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a, b))
        return true;
      var aKeys = definedKeys(a);
      var bKeys = definedKeys(b);
      var keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (var k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty$4.call(b, aKeys[k])) {
          return false;
        }
      }
      for (var k = 0; k < keyCount; ++k) {
        var key = aKeys[k];
        if (!check(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a)
        return b !== b;
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == "".concat(b);
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size)
        return false;
      if (previouslyCompared(a, b))
        return true;
      var aIterator = a.entries();
      var isMap = aTag === "[object Map]";
      while (true) {
        var info = aIterator.next();
        if (info.done)
          break;
        var _a2 = info.value, aKey = _a2[0], aValue = _a2[1];
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case "[object DataView]": {
      var len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      var aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  var fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  var bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}
function isExecutionPatchIncrementalResult(value) {
  return !!value.incremental;
}
var defaultMakeData = function() {
  return /* @__PURE__ */ Object.create(null);
};
var _a$1 = Array.prototype, forEach = _a$1.forEach, slice = _a$1.slice;
var Trie = function() {
  function Trie2(weakness, makeData) {
    if (weakness === void 0) {
      weakness = true;
    }
    if (makeData === void 0) {
      makeData = defaultMakeData;
    }
    this.weakness = weakness;
    this.makeData = makeData;
  }
  Trie2.prototype.lookup = function() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i] = arguments[_i];
    }
    return this.lookupArray(array);
  };
  Trie2.prototype.lookupArray = function(array) {
    var node = this;
    forEach.call(array, function(key) {
      return node = node.getChildTrie(key);
    });
    return node.data || (node.data = this.makeData(slice.call(array)));
  };
  Trie2.prototype.getChildTrie = function(key) {
    var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    var child = map.get(key);
    if (!child)
      map.set(key, child = new Trie2(this.weakness, this.makeData));
    return child;
  };
  return Trie2;
}();
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}
var currentContext$1 = null;
var MISSING_VALUE$1 = {};
var idCounter$1 = 1;
var makeSlotClass$1 = function() {
  return function() {
    function Slot2() {
      this.id = [
        "slot",
        idCounter$1++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    Slot2.prototype.hasValue = function() {
      for (var context_1 = currentContext$1; context_1; context_1 = context_1.parent) {
        if (this.id in context_1.slots) {
          var value = context_1.slots[this.id];
          if (value === MISSING_VALUE$1)
            break;
          if (context_1 !== currentContext$1) {
            currentContext$1.slots[this.id] = value;
          }
          return true;
        }
      }
      if (currentContext$1) {
        currentContext$1.slots[this.id] = MISSING_VALUE$1;
      }
      return false;
    };
    Slot2.prototype.getValue = function() {
      if (this.hasValue()) {
        return currentContext$1.slots[this.id];
      }
    };
    Slot2.prototype.withValue = function(value, callback, args, thisArg) {
      var _a2;
      var slots = (_a2 = {
        __proto__: null
      }, _a2[this.id] = value, _a2);
      var parent = currentContext$1;
      currentContext$1 = { parent, slots };
      try {
        return callback.apply(thisArg, args);
      } finally {
        currentContext$1 = parent;
      }
    };
    Slot2.bind = function(callback) {
      var context = currentContext$1;
      return function() {
        var saved = currentContext$1;
        try {
          currentContext$1 = context;
          return callback.apply(this, arguments);
        } finally {
          currentContext$1 = saved;
        }
      };
    };
    Slot2.noContext = function(callback, args, thisArg) {
      if (currentContext$1) {
        var saved = currentContext$1;
        try {
          currentContext$1 = null;
          return callback.apply(thisArg, args);
        } finally {
          currentContext$1 = saved;
        }
      } else {
        return callback.apply(thisArg, args);
      }
    };
    return Slot2;
  }();
};
var globalKey$1 = "@wry/context:Slot";
var host$1 = Array;
var Slot$1 = host$1[globalKey$1] || function() {
  var Slot2 = makeSlotClass$1();
  try {
    Object.defineProperty(host$1, globalKey$1, {
      value: host$1[globalKey$1] = Slot2,
      enumerable: false,
      writable: false,
      configurable: false
    });
  } finally {
    return Slot2;
  }
}();
Slot$1.bind;
Slot$1.noContext;
function defaultDispose() {
}
var Cache = function() {
  function Cache2(max, dispose) {
    if (max === void 0) {
      max = Infinity;
    }
    if (dispose === void 0) {
      dispose = defaultDispose;
    }
    this.max = max;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  Cache2.prototype.has = function(key) {
    return this.map.has(key);
  };
  Cache2.prototype.get = function(key) {
    var node = this.getNode(key);
    return node && node.value;
  };
  Cache2.prototype.getNode = function(key) {
    var node = this.map.get(key);
    if (node && node !== this.newest) {
      var older = node.older, newer = node.newer;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  };
  Cache2.prototype.set = function(key, value) {
    var node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  };
  Cache2.prototype.clean = function() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  };
  Cache2.prototype.delete = function(key) {
    var node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  };
  return Cache2;
}();
var parentEntrySlot = new Slot$1();
var _a;
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var toArray = (_a = Array.from, _a === void 0 ? function(collection) {
  var array = [];
  collection.forEach(function(item) {
    return array.push(item);
  });
  return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
  var unsubscribe = entryOrDep.unsubscribe;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  var len = a.length;
  return len > 0 && len === b.length && a[len - 1] === b[len - 1];
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = function() {
  function Entry2(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++Entry2.count;
  }
  Entry2.prototype.peek = function() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  };
  Entry2.prototype.recompute = function(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  };
  Entry2.prototype.setDirty = function() {
    if (this.dirty)
      return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this);
    maybeUnsubscribe(this);
  };
  Entry2.prototype.dispose = function() {
    var _this = this;
    this.setDirty();
    forgetChildren(this);
    eachParent(this, function(parent, child) {
      parent.setDirty();
      forgetChild(parent, _this);
    });
  };
  Entry2.prototype.forget = function() {
    this.dispose();
  };
  Entry2.prototype.dependOn = function(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  };
  Entry2.prototype.forgetDeps = function() {
    var _this = this;
    if (this.deps) {
      toArray(this.deps).forEach(function(dep2) {
        return dep2.delete(_this);
      });
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  };
  Entry2.count = 0;
  return Entry2;
}();
function rememberParent(child) {
  var parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
  } catch (e) {
    entry.value[1] = e;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  var parentCount = child.parents.size;
  if (parentCount) {
    var parents = toArray(child.parents);
    for (var i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  var parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  var dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach(function(_value, child) {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
};
function dep(options) {
  var depsByKey = /* @__PURE__ */ new Map();
  var subscribe = options && options.subscribe;
  function depend(key) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
      var dep_1 = depsByKey.get(key);
      if (!dep_1) {
        depsByKey.set(key, dep_1 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep_1);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep_1);
        dep_1.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    var dep2 = depsByKey.get(key);
    if (dep2) {
      var m_1 = entryMethodName && hasOwnProperty$3.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      toArray(dep2).forEach(function(entry) {
        return entry[m_1]();
      });
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}
function makeDefaultMakeCacheKeyFunction() {
  var keyTrie = new Trie(typeof WeakMap === "function");
  return function() {
    return keyTrie.lookupArray(arguments);
  };
}
makeDefaultMakeCacheKeyFunction();
var caches = /* @__PURE__ */ new Set();
function wrap(originalFunction, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var cache = new Cache(options.max || Math.pow(2, 16), function(entry) {
    return entry.dispose();
  });
  var keyArgs = options.keyArgs;
  var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
  var optimistic = function() {
    var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    var entry = cache.get(key);
    if (!entry) {
      cache.set(key, entry = new Entry(originalFunction));
      entry.subscribe = options.subscribe;
      entry.forget = function() {
        return cache.delete(key);
      };
    }
    var value = entry.recompute(Array.prototype.slice.call(arguments));
    cache.set(key, entry);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function(cache2) {
        return cache2.clean();
      });
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: function() {
      return cache["map"].size;
    },
    configurable: false,
    enumerable: false
  });
  function dirtyKey(key) {
    var entry = cache.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    var entry = cache.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return cache.delete(key);
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}
var ApolloCache = function() {
  function ApolloCache2() {
    this.getFragmentDoc = wrap(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document) {
    return document;
  };
  ApolloCache2.prototype.transformForLink = function(document) {
    return document;
  };
  ApolloCache2.prototype.identify = function(object) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a2) {
    var id = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a2) {
    var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeQuery(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeFragment(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();
var MissingFieldError = function(_super) {
  __extends(MissingFieldError2, _super);
  function MissingFieldError2(message2, path, query, variables) {
    var _a2;
    var _this = _super.call(this, message2) || this;
    _this.message = message2;
    _this.path = path;
    _this.query = query;
    _this.variables = variables;
    if (Array.isArray(_this.path)) {
      _this.missing = _this.message;
      for (var i = _this.path.length - 1; i >= 0; --i) {
        _this.missing = (_a2 = {}, _a2[_this.path[i]] = _this.missing, _a2);
      }
    } else {
      _this.missing = _this.path;
    }
    _this.__proto__ = MissingFieldError2.prototype;
    return _this;
  }
  return MissingFieldError2;
}(Error);
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
var isArray = Array.isArray;
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? { id } : !isNullish(_id) ? { _id } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config2) {
  return compact(defaultConfig, config2);
}
function shouldCanonizeResults(config2) {
  var value = config2.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store2, objectOrReference) {
  return isReference(objectOrReference) ? store2.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray(result) ? result.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = /* @__PURE__ */ Object.create(null);
    this.rootIds = /* @__PURE__ */ Object.create(null);
    this.refs = /* @__PURE__ */ Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id = _this.policies.identify(objOrIdOrRef)[0];
      if (id) {
        var ref = makeReference(id);
        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }
        return ref;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return /* @__PURE__ */ Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    __DEV__ ? invariant$1(typeof dataId === "string", "store.merge expects a string ID") : invariant$1(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = /* @__PURE__ */ Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a2;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = /* @__PURE__ */ new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id) {
        return root_1.delete(id);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
      var root2 = this.data[dataId];
      if (!root2)
        return found_1;
      var workSet_1 = /* @__PURE__ */ new Set([root2]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store2, entityId) {
  if (supportsResultCaching(store2)) {
    store2.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a2) {
      var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign(__assign({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p2 = this.parent;
    while (p2.parent)
      p2 = p2.parent;
    return p2.getStorage.apply(p2, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root2) {
    return _super.call(this, "EntityStore.Stump", root2, function() {
    }, new CacheGroup(root2.group.caching, root2.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store2) {
  return !!(store2 instanceof EntityStore && store2.group.caching);
}
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = /* @__PURE__ */ new WeakMap();
    this.keysByJSON = /* @__PURE__ */ new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy2 = shallowCopy(value);
      this.passes.set(copy2, value);
      return copy2;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto = Object.getPrototypeOf(value);
      switch (proto) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array = value.map(this.admit, this);
          var node = this.pool.lookupArray(array);
          if (!node.array) {
            this.known.add(node.array = array);
            if (__DEV__) {
              Object.freeze(array);
            }
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys = this.sortedKeys(value);
          array_1.push(keys.json);
          var firstValueIndex_1 = array_1.length;
          keys.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys.sorted.forEach(function(key, i) {
              obj_1[key] = array_1[firstValueIndex_1 + i];
            });
            if (__DEV__) {
              Object.freeze(obj_1);
            }
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);
    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config2) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config2, {
      addTypename: config2.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config2)
    });
    this.canon = config2.canon || new ObjectCanon();
    this.executeSelectionSet = wrap(function(options) {
      var _a2;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a2) {
        var field = _a2.field, array = _a2.array, context = _a2.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
    var store2 = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: __assign({ store: store2, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
    });
    var missing;
    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
      if (latest && result === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
    var _this = this;
    var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store2 = context.store;
    var typename = store2.getFieldValue(objectOrReference, "__typename");
    var objectsToMerge = [];
    var missing;
    var missingMerger = new DeepMerger();
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      objectsToMerge.push({ __typename: typename });
    }
    function handleMissing(result2, resultName) {
      var _a3;
      if (result2.missing) {
        missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result2.missing, _a3));
      }
      return result2.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a3, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
          }
        } else if (isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.lookupFragment);
        if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
          throw __DEV__ ? new InvariantError("No fragment named ".concat(selection.name.value)) : new InvariantError(5);
        }
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var result = mergeDeepArray(objectsToMerge);
    var finalResult = { result, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
    var _this = this;
    var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
    var missing;
    var missingMerger = new DeepMerger();
    function handleMissing(childResult, i) {
      var _a3;
      if (childResult.missing) {
        missing = missingMerger.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }
    array = array.map(function(item, i) {
      if (item === null) {
        return null;
      }
      if (isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i);
      }
      if (__DEV__) {
        assertSelectionSetForIdValue(context.store, field, item);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_23, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}
function assertSelectionSetForIdValue(store2, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        __DEV__ ? invariant$1(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store2, value), " returned for query field ").concat(field.name.value)) : invariant$1(!isReference(value), 6);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = function() {
  return function() {
    function Slot2() {
      this.id = [
        "slot",
        idCounter++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    Slot2.prototype.hasValue = function() {
      for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
        if (this.id in context_1.slots) {
          var value = context_1.slots[this.id];
          if (value === MISSING_VALUE)
            break;
          if (context_1 !== currentContext) {
            currentContext.slots[this.id] = value;
          }
          return true;
        }
      }
      if (currentContext) {
        currentContext.slots[this.id] = MISSING_VALUE;
      }
      return false;
    };
    Slot2.prototype.getValue = function() {
      if (this.hasValue()) {
        return currentContext.slots[this.id];
      }
    };
    Slot2.prototype.withValue = function(value, callback, args, thisArg) {
      var _a2;
      var slots = (_a2 = {
        __proto__: null
      }, _a2[this.id] = value, _a2);
      var parent = currentContext;
      currentContext = { parent, slots };
      try {
        return callback.apply(thisArg, args);
      } finally {
        currentContext = parent;
      }
    };
    Slot2.bind = function(callback) {
      var context = currentContext;
      return function() {
        var saved = currentContext;
        try {
          currentContext = context;
          return callback.apply(this, arguments);
        } finally {
          currentContext = saved;
        }
      };
    };
    Slot2.noContext = function(callback, args, thisArg) {
      if (currentContext) {
        var saved = currentContext;
        try {
          currentContext = null;
          return callback.apply(thisArg, args);
        } finally {
          currentContext = saved;
        }
      } else {
        return callback.apply(thisArg, args);
      }
    };
    return Slot2;
  }();
};
function maybe(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
var globalKey = "@wry/context:Slot";
var host = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return global;
}) || /* @__PURE__ */ Object.create(null);
var globalHost = host;
var Slot = globalHost[globalKey] || Array[globalKey] || function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      configurable: true
    });
  } finally {
    return Slot2;
  }
}(makeSlotClass());
Slot.bind;
Slot.noContext;
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from, key) {
      return context.readField(key, from);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      __DEV__ ? invariant$1(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join("."), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant$1(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a2;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a2 = {}, _a2[path[i]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p2) {
          return paths_1.push(currentPath_1.concat(p2));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_23, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config2) {
    this.config = config2;
    this.typePolicies = /* @__PURE__ */ Object.create(null);
    this.toBeAdded = /* @__PURE__ */ Object.create(null);
    this.supertypeMap = /* @__PURE__ */ new Map();
    this.fuzzySubtypes = /* @__PURE__ */ new Map();
    this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
    this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config2);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config2.possibleTypes) {
      this.addPossibleTypes(config2.possibleTypes);
    }
    if (config2.typePolicies) {
      this.addTypePolicies(config2.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object, partialContext) {
    var _a2;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object;
    var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(object, context);
      if (isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }
    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge) {
      existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      __DEV__ ? invariant$1(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant$1(!old || old === which, 3);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match = subtype.match(TypeOrFieldNameRegExp);
        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
      policy_1.fields = /* @__PURE__ */ Object.create(null);
      var supertypes = this.supertypeMap.get(typename);
      if (supertypes && supertypes.size) {
        supertypes.forEach(function(supertype) {
          var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;
      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              __DEV__ && invariant$1.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
            }
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match = typename.match(regExp);
            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;
    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }
    return merge;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
    var field = _a2.field, typename = _a2.typename, merge = _a2.merge;
    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || /* @__PURE__ */ Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (__DEV__ && options.from === void 0) {
    __DEV__ && invariant$1.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store2) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store2.getFieldValue(existing, "__typename");
      var iType = store2.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store2.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store2.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache, reader, fragments) {
    this.cache = cache;
    this.reader = reader;
    this.fragments = fragments;
  }
  StoreWriter2.prototype.writeToStore = function(store2, _a2) {
    var _this = this;
    var query = _a2.query, result = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
    var context = __assign(__assign({ store: store2, written: /* @__PURE__ */ Object.create(null), merge: function(existing, incoming) {
      return merger.merge(existing, incoming);
    }, variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
    var ref = this.processSelectionSet({
      result: result || /* @__PURE__ */ Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context
    });
    if (!isReference(ref)) {
      throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new InvariantError(7);
    }
    context.incomingById.forEach(function(_a3, dataId2) {
      var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      if (__DEV__ && !context.overwrite) {
        var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
        fieldNodeSet.forEach(function(field) {
          if (field.selectionSet) {
            fieldsWithSelectionSets_1[field.name.value] = true;
          }
        });
        var hasSelectionSet_1 = function(storeFieldName) {
          return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
        };
        var hasMergeFunction_1 = function(storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
          }
        });
      }
      store2.merge(dataId2, storeObject);
    });
    store2.retain(ref.__ref);
    return ref;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a2) {
    var _this = this;
    var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
    var policies = this.cache.policies;
    var incoming = /* @__PURE__ */ Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if ("string" === typeof typename) {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = /* @__PURE__ */ new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
      var _a3;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge) {
          childTree.info = {
            field,
            typename,
            merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
      } else if (__DEV__ && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
        __DEV__ && invariant$1.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1e3));
      }
    });
    try {
      var _b = policies.identify(result, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e) {
      if (!dataId)
        throw e;
    }
    if ("string" === typeof dataId) {
      var dataRef = makeReference(dataId);
      var sets2 = context.written[dataId] || (context.written[dataId] = []);
      if (sets2.indexOf(selectionSet) >= 0)
        return dataRef;
      sets2.push(selectionSet);
      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return __DEV__ ? cloneDeep(value) : value;
    }
    if (isArray(value)) {
      return value.map(function(item, i) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
        maybeRecycleChildMergeTree(mergeTree, i);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }
    var fieldMap = /* @__PURE__ */ new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw __DEV__ ? new InvariantError("No fragment named ".concat(selection.name.value)) : new InvariantError(8);
          }
          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a2;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from, name) {
        return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (void 0 === iVal)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant$1(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map = _a2.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map = _a2.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store2) {
  var getChild = function(objOrRef) {
    var child = store2.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store2.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store2.getFieldValue(existingRef, "__typename") || store2.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store2.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  __DEV__ && invariant$1.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config2) {
    if (config2 === void 0) {
      config2 = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = /* @__PURE__ */ new Set();
    _this.typenameDocumentCache = /* @__PURE__ */ new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config2);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    var fragments = this.config.fragments;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
      fragments
    }), fragments);
    this.maybeBroadcastWatch = wrap(function(c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c) {
        var store2 = c.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store2)) {
          var optimistic = c.optimistic, id = c.id, variables = c.variables;
          return store2.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, id, variables }));
        }
      }
    });
    (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e) {
      if (e instanceof MissingFieldError) {
        return null;
      }
      throw e;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }
    var store2 = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store2.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch);
    if (watch.immediate) {
      this.maybeBroadcastWatch(watch);
    }
    return function() {
      if (_this.watches.delete(watch) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object) {
    if (isReference(object))
      return object.__ref;
    try {
      return this.policies.identify(object)[0];
    } catch (e) {
      __DEV__ && invariant$1.warn(e);
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }
      options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch) {
        return _this.maybeBroadcastWatch.forget(watch);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = /* @__PURE__ */ new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch) {
        alreadyDirty.add(watch);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch, diff) {
        var result = onWatchUpdated.call(this, watch, diff);
        if (result !== false) {
          alreadyDirty.delete(watch);
        }
        return result;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch) {
          return _this.maybeBroadcastWatch.dirty(watch);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document);
      if (!result) {
        result = addTypenameToDocument(document);
        this.typenameDocumentCache.set(document, result);
        this.typenameDocumentCache.set(result, result);
      }
      return result;
    }
    return document;
  };
  InMemoryCache2.prototype.transformForLink = function(document) {
    var fragments = this.config.fragments;
    return fragments ? fragments.transform(document) : document;
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };
  InMemoryCache2.prototype.broadcastWatch = function(c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);
    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var message2 = "";
  if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
    var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
    errors.forEach(function(error2) {
      var errorMessage = error2 ? error2.message : "Error message not found.";
      message2 += "".concat(errorMessage, "\n");
    });
  }
  if (err.networkError) {
    message2 += "".concat(err.networkError.message, "\n");
  }
  message2 = message2.replace(/\n$/, "");
  return message2;
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a2) {
    var graphQLErrors = _a2.graphQLErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.graphQLErrors = graphQLErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
var assign = Object.assign, hasOwnProperty$2 = Object.hasOwnProperty;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a2) {
    var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a3) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.subscriptions = /* @__PURE__ */ new Set();
    _this.queryInfo = queryInfo;
    _this.queryManager = queryManager;
    _this.isTornDown = false;
    var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
    var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
    _this.options = __assign(__assign({}, options), { initialFetchPolicy, fetchPolicy });
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(_this.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result) {
          resolve(result);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
    if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers)
      ;
    else {
      var diff = this.queryInfo.getDiff();
      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }
      if (equal(result.data, {})) {
        result.data = void 0;
      }
      if (diff.complete) {
        delete result.partial;
        if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }
      if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
        logMissingFieldErrors(diff.missing);
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result);
    }
    return result;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
    return !this.last || !equal(this.last.result, newResult);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var _a2;
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (__DEV__ && variables && hasOwnProperty$2.call(variables, "variables")) {
      var queryDef = getQueryDefinition(this.query);
      var vars = queryDef.variableDefinitions;
      if (!vars || !vars.some(function(v) {
        return v.variable.name.value === "variables";
      })) {
        __DEV__ && invariant$1.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
      }
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    var qid = this.queryManager.generateQueryId();
    var queryInfo = this.queryInfo;
    var originalNetworkStatus = queryInfo.networkStatus;
    queryInfo.networkStatus = NetworkStatus.fetchMore;
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.observe();
    }
    var updatedQuerySet = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      _this.queryManager.removeQuery(qid);
      if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
        queryInfo.networkStatus = originalNetworkStatus;
      }
      _this.queryManager.cache.batch({
        update: function(cache) {
          var updateQuery = fetchMoreOptions.updateQuery;
          if (updateQuery) {
            cache.updateQuery({
              query: _this.query,
              variables: _this.variables,
              returnPartialData: true,
              optimistic: false
            }, function(previous) {
              return updateQuery(previous, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
          } else {
            cache.writeQuery({
              query: combinedOptions.query,
              variables: combinedOptions.variables,
              data: fetchMoreResult.data
            });
          }
        },
        onWatchUpdated: function(watch) {
          updatedQuerySet.add(watch.query);
        }
      });
      return fetchMoreResult;
    }).finally(function() {
      if (!updatedQuerySet.has(_this.query)) {
        reobserveCacheFirst(_this);
      }
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous, _a2) {
            var variables = _a2.variables;
            return updateQuery(previous, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
        __DEV__ && invariant$1.error("Unhandled GraphQL subscription error", err);
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
    if (options.nextFetchPolicy) {
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
      if (fetchPolicy === "standby")
        ;
      else if (typeof options.nextFetchPolicy === "function") {
        options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
          reason,
          options,
          observable: this,
          initialFetchPolicy
        });
      } else if (reason === "variables-changed") {
        options.fetchPolicy = initialFetchPolicy;
      } else {
        options.fetchPolicy = options.nextFetchPolicy;
      }
    }
    return options.fetchPolicy;
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    __DEV__ ? invariant$1(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant$1(pollInterval, 12);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    this.last = __assign(__assign({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }
    return this.last;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var oldFetchPolicy = this.options.fetchPolicy;
    var mergedOptions = compact(this.options, newOptions || {});
    var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && options.fetchPolicy !== "standby" && options.fetchPolicy === oldFetchPolicy) {
        this.applyNextFetchPolicy("variables-changed", options);
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    var variables = options.variables && __assign({}, options.variables);
    var concast = this.fetch(options, newNetworkStatus);
    var observer = {
      next: function(result) {
        _this.reportResult(result, variables);
      },
      error: function(error2) {
        _this.reportError(error2, variables);
      }
    };
    if (!useDisposableConcast) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast.promise;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result, variables) {
    var lastError = this.getLastError();
    if (lastError || this.isDifferentFromLastResult(result)) {
      if (lastError || !result.partial || this.options.returnPartialData) {
        this.updateLastResult(result, variables);
      }
      iterateObserversSafely(this.observers, "next", result);
    }
  };
  ObservableQuery2.prototype.reportError = function(error2, variables) {
    var errorResult = __assign(__assign({}, this.getLastResult()), { error: error2, errors: error2.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error2);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a2 = obsQuery.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error2) {
  __DEV__ && invariant$1.error("Unhandled error", error2.message, error2.stack);
}
function logMissingFieldErrors(missing) {
  if (__DEV__ && missing) {
    __DEV__ && invariant$1.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
  }
}
var LocalState = function() {
  function LocalState2(_a2) {
    var cache = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
    this.cache = cache;
    if (client) {
      this.client = client;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a2) {
    var document = _a2.document, remoteResult = _a2.remoteResult, context = _a2.context, variables = _a2.variables, _b = _a2.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document) {
          return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign(__assign({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document) {
    if (hasDirectives(["client"], document)) {
      if (this.resolvers) {
        return document;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document) {
    return removeClientSetsFromDocument(document);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache = this.cache;
    return __assign(__assign({}, context), { cache, getCacheKey: function(obj) {
      return cache.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        if (document) {
          return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign(__assign({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document) {
    var forceResolvers = false;
    visit(document, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a2, cache, client, execContext;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document);
        fragments = getFragmentDefinitions(document);
        fragmentMap = createFragmentMap(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a2 = this, cache = _a2.cache, client = _a2.client;
        execContext = {
          fragmentMap,
          context: __assign(__assign({}, context), { cache, client }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result) {
          return {
            result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a2) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a3) {
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                  var _a4;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                __DEV__ ? invariant$1(fragment, "No fragment named ".concat(selection.name.value)) : invariant$1(fragment, 11);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a2) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result) {
          if (result === void 0) {
            result = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result;
          }
          if (result == null) {
            return result;
          }
          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, result, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, result, execContext) {
    var _this = this;
    return Promise.all(result.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };
  return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = /* @__PURE__ */ new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function(variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var options = this.getDiffOptions(variables);
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff, options) {
    this.lastDiff = diff ? {
      diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a2;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        var diff = _this.getDiff();
        if (diff.fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          reobserveCacheFirst(oq);
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
      return _this.setDiff(diff);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result, document, options, cacheWriteBehavior) {
    var _this = this;
    var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
    this.reset();
    if ("incremental" in result && isNonEmptyArray(result.incremental)) {
      var mergedData_1 = this.getDiff().result;
      var merger_1 = new DeepMerger();
      result.incremental.forEach(function(_a2) {
        var data = _a2.data, path = _a2.path, errors = _a2.errors;
        for (var i = path.length - 1; i >= 0; --i) {
          var key = path[i];
          var isNumericKey = !isNaN(+key);
          var parent_1 = isNumericKey ? [] : {};
          parent_1[key] = data;
          data = parent_1;
        }
        if (errors) {
          graphQLErrors.push.apply(graphQLErrors, errors);
        }
        mergedData_1 = merger_1.merge(mergedData_1, data);
      });
      result.data = mergedData_1;
    }
    this.graphQLErrors = graphQLErrors;
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function(cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: document,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff = cache.diff(diffOptions);
          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff, diffOptions);
          if (diff.complete) {
            result.data = diff.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error2) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error2.graphQLErrors) {
      this.graphQLErrors = error2.graphQLErrors;
    }
    if (error2.networkError) {
      this.networkError = error2.networkError;
    }
    return error2;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);
  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a2) {
    var cache = _a2.cache, link = _a2.link, defaultOptions2 = _a2.defaultOptions, _b = _a2.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a2.onBroadcast, _c = _a2.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a2.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a2.localState, assumeImmutableResults = _a2.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = /* @__PURE__ */ new Map();
    this.fetchCancelFns = /* @__PURE__ */ new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    this.cache = cache;
    this.link = link;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(13));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error2) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error2);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a2) {
    var _b, _c;
    var mutation = _a2.mutation, variables = _a2.variables, optimisticResponse = _a2.optimisticResponse, updateQueries = _a2.updateQueries, _d = _a2.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a2.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a2.update, onQueryUpdated = _a2.onQueryUpdated, _f = _a2.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a2.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a2.keepRootFields, context = _a2.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, _h, document, hasClientExports2, mutationStoreValue, self2;
      return __generator(this, function(_j) {
        switch (_j.label) {
          case 0:
            __DEV__ ? invariant$1(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant$1(mutation, 14);
            __DEV__ ? invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 15);
            mutationId = this.generateMutationId();
            _h = this.transform(mutation), document = _h.document, hasClientExports2 = _h.hasClientExports;
            mutation = this.cache.transformForLink(document);
            variables = this.getVariables(mutation, variables);
            if (!hasClientExports2)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _j.sent();
            _j.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: result.errors
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign({}, result);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  resolve(storeResult);
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = this.cache;
    }
    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      cacheWrites.push({
        result: result.data,
        dataId: "ROOT_MUTATION",
        query: mutation.document,
        variables: mutation.variables
      });
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a2, queryId) {
          var observableQuery = _a2.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty$1.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
          var _c = cache.diff({
            query: document,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document && getOperationName(document) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache2) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache2.write(write);
            });
          }
          var update = mutation.update;
          if (update) {
            if (!skipCache) {
              var diff = cache2.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff.complete && !isExecutionPatchIncrementalResult(result)) {
                result = __assign(__assign({}, result), { data: diff.result });
              }
            }
            update(cache2, result, {
              context: mutation.context,
              variables: mutation.variables
            });
          }
          if (!skipCache && !mutation.keepRootFields) {
            cache2.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a2) {
                var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result2) {
        return results_1.push(result2);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result;
        });
      }
    }
    return Promise.resolve(result);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache) {
      try {
        _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
      } catch (error2) {
        __DEV__ && invariant$1.error(error2);
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store2 = /* @__PURE__ */ Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store2[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store2;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document)) {
      var transformed = this.cache.transformDocument(document);
      var noConnection = removeConnectionDirectiveFromDocument(transformed);
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = noConnection && this.localState.serverQuery(noConnection);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery,
        serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign(__assign({}, transformed), { definitions: transformed.definitions.map(function(def) {
          if (def.kind === "OperationDefinition" && def.operation !== "query") {
            return __assign(__assign({}, def), { operation: "query" });
          }
          return def;
        }) })
      };
      var add = function(doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };
      add(document);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }
    return transformCache.get(document);
  };
  QueryManager2.prototype.getVariables = function(document, variables) {
    return __assign(__assign({}, this.transform(document).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    options = __assign(__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: observable.query,
      observableQuery: observable,
      variables: observable.variables
    });
    return observable;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    __DEV__ ? invariant$1(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant$1(options.query, 16);
    __DEV__ ? invariant$1(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant$1(options.query.kind === "Document", 17);
    __DEV__ ? invariant$1(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant$1(!options.returnPartialData, 18);
    __DEV__ ? invariant$1(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant$1(!options.pollInterval, 19);
    return this.fetchQuery(queryId, options).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(20));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = /* @__PURE__ */ new Map();
    var queryNamesAndDocs = /* @__PURE__ */ new Map();
    var legacyQueryOptions = /* @__PURE__ */ new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a2, queryId) {
      var oq = _a2.observableQuery, document = _a2.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document && queryNamesAndDocs.has(document)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document)
            queryNamesAndDocs.set(document, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
        });
        invariant$1(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    if (__DEV__ && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function(included, nameOrDoc) {
        if (!included) {
          __DEV__ && invariant$1.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        }
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a2) {
    var _this = this;
    var query = _a2.query, fetchPolicy = _a2.fetchPolicy, errorPolicy = _a2.errorPolicy, variables = _a2.variables, _b = _a2.context, context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);
    var makeObservable = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query,
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        if (graphQLResultHasError(result)) {
          throw new ApolloError({
            graphQLErrors: result.errors
          });
        }
        return result;
      });
    };
    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    if (this.queries.has(queryId)) {
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    }
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a2;
    if (deduplication === void 0) {
      deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
    }
    var observable;
    var serverQuery = this.transform(query).serverQuery;
    if (serverQuery) {
      var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);
        if (!observable) {
          var concast = new Concast([
            execute(link, operation)
          ]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.beforeNext(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([
          execute(link, operation)
        ]);
      }
    } else {
      observable = new Concast([
        Observable.of({ data: {} })
      ]);
      context = this.prepareContext(context);
    }
    var clientQuery = this.transform(query).clientQuery;
    if (clientQuery) {
      observable = asyncMap(observable, function(result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context,
          variables
        });
      });
    }
    return observable;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    options = cloneDeep(options);
    var linkDocument = this.cache.transformForLink(this.transform(queryInfo.document).document);
    return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result) {
      var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
      if ("incremental" in result && isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function(incrementalResult) {
          if (incrementalResult.errors) {
            graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
          }
        });
      }
      var hasErrors = isNonEmptyArray(graphQLErrors);
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors
          }));
        }
        queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = graphQLErrors;
        aqr.networkStatus = NetworkStatus.error;
      }
      return aqr;
    }, function(networkError) {
      var error2 = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error2);
      }
      throw error2;
    });
  };
  QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var defaults = this.defaultOptions.watchQuery;
    var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      var concastSources = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
      if (normalized.fetchPolicy !== "standby" && concastSources.length > 0 && queryInfo.observableQuery) {
        queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
      }
      return concastSources;
    };
    var cleanupCancelFn = function() {
      return _this.fetchCancelFns.delete(queryId);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      cleanupCancelFn();
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
    concast.promise.then(cleanupCancelFn, cleanupCancelFn);
    return concast;
  };
  QueryManager2.prototype.refetchQueries = function(_a2) {
    var _this = this;
    var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
    var includedQueriesById = /* @__PURE__ */ new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = /* @__PURE__ */ new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch, diff, lastDiff) {
          var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);
              if (result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              return result;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a3, queryId) {
        var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
        var result;
        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }
          result = onQueryUpdated(oq, diff, lastDiff);
        }
        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }
        if (result !== false) {
          results.set(oq, result);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
    var _this = this;
    var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: this.transform(query).document,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff(variables);
    };
    var resultsFromCache = function(diff2, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff2.result;
      if (__DEV__ && !returnPartialData && !equal(data, {})) {
        logMissingFieldErrors(diff2.missing);
      }
      var fromData = function(data2) {
        return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
      };
      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff = readCache();
        if (diff.complete) {
          return [
            resultsFromCache(diff, queryInfo.markReady())
          ];
        }
        if (returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-and-network": {
        var diff = readCache();
        if (diff.complete || returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-only":
        return [
          resultsFromCache(readCache(), queryInfo.markReady())
        ];
      case "network-only":
        if (shouldNotify) {
          return [
            resultsFromCache(readCache()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "no-cache":
        if (shouldNotify) {
          return [
            resultsFromCache(queryInfo.getDiff()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "standby":
        return [];
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();
var hasSuggestedDevtools = false;
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a2 = options.ssrMode, ssrMode = _a2 === void 0 ? false : _a2, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link = options.link;
    if (!link) {
      link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    if (!cache) {
      throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(9);
    }
    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    if (connectToDevTools && typeof window === "object") {
      window.__APOLLO_CLIENT__ = this;
    }
    if (!hasSuggestedDevtools && __DEV__) {
      hasSuggestedDevtools = true;
      if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var nav = window.navigator;
        var ua = nav && nav.userAgent;
        var url = void 0;
        if (typeof ua === "string") {
          if (ua.indexOf("Chrome/") > -1) {
            url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
          } else if (ua.indexOf("Firefox/") > -1) {
            url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
          }
        }
        if (url) {
          __DEV__ && invariant$1.log("Download the Apollo DevTools for a better development experience: " + url);
        }
      }
    }
    this.version = version;
    this.localState = new LocalState({
      cache,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    __DEV__ ? invariant$1(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant$1(options.fetchPolicy !== "cache-and-network", 10);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
    this.devToolsHookCb = cb;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb) {
    var _this = this;
    this.resetStoreCallbacks.push(cb);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb) {
    var _this = this;
    this.clearStoreCallbacks.push(cb);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function(result2, obsQuery) {
      queries.push(obsQuery);
      results.push(result2);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function(error2) {
      __DEV__ && invariant$1.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error2));
    });
    return result;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();
var contextKey = canUseSymbol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function getApolloContext() {
  var context = React.createContext[contextKey];
  if (!context) {
    Object.defineProperty(React.createContext, contextKey, {
      value: context = React.createContext({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = "ApolloContext";
  }
  return context;
}
var ApolloProvider = function(_a2) {
  var client = _a2.client, children = _a2.children;
  var ApolloContext = getApolloContext();
  return React.createElement(ApolloContext.Consumer, null, function(context) {
    if (context === void 0) {
      context = {};
    }
    if (client && context.client !== client) {
      context = Object.assign({}, context, { client });
    }
    __DEV__ ? invariant$1(context.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : invariant$1(context.client, 28);
    return React.createElement(ApolloContext.Provider, { value: context }, children);
  });
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck$1(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var consoleLogger = {
  type: "logger",
  log: function log(args) {
    this.output("log", args);
  },
  warn: function warn(args) {
    this.output("warn", args);
  },
  error: function error(args) {
    this.output("error", args);
  },
  output: function output(type, args) {
    if (console && console[type])
      console[type].apply(console, args);
  }
};
var Logger = function() {
  function Logger2(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$1(this, Logger2);
    this.init(concreteLogger, options);
  }
  _createClass$1(Logger2, [{
    key: "init",
    value: function init2(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = options.prefix || "i18next:";
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.forward(args, "log", "", true);
    }
  }, {
    key: "warn",
    value: function warn2() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.forward(args, "warn", "", true);
    }
  }, {
    key: "error",
    value: function error2() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.forward(args, "error", "");
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug)
        return null;
      if (typeof args[0] === "string")
        args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger2(this.logger, _objectSpread$1(_objectSpread$1({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function clone(options) {
      options = options || this.options;
      options.prefix = options.prefix || this.prefix;
      return new Logger2(this.logger, options);
    }
  }]);
  return Logger2;
}();
var baseLogger = new Logger();
var EventEmitter = function() {
  function EventEmitter2() {
    _classCallCheck$1(this, EventEmitter2);
    this.observers = {};
  }
  _createClass$1(EventEmitter2, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;
      events.split(" ").forEach(function(event) {
        _this.observers[event] = _this.observers[event] || [];
        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event])
        return;
      if (!listener) {
        delete this.observers[event];
        return;
      }
      this.observers[event] = this.observers[event].filter(function(l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function(observer) {
          observer.apply(void 0, args);
        });
      }
      if (this.observers["*"]) {
        var _cloned = [].concat(this.observers["*"]);
        _cloned.forEach(function(observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);
  return EventEmitter2;
}();
function defer() {
  var res;
  var rej;
  var promise = new Promise(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy(a, s, t) {
  a.forEach(function(m2) {
    if (s[m2])
      t[m2] = s[m2];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key2) {
    return key2 && key2.indexOf("###") > -1 ? key2.replace(/###/g, ".") : key2;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  var stack = typeof path !== "string" ? [].concat(path) : path.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object), obj = _getLastOfPath.obj, k = _getLastOfPath.k;
  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object), obj = _getLastOfPath2.obj, k = _getLastOfPath2.k;
  obj[k] = obj[k] || [];
  if (concat)
    obj[k] = obj[k].concat(newValue);
  if (!concat)
    obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path), obj = _getLastOfPath3.obj, k = _getLastOfPath3.k;
  if (!obj)
    return void 0;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, function(s) {
      return _entityMap[s];
    });
  }
  return data;
}
var isIE10 = typeof window !== "undefined" && window.navigator && typeof window.navigator.userAgentData === "undefined" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
var chars = [" ", ",", "?", "!", ";"];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  var possibleChars = chars.filter(function(c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0)
    return true;
  var r = new RegExp("(".concat(possibleChars.map(function(c) {
    return c === "?" ? "\\?" : c;
  }).join("|"), ")"));
  var matched = !r.test(key);
  if (!matched) {
    var ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function ownKeys$1$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path])
    return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;
  for (var i = 0; i < paths.length; ++i) {
    if (!current)
      return void 0;
    if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i]] === void 0) {
      var j = 2;
      var p2 = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p2];
      while (mix === void 0 && paths.length > i + j) {
        j++;
        p2 = paths.slice(i, i + j).join(keySeparator);
        mix = current[p2];
      }
      if (mix === void 0)
        return void 0;
      if (mix === null)
        return null;
      if (path.endsWith(p2)) {
        if (typeof mix === "string")
          return mix;
        if (p2 && typeof mix[p2] === "string")
          return mix[p2];
      }
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i]];
  }
  return current;
}
var ResourceStore = function(_EventEmitter) {
  _inherits(ResourceStore2, _EventEmitter);
  var _super = _createSuper(ResourceStore2);
  function ResourceStore2(data) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    _classCallCheck$1(this, ResourceStore2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.data = data || {};
    _this.options = options;
    if (_this.options.keySeparator === void 0) {
      _this.options.keySeparator = ".";
    }
    if (_this.options.ignoreJSONStructure === void 0) {
      _this.options.ignoreJSONStructure = true;
    }
    return _this;
  }
  _createClass$1(ResourceStore2, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);
      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== "string")
        path = path.concat(key);
      if (key && typeof key === "string")
        path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
      }
      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== "string")
        return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === void 0)
        keySeparator = ".";
      var path = [lng, ns];
      if (key)
        path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        value = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent)
        this.emit("added", lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: false
      };
      for (var m2 in resources) {
        if (typeof resources[m2] === "string" || Object.prototype.toString.apply(resources[m2]) === "[object Array]")
          this.addResource(lng, ns, m2, resources[m2], {
            silent: true
          });
      }
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        deep = resources;
        resources = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};
      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$1$1(_objectSpread$1$1({}, pack), resources);
      }
      setPath(this.data, path, pack);
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit("removed", lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns)
        ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === "v1")
        return _objectSpread$1$1(_objectSpread$1$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n2 = data && Object.keys(data) || [];
      return !!n2.find(function(v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);
  return ResourceStore2;
}(EventEmitter);
var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module2) {
    this.processors[module2.name] = module2;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;
    processors.forEach(function(processor) {
      if (_this.processors[processor])
        value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var checkedLoadedFor = {};
var Translator = function(_EventEmitter) {
  _inherits(Translator2, _EventEmitter);
  var _super = _createSuper$1(Translator2);
  function Translator2(services) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$1(this, Translator2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized(_this));
    _this.options = options;
    if (_this.options.keySeparator === void 0) {
      _this.options.keySeparator = ".";
    }
    _this.logger = baseLogger.create("translator");
    return _this;
  }
  _createClass$1(Translator2, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng)
        this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (key === void 0 || key === null) {
        return false;
      }
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === void 0)
        nsSeparator = ":";
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m2 = key.match(this.interpolator.nestingRegexp);
        if (m2 && m2.length > 0) {
          return {
            key,
            namespaces
          };
        }
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
          namespaces = parts.shift();
        key = parts.join(keySeparator);
      }
      if (typeof namespaces === "string")
        namespaces = [namespaces];
      return {
        key,
        namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;
      if (_typeof(options) !== "object" && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }
      if (!options)
        options = {};
      if (keys === void 0 || keys === null)
        return "";
      if (!Array.isArray(keys))
        keys = [String(keys)];
      var returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (lng && lng.toLowerCase() === "cimode") {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          if (returnDetails) {
            resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
            return resolved;
          }
          return "".concat(namespace).concat(nsSeparator).concat(key);
        }
        if (returnDetails) {
          resolved.res = key;
          return resolved;
        }
        return key;
      }
      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
      var joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          }
          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
          if (returnDetails) {
            resolved.res = r;
            return resolved;
          }
          return r;
        }
        if (keySeparator) {
          var resTypeIsArray = resType === "[object Array]";
          var copy2 = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
          for (var m2 in res) {
            if (Object.prototype.hasOwnProperty.call(res, m2)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m2);
              copy2[m2] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy2[m2] === deepKey)
                copy2[m2] = res[m2];
            }
          }
          res = copy2;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
        res = res.join(joinArrays);
        if (res)
          res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        var hasDefaultValue = Translator2.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }
        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }
        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res)
              this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === "all") {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }
          var send = function send2(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
            }
            _this2.emit("missingKey", l, namespace, k, res);
          };
          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function(language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function(suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }
        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
          res = "".concat(namespace, ":").concat(key);
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== "v1") {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : void 0);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }
      if (returnDetails) {
        resolved.res = res;
        return resolved;
      }
      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;
      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation)
          this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
            interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
          }));
        var skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;
        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }
        var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
        if (this.options.interpolation.defaultVariables)
          data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft)
            options.nest = false;
        }
        if (options.nest !== false)
          res = this.interpolator.nest(res, function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (lastKey && lastKey[0] === args[0] && !options.context) {
              _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
              return null;
            }
            return _this3.translate.apply(_this3, args.concat([key]));
          }, options);
        if (options.interpolation)
          this.interpolator.reset();
      }
      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
      if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
          i18nResolved: resolved
        }, options) : options, this);
      }
      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === "string")
        keys = [keys];
      keys.forEach(function(k) {
        if (_this4.isValidLookup(found))
          return;
        var extracted = _this4.extractFromKey(k, options);
        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS)
          namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
        var needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function(ns) {
          if (_this4.isValidLookup(found))
            return;
          usedNS = ns;
          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
            _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          }
          codes.forEach(function(code) {
            if (_this4.isValidLookup(found))
              return;
            usedLng = code;
            var finalKeys = [key];
            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling)
                pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }
              if (needsContextHandling) {
                var contextKey2 = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey2);
                if (needsPluralHandling) {
                  finalKeys.push(contextKey2 + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey2 + zeroSuffix);
                  }
                }
              }
            }
            var possibleKey;
            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey,
        exactUsedKey,
        usedLng,
        usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource)
        return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = "defaultValue";
      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
          return true;
        }
      }
      return false;
    }
  }]);
  return Translator2;
}(EventEmitter);
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = function() {
  function LanguageUtil2(options) {
    _classCallCheck$1(this, LanguageUtil2);
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  _createClass$1(LanguageUtil2, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf("-") < 0)
        return null;
      var p2 = code.split("-");
      if (p2.length === 2)
        return null;
      p2.pop();
      if (p2[p2.length - 1].toLowerCase() === "x")
        return null;
      return this.formatLanguageCode(p2.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf("-") < 0)
        return code;
      var p2 = code.split("-");
      return this.formatLanguageCode(p2[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === "string" && code.indexOf("-") > -1) {
        var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        var p2 = code.split("-");
        if (this.options.lowerCaseLng) {
          p2 = p2.map(function(part) {
            return part.toLowerCase();
          });
        } else if (p2.length === 2) {
          p2[0] = p2[0].toLowerCase();
          p2[1] = p2[1].toUpperCase();
          if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
            p2[1] = capitalize(p2[1].toLowerCase());
        } else if (p2.length === 3) {
          p2[0] = p2[0].toLowerCase();
          if (p2[1].length === 2)
            p2[1] = p2[1].toUpperCase();
          if (p2[0] !== "sgn" && p2[2].length === 2)
            p2[2] = p2[2].toUpperCase();
          if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
            p2[1] = capitalize(p2[1].toLowerCase());
          if (specialCases.indexOf(p2[2].toLowerCase()) > -1)
            p2[2] = capitalize(p2[2].toLowerCase());
        }
        return p2.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }
      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;
      if (!codes)
        return null;
      var found;
      codes.forEach(function(code) {
        if (found)
          return;
        var cleanedLng = _this.formatLanguageCode(code);
        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
          found = cleanedLng;
      });
      if (!found && this.options.supportedLngs) {
        codes.forEach(function(code) {
          if (found)
            return;
          var lngOnly = _this.getLanguagePartFromCode(code);
          if (_this.isSupportedCode(lngOnly))
            return found = lngOnly;
          found = _this.options.supportedLngs.find(function(supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0)
              return supportedLng;
          });
        });
      }
      if (!found)
        found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks)
        return [];
      if (typeof fallbacks === "function")
        fallbacks = fallbacks(code);
      if (typeof fallbacks === "string")
        fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
        return fallbacks;
      if (!code)
        return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found)
        found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found)
        found = fallbacks[this.formatLanguageCode(code)];
      if (!found)
        found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found)
        found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;
      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];
      var addCode = function addCode2(c) {
        if (!c)
          return;
        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };
      if (typeof code === "string" && code.indexOf("-") > -1) {
        if (this.options.load !== "languageOnly")
          addCode(this.formatLanguageCode(code));
        if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
          addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== "currentOnly")
          addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === "string") {
        addCode(this.formatLanguageCode(code));
      }
      fallbackCodes.forEach(function(fc) {
        if (codes.indexOf(fc) < 0)
          addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);
  return LanguageUtil2;
}();
var sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n2) {
    return Number(n2 > 1);
  },
  2: function _2(n2) {
    return Number(n2 != 1);
  },
  3: function _3(n2) {
    return 0;
  },
  4: function _4(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  5: function _5(n2) {
    return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : n2 == 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5);
  },
  6: function _6(n2) {
    return Number(n2 == 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2);
  },
  7: function _7(n2) {
    return Number(n2 == 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  8: function _8(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 != 8 && n2 != 11 ? 2 : 3);
  },
  9: function _9(n2) {
    return Number(n2 >= 2);
  },
  10: function _10(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4);
  },
  11: function _11(n2) {
    return Number(n2 == 1 || n2 == 11 ? 0 : n2 == 2 || n2 == 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3);
  },
  12: function _12(n2) {
    return Number(n2 % 10 != 1 || n2 % 100 == 11);
  },
  13: function _13(n2) {
    return Number(n2 !== 0);
  },
  14: function _14(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 == 3 ? 2 : 3);
  },
  15: function _15(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  16: function _16(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 !== 0 ? 1 : 2);
  },
  17: function _17(n2) {
    return Number(n2 == 1 || n2 % 10 == 1 && n2 % 100 != 11 ? 0 : 1);
  },
  18: function _18(n2) {
    return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : 2);
  },
  19: function _19(n2) {
    return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3);
  },
  20: function _20(n2) {
    return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2);
  },
  21: function _21(n2) {
    return Number(n2 % 100 == 1 ? 1 : n2 % 100 == 2 ? 2 : n2 % 100 == 3 || n2 % 100 == 4 ? 3 : 0);
  },
  22: function _22(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : (n2 < 0 || n2 > 10) && n2 % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ["v1", "v2", "v3"];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  var rules = {};
  sets.forEach(function(set) {
    set.lngs.forEach(function(l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = function() {
  function PluralResolver2(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$1(this, PluralResolver2);
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  _createClass$1(PluralResolver2, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? "ordinal" : "cardinal"
          });
        } catch (_unused) {
          return;
        }
      }
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function(suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (!rule) {
        return [];
      }
      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function(pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }
      return rule.numbers.map(function(number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var rule = this.getRule(code, options);
      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }
        return this.getSuffixRetroCompatible(rule, count);
      }
      this.logger.warn("no plural rule found for: ".concat(code));
      return "";
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;
      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = "plural";
        } else if (suffix === 1) {
          suffix = "";
        }
      }
      var returnSuffix = function returnSuffix2() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };
      if (this.options.compatibilityJSON === "v1") {
        if (suffix === 1)
          return "";
        if (typeof suffix === "number")
          return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === "v2") {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);
  return PluralResolver2;
}();
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Interpolator = function() {
  function Interpolator2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck$1(this, Interpolator2);
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || function(value) {
      return value;
    };
    this.init(options);
  }
  _createClass$1(Interpolator2, [{
    key: "init",
    value: function init2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!options.interpolation)
        options.interpolation = {
          escapeValue: true
        };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
      this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
      this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
      this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options)
        this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, "g");
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;
      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function regexSafe(val) {
        return val.replace(/\$/g, "$$$$");
      }
      var handleFormat = function handleFormat2(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, void 0, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }
        var p2 = key.split(_this.formatSeparator);
        var k = p2.shift().trim();
        var f2 = p2.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f2, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };
      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function(todo) {
        replaces = 0;
        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);
          if (value === void 0) {
            if (typeof missingInterpolationHandler === "function") {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === "string" ? temp : "";
            } else if (options && options.hasOwnProperty(matchedVar)) {
              value = "";
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
              value = "";
            }
          } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
            value = makeString(value);
          }
          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);
          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }
          replaces++;
          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var match;
      var value;
      var clonedOptions = _objectSpread$3({}, options);
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0)
          return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        var matchedSingleQuotes = optionsString.match(/'/g);
        var matchedDoubleQuotes = optionsString.match(/"/g);
        if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
          optionsString = optionsString.replace(/'/g, '"');
        }
        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions)
            clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }
        delete clonedOptions.defaultValue;
        return key;
      }
      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;
        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function(elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== "string")
          return value;
        if (typeof value !== "string")
          value = makeString(value);
        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = "";
        }
        if (doReduce) {
          value = formatters.reduce(function(v, f2) {
            return _this2.format(v, f2, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }
      return str;
    }
  }]);
  return Interpolator2;
}();
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    var p2 = formatStr.split("(");
    formatName = p2[0].toLowerCase().trim();
    var optStr = p2[1].substring(0, p2[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(";");
      opts.forEach(function(opt) {
        if (!opt)
          return;
        var _opt$split = opt.split(":"), _opt$split2 = _toArray(_opt$split), key = _opt$split2[0], rest = _opt$split2.slice(1);
        var val = rest.join(":").trim().replace(/^'+|'+$/g, "");
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val;
        if (val === "false")
          formatOptions[key.trim()] = false;
        if (val === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val))
          formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  var cache = {};
  return function invokeFormatter(val, lng, options) {
    var key = lng + JSON.stringify(options);
    var formatter = cache[key];
    if (!formatter) {
      formatter = fn(lng, options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
var Formatter = function() {
  function Formatter2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck$1(this, Formatter2);
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter(function(lng, options2) {
        var formatter = new Intl.NumberFormat(lng, options2);
        return function(val) {
          return formatter.format(val);
        };
      }),
      currency: createCachedFormatter(function(lng, options2) {
        var formatter = new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options2), {}, {
          style: "currency"
        }));
        return function(val) {
          return formatter.format(val);
        };
      }),
      datetime: createCachedFormatter(function(lng, options2) {
        var formatter = new Intl.DateTimeFormat(lng, _objectSpread$4({}, options2));
        return function(val) {
          return formatter.format(val);
        };
      }),
      relativetime: createCachedFormatter(function(lng, options2) {
        var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options2));
        return function(val) {
          return formatter.format(val, options2.range || "day");
        };
      }),
      list: createCachedFormatter(function(lng, options2) {
        var formatter = new Intl.ListFormat(lng, _objectSpread$4({}, options2));
        return function(val) {
          return formatter.format(val);
        };
      })
    };
    this.init(options);
  }
  _createClass$1(Formatter2, [{
    key: "init",
    value: function init2(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "addCached",
    value: function addCached(name, fc) {
      this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;
      var formats = _format.split(this.formatSeparator);
      var result = formats.reduce(function(mem, f2) {
        var _parseFormatStr = parseFormatStr(f2), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
        if (_this.formats[formatName]) {
          var formatted = mem;
          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
          } catch (error2) {
            _this.logger.warn(error2);
          }
          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }
        return mem;
      }, value);
      return result;
    }
  }]);
  return Formatter2;
}();
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function removePending(q2, name) {
  if (q2.pending[name] !== void 0) {
    delete q2.pending[name];
    q2.pendingCount--;
  }
}
var Connector = function(_EventEmitter) {
  _inherits(Connector2, _EventEmitter);
  var _super = _createSuper$2(Connector2);
  function Connector2(backend, store2, services) {
    var _this;
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    _classCallCheck$1(this, Connector2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.backend = backend;
    _this.store = store2;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create("backendConnector");
    _this.waitingReads = [];
    _this.maxParallelReads = options.maxParallelReads || 10;
    _this.readingCalls = 0;
    _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    _this.state = {};
    _this.queue = [];
    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }
    return _this;
  }
  _createClass$1(Connector2, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;
      var toLoad = {};
      var pending = {};
      var toLoadLanguages = {};
      var toLoadNamespaces = {};
      languages.forEach(function(lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function(ns) {
          var name = "".concat(lng, "|").concat(ns);
          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0)
            ;
          else if (_this2.state[name] === 1) {
            if (pending[name] === void 0)
              pending[name] = true;
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === void 0)
              pending[name] = true;
            if (toLoad[name] === void 0)
              toLoad[name] = true;
            if (toLoadNamespaces[ns] === void 0)
              toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces)
          toLoadLanguages[lng] = true;
      });
      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback
        });
      }
      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split("|");
      var lng = s[0];
      var ns = s[1];
      if (err)
        this.emit("failedLoading", lng, ns, err);
      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }
      this.state[name] = err ? -1 : 2;
      var loaded2 = {};
      this.queue.forEach(function(q2) {
        pushPath(q2.loaded, [lng], ns);
        removePending(q2, name);
        if (err)
          q2.errors.push(err);
        if (q2.pendingCount === 0 && !q2.done) {
          Object.keys(q2.loaded).forEach(function(l) {
            if (!loaded2[l])
              loaded2[l] = {};
            var loadedKeys = q2.loaded[l];
            if (loadedKeys.length) {
              loadedKeys.forEach(function(ns2) {
                if (loaded2[l][ns2] === void 0)
                  loaded2[l][ns2] = true;
              });
            }
          });
          q2.done = true;
          if (q2.errors.length) {
            q2.callback(q2.errors);
          } else {
            q2.callback();
          }
        }
      });
      this.emit("loaded", loaded2);
      this.queue = this.queue.filter(function(q2) {
        return !q2.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;
      var tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
      var callback = arguments.length > 5 ? arguments[5] : void 0;
      if (!lng.length)
        return callback(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng,
          ns,
          fcName,
          tried,
          wait,
          callback
        });
        return;
      }
      this.readingCalls++;
      return this.backend[fcName](lng, ns, function(err, data) {
        _this3.readingCalls--;
        if (_this3.waitingReads.length > 0) {
          var next = _this3.waitingReads.shift();
          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }
        if (err && data && tried < _this3.maxRetries) {
          setTimeout(function() {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }
        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend) {
        this.logger.warn("No backend was added via i18next.use. Will not load resources.");
        return callback && callback();
      }
      if (typeof languages === "string")
        languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === "string")
        namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);
      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length)
          callback();
        return null;
      }
      toLoad.toLoad.forEach(function(name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var s = name.split("|");
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, "read", void 0, void 0, function(err, data) {
        if (err)
          _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data)
          _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (key === void 0 || key === null || key === "")
        return;
      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
          isUpdate
        }));
      }
      if (!languages || !languages[0])
        return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);
  return Connector2;
}(EventEmitter);
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle2(args) {
      var ret = {};
      if (_typeof(args[1]) === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (_typeof(args[2]) === "object" || _typeof(args[3]) === "object") {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function(key) {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function noop() {
}
function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function(mem) {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = function(_EventEmitter) {
  _inherits(I18n2, _EventEmitter);
  var _super = _createSuper$3(I18n2);
  function I18n2() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : void 0;
    _classCallCheck$1(this, I18n2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this));
    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);
        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }
      setTimeout(function() {
        _this.init(options, callback);
      }, 0);
    }
    return _this;
  }
  _createClass$1(I18n2, [{
    key: "init",
    value: function init2() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!options.defaultNS && options.defaultNS !== false && options.ns) {
        if (typeof options.ns === "string") {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf("translation") < 0) {
          options.defaultNS = options.ns[0];
        }
      }
      var defOpts = get();
      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
      if (this.options.compatibilityAPI !== "v1") {
        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
      }
      if (options.keySeparator !== void 0) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }
      if (options.nsSeparator !== void 0) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }
      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject)
          return null;
        if (typeof ClassOrObject === "function")
          return new ClassOrObject();
        return ClassOrObject;
      }
      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }
        var formatter;
        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== "undefined") {
          formatter = Formatter;
        }
        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on("*", function(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }
        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init)
            s.i18nFormat.init(this);
        }
        this.translator = new Translator(this.services, this.options);
        this.translator.on("*", function(event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function(m2) {
          if (m2.init)
            m2.init(_this2);
        });
      }
      this.format = this.options.interpolation.format;
      if (!callback)
        callback = noop;
      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== "dev")
          this.options.lng = codes[0];
      }
      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn("init: no languageDetector is used and no lng is defined");
      }
      var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      storeApi.forEach(function(fcName) {
        _this2[fcName] = function() {
          var _this2$store;
          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      storeApiChained.forEach(function(fcName) {
        _this2[fcName] = function() {
          var _this2$store2;
          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
          return _this2;
        };
      });
      var deferred = defer();
      var load = function load2() {
        var finish = function finish2(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce)
            _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
          _this2.isInitialized = true;
          if (!_this2.options.isClone)
            _this2.logger.log("initialized", _this2.options);
          _this2.emit("initialized", _this2.options);
          deferred.resolve(t);
          callback(err, t);
        };
        if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
          return finish(null, _this2.t.bind(_this2));
        _this2.changeLanguage(_this2.options.lng, finish);
      };
      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }
      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === "string" ? language : this.language;
      if (typeof language === "function")
        usedCallback = language;
      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === "cimode")
          return usedCallback();
        var toLoad = [];
        var append = function append2(lng) {
          if (!lng)
            return;
          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function(l) {
            if (toLoad.indexOf(l) < 0)
              toLoad.push(l);
          });
        };
        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function(l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }
        if (this.options.preload) {
          this.options.preload.forEach(function(l) {
            return append(l);
          });
        }
        this.services.backendConnector.load(toLoad, this.options.ns, function(e) {
          if (!e && !_this3.resolvedLanguage && _this3.language)
            _this3.setResolvedLanguage(_this3.language);
          usedCallback(e);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs)
        lngs = this.languages;
      if (!ns)
        ns = this.options.ns;
      if (!callback)
        callback = noop;
      this.services.backendConnector.reload(lngs, ns, function(err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module2) {
      if (!module2)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!module2.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      if (module2.type === "backend") {
        this.modules.backend = module2;
      }
      if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
        this.modules.logger = module2;
      }
      if (module2.type === "languageDetector") {
        this.modules.languageDetector = module2;
      }
      if (module2.type === "i18nFormat") {
        this.modules.i18nFormat = module2;
      }
      if (module2.type === "postProcessor") {
        postProcessor.addPostProcessor(module2);
      }
      if (module2.type === "formatter") {
        this.modules.formatter = module2;
      }
      if (module2.type === "3rdParty") {
        this.modules.external.push(module2);
      }
      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages)
        return;
      if (["cimode", "dev"].indexOf(l) > -1)
        return;
      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (["cimode", "dev"].indexOf(lngInLngs) > -1)
          continue;
        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;
      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit("languageChanging", lng);
      var setLngProps = function setLngProps2(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = void 0;
        _this4.setResolvedLanguage(l);
      };
      var done = function done2(err, l) {
        if (l) {
          setLngProps(l);
          _this4.translator.changeLanguage(l);
          _this4.isLanguageChangingTo = void 0;
          _this4.emit("languageChanged", l);
          _this4.logger.log("languageChanged", l);
        } else {
          _this4.isLanguageChangingTo = void 0;
        }
        deferred.resolve(function() {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback)
          callback(err, function() {
            return _this4.t.apply(_this4, arguments);
          });
      };
      var setLng = function setLng2(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector)
          lngs = [];
        var l = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }
          if (!_this4.translator.language)
            _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector)
            _this4.services.languageDetector.cacheUserLanguage(l);
        }
        _this4.loadResources(l, function(err) {
          done(err, l);
        });
      };
      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }
      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;
      var fixedT = function fixedT2(key, opts) {
        var options;
        if (_typeof(opts) !== "object") {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }
          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6({}, opts);
        }
        options.lng = options.lng || fixedT2.lng;
        options.lngs = options.lngs || fixedT2.lngs;
        options.ns = options.ns || fixedT2.ns;
        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT2.keyPrefix;
        var keySeparator = _this5.options.keySeparator || ".";
        var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };
      if (typeof lng === "string") {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;
      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;
      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized) {
        this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
        return false;
      }
      if (!this.languages || !this.languages.length) {
        this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
        return false;
      }
      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === "cimode")
        return true;
      var loadNotPending = function loadNotPending2(l, n2) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n2)];
        return loadState === -1 || loadState === 2;
      };
      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== void 0)
          return preResult;
      }
      if (this.hasResourceBundle(lng, ns))
        return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
        return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
        return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;
      var deferred = defer();
      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }
      if (typeof ns === "string")
        ns = [ns];
      ns.forEach(function(n2) {
        if (_this7.options.ns.indexOf(n2) < 0)
          _this7.options.ns.push(n2);
      });
      this.loadResources(function(err) {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === "string")
        lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function(lng) {
        return preloaded.indexOf(lng) < 0;
      });
      if (!newLngs.length) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function(err) {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng)
        lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng)
        return "rtl";
      var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
        isClone: true
      });
      var clone = new I18n2(mergedOptions);
      if (options.debug !== void 0 || options.prefix !== void 0) {
        clone.logger = clone.logger.clone(options);
      }
      var membersToCopy = ["store", "services", "language"];
      membersToCopy.forEach(function(m2) {
        clone[m2] = _this8[m2];
      });
      clone.services = _objectSpread$6({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on("*", function(event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);
  return I18n2;
}(EventEmitter);
_defineProperty$1(I18n, "createInstance", function() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : void 0;
  return new I18n(options, callback);
});
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "\xA9",
  "&#169;": "\xA9",
  "&reg;": "\xAE",
  "&#174;": "\xAE",
  "&hellip;": "\u2026",
  "&#8230;": "\u2026",
  "&#x2F;": "/",
  "&#47;": "/"
};
var unescapeHtmlEntity = function unescapeHtmlEntity2(m2) {
  return htmlEntities[m2];
};
var unescape = function unescape2(text) {
  return text.replace(matchHtmlEntity, unescapeHtmlEntity);
};
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape
};
createContext();
function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
}
(function() {
  function ReportNamespaces() {
    _classCallCheck(this, ReportNamespaces);
    this.usedNamespaces = {};
  }
  _createClass(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;
      namespaces.forEach(function(ns) {
        if (!_this.usedNamespaces[ns])
          _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
})();
var initReactI18next = {
  type: "3rdParty",
  init: function init(instance2) {
    setDefaults(instance2.options.react);
  }
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React__default, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const Fragment = jsxRuntime.exports.Fragment;
let api;
let http;
let config;
let store;
let form;
let formApi;
let message;
let notification;
let graphqlClient;
let exported;
let UpInit = false;
const setUp = async function setUp2(options) {
  config = new Config(options);
  http = config.get("override.http") || axios.create();
  api = config.get("override") || axios.create({
    baseURL: config.get("api.url")
  });
  if (!config.has("exclude.form")) {
    form = function(data, options2) {
      return new Form(data, {
        ...{
          http
        },
        ...options2
      });
    };
    formApi = function(data, options2) {
      return new Form(data, {
        ...{
          http: api
        },
        ...options2
      });
    };
  }
  if (!config.has("exclude.message")) {
    message = config.get("override.message") || message$1;
  }
  if (!config.has("exclude.notification")) {
    notification = config.get("override.notification") || notification$1;
  }
  if (!config.has("exclude.i18n")) {
    await instance.use(initReactI18next).init(options.i18n);
  }
  if (!config.has("exclude.graphql")) {
    if (config.has("graphql.client")) {
      graphqlClient = config.get("graphql.client");
    } else if (config.has("graphql.url")) {
      graphqlClient = new ApolloClient({
        uri: config.get("graphql.url"),
        cache: new InMemoryCache()
      });
    }
  }
  exported = {
    config,
    api,
    http,
    i18n: instance,
    form,
    formApi,
    store,
    graphqlClient,
    t: instance.t,
    message,
    notification
  };
  if (config.has("debug")) {
    console.log("\u2934 useUp() accessible vars :", exported);
  }
  UpInit = true;
  return exported;
};
const useUp = function() {
  if (!UpInit) {
    console.warn("Up is not initialized, you must run setUp() first or add an UpProvider !");
  }
  return exported;
};
const UpContext = createContext({});
function UpProvider({
  options,
  children
}) {
  const [up, setInit] = useState();
  useEffect(() => {
    setUp(options).then((data) => {
      setInit(data);
    });
  }, []);
  if (!up) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx(UpContext.Provider, {
    value: up,
    children: /* @__PURE__ */ jsx(ApolloProvider, {
      client: up.graphqlClient,
      children
    })
  });
}
export { UpContext, UpInit, UpProvider, exported, setUp, useUp };
