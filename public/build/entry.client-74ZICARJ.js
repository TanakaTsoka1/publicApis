import {
  React,
  RemixBrowser,
  __commonJS,
  __toESM,
  init_react,
  require_react_dom
} from "/build/_shared/chunk-FVYWXXEC.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    init_react();
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.jsx
init_react();
var import_client = __toESM(require_client());
(0, import_client.hydrateRoot)(document, /* @__PURE__ */ React.createElement(RemixBrowser, null));
//# sourceMappingURL=/build/entry.client-74ZICARJ.js.map
