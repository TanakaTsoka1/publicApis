import {
  ActionIcon,
  AppShell,
  ColorSchemeProvider,
  GenIcon,
  Group,
  Header,
  MantineProvider,
  Title,
  useColorScheme,
  useMantineColorScheme
} from "/build/_shared/chunk-ZCOFZQHA.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-FVYWXXEC.js";

// empty-module:./api.server
var require_api = __commonJS({
  "empty-module:./api.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/Tanaka/Desktop/imgn-audition-main/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-XWP3BCBO.css";

// app/App.jsx
init_react();
var import_api = __toESM(require_api());

// app/components/DarkModeToggle.jsx
init_react();

// node_modules/react-icons/bs/index.esm.js
init_react();
function BsMoonStarsFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" } }, { "tag": "path", "attr": { "d": "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" } }] })(props);
}
function BsSunFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" } }] })(props);
}

// app/components/DarkModeToggle.jsx
function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "outline",
    color: dark ? "yellow" : "blue",
    onClick: () => toggleColorScheme(),
    title: "Toggle color scheme"
  }, dark ? /* @__PURE__ */ React.createElement(BsSunFill, {
    size: 18
  }) : /* @__PURE__ */ React.createElement(BsMoonStarsFill, {
    size: 18
  }));
}

// app/App.jsx
function App({
  children,
  data: { colorScheme: cookieColorScheme, health }
}) {
  const submit = useSubmit();
  const preferredColorScheme = useColorScheme();
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
  return /* @__PURE__ */ React.createElement(ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme
  }, /* @__PURE__ */ React.createElement(MantineProvider, {
    theme,
    withNormalizeCSS: true,
    withGlobalStyles: true
  }, /* @__PURE__ */ React.createElement(AppShell, {
    fixed: true,
    padding: "md",
    header: /* @__PURE__ */ React.createElement(Header, {
      height: 80,
      p: "md",
      sx: (theme2) => ({
        backgroundColor: theme2.colorScheme === "dark" ? "#1F4068" : "#9ADCFF"
      })
    }, /* @__PURE__ */ React.createElement(Group, {
      position: "apart"
    }, /* @__PURE__ */ React.createElement(Title, null, "Public API List"), /* @__PURE__ */ React.createElement(DarkModeToggle, null)))
  }, children)));
}

// app/root.jsx
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
  const loaderData = useLoaderData();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(App, {
    data: loaderData
  }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  Root as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-LJ36RLJM.js.map
