import { createCookie } from "@remix-run/node";

export const colorSchemeCookie = createCookie("color-scheme", {
  maxAge: 604_800, // one week
});