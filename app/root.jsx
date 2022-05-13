import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "~/styles/global.css";
import App from "./App";
export { loader, action } from "./App";

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,400;0,600;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Public APIs",
  viewport: "width=device-width,initial-scale=1",
});

export default function Root() {
  const loaderData = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <App data={loaderData}>
          <Outlet />
        </App>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
