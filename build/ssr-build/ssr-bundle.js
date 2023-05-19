module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js

var EMPTY$1 = {};
function preact_router_es_assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (preact_router_es_canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var preact_router_es_Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(external_preact_["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          preact_router_es_assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(external_preact_["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(external_preact_["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(external_preact_["Component"]);
var preact_router_es_Link = function Link(props) {
  return Object(external_preact_["createElement"])('a', preact_router_es_assign({
    onClick: handleLinkClick
  }, props));
};
var preact_router_es_Route = function Route(props) {
  return Object(external_preact_["createElement"])(props.component, props);
};
preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
// CONCATENATED MODULE: ./routes/home/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({});
// CONCATENATED MODULE: ./routes/home/index.js


var home_Home = function Home() {
  return Object(external_preact_["h"])("div", {
    class: style.home
  }, Object(external_preact_["h"])("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap",
    rel: "stylesheet"
  }), Object(external_preact_["h"])("h1", null, "Generative Gestaltung"), Object(external_preact_["h"])("hr", null), Object(external_preact_["h"])("br", null), "Jonathan Grupp", Object(external_preact_["h"])("h2", null, "Guilty Pleasure (sound on!)"), "Arduino Heartbeat & Pressure Sensor, Touchdesigner, Python, Midi, Ableton", Object(external_preact_["h"])("div", {
    class: "gallery"
  }, Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("img", {
    src: "/assets/media/guilty/guilty1.jpeg"
  })), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/guilty/guilty2.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/guilty/guilty3.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag."))), Object(external_preact_["h"])("h2", null, "Various"), "Touchdesigner, p5.js", Object(external_preact_["h"])("div", {
    class: "gallery"
  }, Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/b.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/rotate.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/plane.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/abc_wire.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/abc.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/flow.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/flow2.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/lineshader.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/disco.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/grid.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/disco_mini.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/roughjapan.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/topo2.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/topo.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("video", {
    controls: true,
    preload: "metadata"
  }, Object(external_preact_["h"])("source", {
    src: "/assets/media/various/windows_2.mp4#t=0.001",
    type: "video/mp4"
  }), "Your browser does not support the video tag."))));
};
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./components/app.js



// Code-splitting is automated for `routes` directory

var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es_Router, null, Object(external_preact_["h"])(home, {
    path: "/"
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map