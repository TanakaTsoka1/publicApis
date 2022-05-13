import {
  Alert,
  Button,
  MultiSelect,
  Navbar,
  Select,
  TextInput
} from "@mantine/core";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import { useMemo } from "react";
import { MdOutlineWarningAmber } from "react-icons/md";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { getApis, getCategories, getRandomApi } from "~/api.server";
import Card from "~/components/Card";
import SkeletonCard from "~/components/SkeletonCard";
import useIsFetching from "~/isFetching";
export { links } from "~/components/Card";

export function Filter({ categories: _categories = [] }) {
  const loading = useIsFetching();
  const categories = useMemo(
    () =>
      _categories.map((v) => ({
        value: v && v.includes(" ") ? v.split(" ")[0] : v,
        label: v,
      })),
    [_categories]
  );
  const [searchParams] = useSearchParams();
  let {
    categories: categoryFilter,
    title,
    description,
    auth,
    cors,
    https,
  } = Object.fromEntries(searchParams.entries());
  categoryFilter = categoryFilter ? categoryFilter.split(",") : [];
  if (auth == null) {
    if (auth !== null) auth = "";
    else auth = "null";
  }

  return (
    <Form method="get" action="/">
      <MultiSelect
        disabled={loading}
        defaultValue={categoryFilter}
        data={categories}
        label="Category"
        searchable
        nothingFound="Nothing found"
        clearable
        name="categories"
      />
      <TextInput
        disabled={loading}
        label="Title"
        name="title"
        defaultValue={title}
      />
      <TextInput
        disabled={loading}
        label="Description"
        name="description"
        defaultValue={description}
      />
      <Select
        disabled={loading}
        name="auth"
        defaultValue={auth}
        label="Authentication"
        data={[
          { value: "null", label: "No Auth" },
          { value: "apiKey", label: "API Key" },
          { value: "oAuth", label: "oAuth" },
        ]}
        clearable
      />
      <Select
        disabled={loading}
        name="cors"
        defaultValue={cors}
        label="CORS"
        data={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
        clearable
      />
      <Select
        disabled={loading}
        name="https"
        defaultValue={https}
        label="HTTPS"
        data={[
          { value: "true", label: "Yes" },
          { value: "false", label: "No" },
        ]}
        clearable
      />
      <Button type="submit" loading={loading}>
        Filter
      </Button>
      <Button loading={loading} component="a" href="/">
        Clear
      </Button>
    </Form>
  );
}

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  let { categories: categoryFilter, ...filters } = Object.fromEntries(
    url.searchParams.entries()
  );
  if (filters.auth === null) filters.auth = "null";
  categoryFilter = categoryFilter ? categoryFilter.split(",") : [];

  let apis = [];
  if (categoryFilter.length)
    apis = (
      await Promise.all(
        categoryFilter.map((category) => getApis({ category, ...filters }))
      )
    ).flat();
  else apis = await getApis(filters);
  const random = await getRandomApi();
  const categories = await getCategories();
  return json({ apis, random, categories });
};

export default function Index() {
  const loading = useIsFetching();
  const { apis, categories } = useLoaderData();

  const Row = ({ index, style }) => (
    <div style={style}>
      <Card {...apis[index]} />
    </div>
  );

  const SkeletonRow = ({ index, style }) => (
    <div style={style}>
      <SkeletonCard />
    </div>
  );

  return (
    <div className="full-height">
      <Navbar width={{ base: 300 }} p="md">
        <Navbar.Section>
          <Filter categories={categories} />
        </Navbar.Section>
      </Navbar>
      <div className="full-height">
        {!loading && !apis.length && (
          <Alert
            icon={<MdOutlineWarningAmber size={16} />}
            title="No results!"
            color="yellow"
          >
            Oops, looks like there were no results for your search.
          </Alert>
        )}
        <AutoSizer defaultHeight={700} defaultWidth={1024}>
          {({ height, width }) =>
            loading ? (
              <List height={height} itemCount={50} itemSize={165} width={width}>
                {SkeletonRow}
              </List>
            ) : (
              <List
                height={height}
                itemCount={apis.length}
                itemSize={165}
                width={width}
              >
                {Row}
              </List>
            )
          }
        </AutoSizer>
      </div>
    </div>
  );
}
