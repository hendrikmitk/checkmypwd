// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"A2T1":[function(require,module,exports) {
/////////////////
// S E L E C T //
/////////////////
var a = document.getElementById('security-feature-a');
var b = document.getElementById('security-feature-b');
var c = document.getElementById('security-feature-c');
var d = document.getElementById('security-feature-d');
var e = document.getElementById('security-feature-e');
var pwdInput = document.getElementById('pwd');
var clearButton = document.getElementById('clear-button');
var copyButton = document.getElementById('copy-button'); /////////////////
// D E F I N E //
/////////////////

var inspectInput = function inspectInput() {
  a.style.color = '#ff0000';
  b.style.color = '#ff0000';
  c.style.color = '#008000';
  d.style.color = '#ff0000';
  e.style.color = '#008000';
  if (pwdInput.value.length >= 8) a.style.color = '#008000'; // HAS 8 OR MORE CHARACTERS

  if (pwdInput.value.match(/\d+/g) !== null) b.style.color = '#008000'; // CONTAINS A NUMBER

  if (pwdInput.value.length > 22) c.style.color = '#ff0000'; // HAS MORE THAN 22 CHARACTERS

  if (pwdInput.value.match(/[!@#$%^&§*()_+\-=\[\]{};':"\\|,.<>\/?]/g) !== null) d.style.color = '#008000'; // CONTAINS SPECIAL CHARACTER

  if (pwdInput.value.match(/[ ]+/g) !== null) e.style.color = '#ff0000'; // CONTAINS SPACES

  if (pwdInput.value.length < 1) a.style.color = b.style.color = c.style.color = d.style.color = e.style.color = '#5e5a5a'; // RESET COLOR ON EMPTY INPUT
};

var copyInput = function copyInput() {
  if (!pwdInput.value) return;
  pwdInput.focus();
  pwdInput.select();

  try {
    alert("Text \"".concat(pwdInput.value, "\" copied to clipboard"));
  } catch (err) {
    alert('Unable to copy text');
  }
};

var clearInput = function clearInput() {
  if (pwdInput.value) {
    pwdInput.value = '';
    pwdInput.focus();
    inspectInput();
  }
}; /////////////////
// L I S T E N //
/////////////////


window.addEventListener('load', inspectInput);
pwdInput.addEventListener('input', inspectInput);
pwdInput.addEventListener('paste', inspectInput);
pwdInput.addEventListener('change', inspectInput);
pwdInput.addEventListener('keydown', inspectInput);
clearButton.addEventListener('click', clearInput);
copyButton.addEventListener('click', copyInput);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.9ef22fb2.js.map