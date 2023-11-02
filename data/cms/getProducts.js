import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getProducts = async () => {
  const product = await client.getEntry("4QTGNjA1XTJxNAuzUCSrpf");
  return product;
};

export default getProducts;
