var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
var import_ssr = require("@mantine/ssr");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${(0, import_ssr.injectStylesIntoStaticMarkup)(markup)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/Tanaka/Desktop/imgn-audition-main/app/root.jsx
var root_exports = {};
__export(root_exports, {
  action: () => action,
  default: () => Root,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-XWP3BCBO.css";

// app/App.jsx
var import_core2 = require("@mantine/core");
var import_hooks = require("@mantine/hooks");
var import_node2 = require("@remix-run/node");
var import_react2 = require("@remix-run/react");

// app/api.server.js
var import_source = __toESM(require("got/dist/source/index"));
var got = import_source.default.extend({ prefixUrl: "https://api.publicapis.org/" });
function getApis(searchParams = {}) {
  return got.get("entries", { searchParams }).json().then(({ entries }) => (entries || []).filter(({ API, Category, Link }) => API && Category && Link));
}
function getRandomApi() {
  return got.get("random").json().then(({ count, entries }) => {
    if (count != 1 || !entries || entries.length !== 1)
      return null;
    return entries[0];
  });
}
function getCategories() {
  return got.get("categories").json().then(({ categories }) => categories);
}
async function getHealth() {
  let health = false;
  const result = await got.get("health").json().catch(() => health = false);
  if (result.alive)
    health = true;
  return health;
}

// app/components/DarkModeToggle.jsx
var import_core = require("@mantine/core");
var import_bs = require("react-icons/bs");
function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = (0, import_core.useMantineColorScheme)();
  const dark = colorScheme === "dark";
  return /* @__PURE__ */ React.createElement(import_core.ActionIcon, {
    variant: "outline",
    color: dark ? "yellow" : "blue",
    onClick: () => toggleColorScheme(),
    title: "Toggle color scheme"
  }, dark ? /* @__PURE__ */ React.createElement(import_bs.BsSunFill, {
    size: 18
  }) : /* @__PURE__ */ React.createElement(import_bs.BsMoonStarsFill, {
    size: 18
  }));
}

// app/cookies.jsx
var import_node = require("@remix-run/node");
var colorSchemeCookie = (0, import_node.createCookie)("color-scheme", {
  maxAge: 604800
});

// app/App.jsx
async function loader({ request }) {
  const cookieHeader = request.headers.get("Cookie");
  const [colorScheme, health] = await Promise.all([
    colorSchemeCookie.parse(cookieHeader),
    getHealth()
  ]);
  return (0, import_node2.json)({ colorScheme, health });
}
async function action({ request }) {
  const formData = await request.formData();
  const colorScheme = formData.get("colorScheme");
  if (!colorScheme)
    return null;
  return (0, import_node2.redirect)("./", {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(colorScheme)
    }
  });
}
function App({
  children,
  data: { colorScheme: cookieColorScheme, health }
}) {
  const submit = (0, import_react2.useSubmit)();
  const preferredColorScheme = (0, import_hooks.useColorScheme)();
  let colorScheme = preferredColorScheme;
  if (cookieColorScheme !== null) {
    colorScheme = cookieColorScheme;
  }
  const toggleColorScheme = () => {
    let value;
    if (colorScheme === null)
      value = "dark";
    else
      value = colorScheme == "dark" ? "light" : "dark";
    var formData = new FormData();
    formData.append("colorScheme", value);
    submit(formData, { method: "post", replace: true });
  };
  const theme = {
    fontFamily: "Roboto Mono, Verdana, sans-serif",
    fontFamilyMonospace: "Roboto Mono, Monaco, Courier, monospace",
    headings: { fontFamily: "Space Mono, Greycliff CF, sans-serif" },
    colorScheme,
    colors: {
      blue: colorScheme === "dark" ? [
        "#677689",
        "#596B80",
        "#4D6179",
        "#415773",
        "#354F6E",
        "#2A476A",
        "#1F4068",
        "#223A57",
        "#24354A",
        "#24303F",
        "#222B36",
        "#21272F",
        "#1F2329"
      ] : [
        "#F3F9FC",
        "#C9E8F9",
        "#9ADCFF",
        "#7FC9F1",
        "#6CB7DF",
        "#5FA6CB",
        "#5595B8",
        "#5185A0",
        "#507589"
      ],
      yellow: [
        "#FCFCF3",
        "#F9F6C9",
        "#FFF89A",
        "#F1E97F",
        "#DFD76C",
        "#CBC45F",
        "#B8B155",
        "#A09B51",
        "#898550"
      ],
      red: colorScheme === "dark" ? [
        "#EFE5E7",
        "#E2C8CC",
        "#D9AAB2",
        "#D68A96",
        "#D9677A",
        "#E43F5A",
        "#CE3851",
        "#AF3D50",
        "#93414F",
        "#7D424C",
        "#6B4148",
        "#5D3E43"
      ] : [
        "#F9E3EA",
        "#F7B9CC",
        "#FF8AAE",
        "#EF7299",
        "#DC6288",
        "#C85679",
        "#B54D6D",
        "#9A4E65",
        "#844D5E"
      ],
      dark: [
        "#BBC0CB",
        "#8892AB",
        "#5F6E93",
        "#465479",
        "#324064",
        "#223054",
        "#162447",
        "#141C30",
        "#101521",
        "#0D1017",
        "#0A0C10",
        "#08090B",
        "#060708"
      ]
    },
    primaryColor: "blue"
  };
  return /* @__PURE__ */ React.createElement(import_core2.ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme
  }, /* @__PURE__ */ React.createElement(import_core2.MantineProvider, {
    theme,
    withNormalizeCSS: true,
    withGlobalStyles: true
  }, /* @__PURE__ */ React.createElement(import_core2.AppShell, {
    fixed: true,
    padding: "md",
    header: /* @__PURE__ */ React.createElement(import_core2.Header, {
      height: 80,
      p: "md",
      sx: (theme2) => ({
        backgroundColor: theme2.colorScheme === "dark" ? "#1F4068" : "#9ADCFF"
      })
    }, /* @__PURE__ */ React.createElement(import_core2.Group, {
      position: "apart"
    }, /* @__PURE__ */ React.createElement(import_core2.Title, null, "Public API List"), /* @__PURE__ */ React.createElement(DarkModeToggle, null)))
  }, children)));
}

// route:/Users/Tanaka/Desktop/imgn-audition-main/app/root.jsx
function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,400;0,600;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "Public APIs",
  viewport: "width=device-width,initial-scale=1"
});
function Root() {
  const loaderData = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(App, {
    data: loaderData
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null)), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}

// route:/Users/Tanaka/Desktop/imgn-audition-main/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  Filter: () => Filter,
  default: () => Index,
  links: () => links2,
  loader: () => loader2
});
var import_core5 = require("@mantine/core");
var import_node3 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");
var import_react7 = require("react");
var import_md = require("react-icons/md");
var import_react_virtualized_auto_sizer = __toESM(require("react-virtualized-auto-sizer"));
var import_react_window = require("react-window");

// app/components/Card.jsx
var import_core3 = require("@mantine/core");
var import_react4 = require("react");
var import_im = require("react-icons/im");
var import_ri = require("react-icons/ri");
var import_ti = require("react-icons/ti");
var import_uniqolor = __toESM(require("uniqolor"));

// app/styles/card.css
var card_default = "/build/_assets/card-46UTV7U5.css";

// app/components/Card.jsx
var authBadgeMap = {
  no: {
    color: "green",
    children: "No auth",
    leftSection: /* @__PURE__ */ React.createElement(import_ti.TiTick, {
      size: 18
    })
  },
  apiKey: {
    color: "yellow",
    children: "API Key required",
    leftSection: /* @__PURE__ */ React.createElement(import_ri.RiKeyLine, {
      size: 18
    })
  },
  OAuth: {
    color: "yellow",
    children: "oAuth Required",
    leftSection: /* @__PURE__ */ React.createElement(import_ri.RiUserSharedLine, {
      size: 18
    })
  }
};
var corsBadgeMap = {
  no: {
    color: "red",
    leftSection: /* @__PURE__ */ React.createElement(import_ti.TiTimes, {
      size: 18
    })
  },
  yes: {
    color: "green",
    leftSection: /* @__PURE__ */ React.createElement(import_ti.TiTick, {
      size: 18
    })
  },
  unknown: {
    color: "yellow",
    leftSection: /* @__PURE__ */ React.createElement(import_ti.TiWarning, {
      size: 18
    })
  }
};
function useCategoryStyle(category) {
  const style = (0, import_react4.useCallback)((theme) => {
    const { color, isLight } = (0, import_uniqolor.default)(category);
    const style2 = { backgroundColor: color };
    if (isLight)
      style2.color = theme.colors.dark[9];
    else
      style2.color = "#ffffff";
    return style2;
  }, [category]);
  return style;
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: card_default
    }
  ];
}
function Card({
  API,
  Auth,
  Category,
  Cors,
  Description,
  HTTPS,
  Link
}) {
  const categoryStyle = useCategoryStyle(Category);
  return /* @__PURE__ */ React.createElement(import_core3.Paper, {
    withBorder: true,
    className: "subscription-card"
  }, /* @__PURE__ */ React.createElement(import_core3.Badge, {
    variant: "filled",
    sx: categoryStyle,
    className: "category"
  }, Category), /* @__PURE__ */ React.createElement(import_core3.Title, {
    p: "sm",
    className: "title"
  }, API), /* @__PURE__ */ React.createElement(import_core3.Box, {
    p: "sm",
    className: "attributes"
  }, /* @__PURE__ */ React.createElement(import_core3.Badge, __spreadValues({}, authBadgeMap[Auth || "no"])), /* @__PURE__ */ React.createElement(import_core3.Badge, {
    color: HTTPS ? "green" : "red",
    leftSection: HTTPS ? /* @__PURE__ */ React.createElement(import_ti.TiTick, {
      size: 18
    }) : /* @__PURE__ */ React.createElement(import_ti.TiTimes, {
      size: 18
    })
  }, "HTTPS"), /* @__PURE__ */ React.createElement(import_core3.Badge, __spreadValues({}, corsBadgeMap[Cors]), "CORS")), /* @__PURE__ */ React.createElement(import_core3.Text, {
    p: "sm",
    className: "description"
  }, Description), /* @__PURE__ */ React.createElement(import_core3.Button, {
    rightIcon: /* @__PURE__ */ React.createElement(import_im.ImNewTab, null),
    component: "a",
    href: Link,
    target: "_blank"
  }, "View Documentation"));
}

// app/components/SkeletonCard.jsx
var import_core4 = require("@mantine/core");
function SkeletonCard({ style }) {
  return /* @__PURE__ */ React.createElement(import_core4.Paper, {
    style,
    withBorder: true,
    className: "subscription-card"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "category"
  }, /* @__PURE__ */ React.createElement(import_core4.Skeleton, {
    visible: true,
    height: 20,
    radius: 32
  })), /* @__PURE__ */ React.createElement(import_core4.Box, {
    p: "sm",
    className: "title"
  }, /* @__PURE__ */ React.createElement(import_core4.Skeleton, {
    visible: true,
    height: 40,
    width: "60%"
  })), /* @__PURE__ */ React.createElement(import_core4.Box, {
    pad: "sm",
    className: "attributes"
  }, /* @__PURE__ */ React.createElement(import_core4.Skeleton, {
    visible: true,
    height: 20,
    width: 94,
    radius: 32
  }), /* @__PURE__ */ React.createElement(import_core4.Skeleton, {
    visible: true,
    height: 20,
    width: 81,
    radius: 32
  }), /* @__PURE__ */ React.createElement(import_core4.Skeleton, {
    visible: true,
    height: 20,
    width: 74,
    radius: 32
  })), /* @__PURE__ */ React.createElement(import_core4.Box, {
    p: "sm",
    className: "description"
  }, /* @__PURE__ */ React.createElement(import_core4.Skeleton, {
    visible: true,
    height: 26,
    width: "80%"
  })), /* @__PURE__ */ React.createElement(import_core4.Button, {
    disabled: true,
    loading: true
  }, "View Docs"));
}

// app/isFetching.jsx
var import_react5 = require("@remix-run/react");
function useIsFetching() {
  const { state, type } = (0, import_react5.useTransition)();
  if (state === "idle")
    return false;
  if ([
    "loaderSubmission",
    "loaderSubmissionRedirect",
    "redirect",
    "load"
  ].includes(type))
    return true;
  return false;
}

// route:/Users/Tanaka/Desktop/imgn-audition-main/app/routes/index.jsx
function Filter({ categories: _categories = [] }) {
  const loading = useIsFetching();
  const categories = (0, import_react7.useMemo)(() => _categories.map((v) => ({
    value: v && v.includes(" ") ? v.split(" ")[0] : v,
    label: v
  })), [_categories]);
  const [searchParams] = (0, import_react6.useSearchParams)();
  let {
    categories: categoryFilter,
    title,
    description,
    auth,
    cors,
    https
  } = Object.fromEntries(searchParams.entries());
  categoryFilter = categoryFilter ? categoryFilter.split(",") : [];
  if (auth == null) {
    if (auth !== null)
      auth = "";
    else
      auth = "null";
  }
  return /* @__PURE__ */ React.createElement(import_react6.Form, {
    method: "get",
    action: "/"
  }, /* @__PURE__ */ React.createElement(import_core5.MultiSelect, {
    disabled: loading,
    defaultValue: categoryFilter,
    data: categories,
    label: "Category",
    searchable: true,
    nothingFound: "Nothing found",
    clearable: true,
    name: "categories"
  }), /* @__PURE__ */ React.createElement(import_core5.TextInput, {
    disabled: loading,
    label: "Title",
    name: "title",
    defaultValue: title
  }), /* @__PURE__ */ React.createElement(import_core5.TextInput, {
    disabled: loading,
    label: "Description",
    name: "description",
    defaultValue: description
  }), /* @__PURE__ */ React.createElement(import_core5.Select, {
    disabled: loading,
    name: "auth",
    defaultValue: auth,
    label: "Authentication",
    data: [
      { value: "null", label: "No Auth" },
      { value: "apiKey", label: "API Key" },
      { value: "oAuth", label: "oAuth" }
    ],
    clearable: true
  }), /* @__PURE__ */ React.createElement(import_core5.Select, {
    disabled: loading,
    name: "cors",
    defaultValue: cors,
    label: "CORS",
    data: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ],
    clearable: true
  }), /* @__PURE__ */ React.createElement(import_core5.Select, {
    disabled: loading,
    name: "https",
    defaultValue: https,
    label: "HTTPS",
    data: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ],
    clearable: true
  }), /* @__PURE__ */ React.createElement(import_core5.Button, {
    type: "submit",
    loading
  }, "Filter"), /* @__PURE__ */ React.createElement(import_core5.Button, {
    loading,
    component: "a",
    href: "/"
  }, "Clear"));
}
var loader2 = async ({ request }) => {
  const url = new URL(request.url);
  let _a = Object.fromEntries(url.searchParams.entries()), { categories: categoryFilter } = _a, filters = __objRest(_a, ["categories"]);
  if (filters.auth === null)
    filters.auth = "null";
  categoryFilter = categoryFilter ? categoryFilter.split(",") : [];
  let apis = [];
  if (categoryFilter.length)
    apis = (await Promise.all(categoryFilter.map((category) => getApis(__spreadValues({ category }, filters))))).flat();
  else
    apis = await getApis(filters);
  const random = await getRandomApi();
  const categories = await getCategories();
  return (0, import_node3.json)({ apis, random, categories });
};
function Index() {
  const loading = useIsFetching();
  const { apis, categories } = (0, import_react6.useLoaderData)();
  const Row = ({ index, style }) => /* @__PURE__ */ React.createElement("div", {
    style
  }, /* @__PURE__ */ React.createElement(Card, __spreadValues({}, apis[index])));
  const SkeletonRow = ({ index, style }) => /* @__PURE__ */ React.createElement("div", {
    style
  }, /* @__PURE__ */ React.createElement(SkeletonCard, null));
  return /* @__PURE__ */ React.createElement("div", {
    className: "full-height"
  }, /* @__PURE__ */ React.createElement(import_core5.Navbar, {
    width: { base: 300 },
    p: "md"
  }, /* @__PURE__ */ React.createElement(import_core5.Navbar.Section, null, /* @__PURE__ */ React.createElement(Filter, {
    categories
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "full-height"
  }, !loading && !apis.length && /* @__PURE__ */ React.createElement(import_core5.Alert, {
    icon: /* @__PURE__ */ React.createElement(import_md.MdOutlineWarningAmber, {
      size: 16
    }),
    title: "No results!",
    color: "yellow"
  }, "Oops, looks like there were no results for your search."), /* @__PURE__ */ React.createElement(import_react_virtualized_auto_sizer.default, {
    defaultHeight: 700,
    defaultWidth: 1024
  }, ({ height, width }) => loading ? /* @__PURE__ */ React.createElement(import_react_window.FixedSizeList, {
    height,
    itemCount: 50,
    itemSize: 165,
    width
  }, SkeletonRow) : /* @__PURE__ */ React.createElement(import_react_window.FixedSizeList, {
    height,
    itemCount: apis.length,
    itemSize: 165,
    width
  }, Row))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "a25e0a2a", "entry": { "module": "/build/entry.client-74ZICARJ.js", "imports": ["/build/_shared/chunk-FVYWXXEC.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-LJ36RLJM.js", "imports": ["/build/_shared/chunk-ZCOFZQHA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-V4Z3HRB2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A25E0A2A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
