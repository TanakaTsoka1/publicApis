import {
  AppShell, ColorSchemeProvider, Group, Header, MantineProvider, Title
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { json, redirect } from "@remix-run/node";
import { useSubmit } from "@remix-run/react";
import { getHealth } from "./api.server";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { colorSchemeCookie } from "./cookies";

export async function loader({ request }) {
  const cookieHeader = request.headers.get("Cookie");
  const [colorScheme, health] = await Promise.all([
    colorSchemeCookie.parse(cookieHeader),
    getHealth(),
  ]);

  return json({ colorScheme, health });
}

export async function action({ request }) {
  const formData = await request.formData();
  const colorScheme = formData.get("colorScheme");
  if (!colorScheme) return null;
  return redirect("./", {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(colorScheme),
    },
  });
}

export default function App({
  children,
  data: { colorScheme: cookieColorScheme, health },
}) {
  const submit = useSubmit();
  const preferredColorScheme = useColorScheme();
  let colorScheme = preferredColorScheme;
  if (cookieColorScheme !== null) {
    colorScheme = cookieColorScheme;
  }

  const toggleColorScheme = () => {
    let value;
    if (colorScheme === null) value = "dark";
    else value = colorScheme == "dark" ? "light" : "dark";
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
      blue:
        colorScheme === "dark"
          ? [
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
              "#1F2329",
            ]
          : [
              "#F3F9FC",
              "#C9E8F9",
              "#9ADCFF",
              "#7FC9F1",
              "#6CB7DF",
              "#5FA6CB",
              "#5595B8",
              "#5185A0",
              "#507589",
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
        "#898550",
      ],
      red:
        colorScheme === "dark"
          ? [
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
              "#5D3E43",
            ]
          : [
              "#F9E3EA",
              "#F7B9CC",
              "#FF8AAE",
              "#EF7299",
              "#DC6288",
              "#C85679",
              "#B54D6D",
              "#9A4E65",
              "#844D5E",
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
        "#060708",
      ],
    },
    primaryColor: "blue",
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
        <AppShell
          fixed
          padding="md"
          header={
            <Header
              height={80}
              p="md"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark" ? "#1F4068" : "#9ADCFF",
              })}
            >
              <Group position="apart">
                <Title>Public API List</Title>
                <DarkModeToggle />
              </Group>
            </Header>
          }
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
