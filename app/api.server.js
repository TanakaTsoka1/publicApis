import _got from "got/dist/source/index";

const got = _got.extend({ prefixUrl: "https://api.publicapis.org/" });

export function getApis(searchParams = {}) {
  return got
    .get("entries", { searchParams })
    .json()
    .then(({ entries }) =>
      (entries || []).filter(
        ({ API, Category, Link }) => API && Category && Link
      )
    );
}

export function getRandomApi() {
  return got
    .get("random")
    .json()
    .then(({ count, entries }) => {
      if (count != 1 || !entries || entries.length !== 1) return null;
      return entries[0];
    });
}

export function getCategories() {
  return got
    .get("categories")
    .json()
    .then(({ categories }) => categories);
}

export async function getHealth() {
  let health = false;
  const result = await got
    .get("health")
    .json()
    .catch(() => (health = false));
  if (result.alive) health = true;
  return health;
}
