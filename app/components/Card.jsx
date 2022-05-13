import { Badge, Box, Button, Paper, Text, Title } from "@mantine/core";
import { useCallback } from "react";
import { ImNewTab } from "react-icons/im";
import { RiKeyLine, RiUserSharedLine } from "react-icons/ri";
import { TiTick, TiTimes, TiWarning } from "react-icons/ti";
import uniqolor from "uniqolor";
import styles from "~/styles/card.css";

const authBadgeMap = {
  no: {
    color: "green",
    children: "No auth",
    leftSection: <TiTick size={18} />,
  },
  apiKey: {
    color: "yellow",
    children: "API Key required",
    leftSection: <RiKeyLine size={18} />,
  },
  OAuth: {
    color: "yellow",
    children: "oAuth Required",
    leftSection: <RiUserSharedLine size={18} />,
  },
};

const corsBadgeMap = {
  no: {
    color: "red",
    leftSection: <TiTimes size={18} />,
  },
  yes: {
    color: "green",
    leftSection: <TiTick size={18} />,
  },
  unknown: {
    color: "yellow",
    leftSection: <TiWarning size={18} />,
  },
};

function useCategoryStyle(category) {
  const style = useCallback(
    (theme) => {
      const { color, isLight } = uniqolor(category);
      const style = { backgroundColor: color };
      if (isLight) style.color = theme.colors.dark[9];
      else style.color = "#ffffff";
      return style;
    },
    [category]
  );
  return style;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Card({
  API,
  Auth,
  Category,
  Cors,
  Description,
  HTTPS,
  Link,
}) {
  const categoryStyle = useCategoryStyle(Category);
  return (
    <Paper withBorder className="subscription-card">
      <Badge variant="filled" sx={categoryStyle} className="category">
        {Category}
      </Badge>
      <Title p="sm" className="title">
        {API}
      </Title>
      <Box p="sm" className="attributes">
        <Badge {...authBadgeMap[Auth || "no"]} />
        <Badge
          color={HTTPS ? "green" : "red"}
          leftSection={HTTPS ? <TiTick size={18} /> : <TiTimes size={18} />}
        >
          HTTPS
        </Badge>
        <Badge {...corsBadgeMap[Cors]}>CORS</Badge>
      </Box>
      <Text p="sm" className="description">
        {Description}
      </Text>
      <Button
        rightIcon={<ImNewTab />}
        component="a"
        href={Link}
        target="_blank"
      >
        View Documentation
      </Button>
    </Paper>
  );
}
