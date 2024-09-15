// src/contentful.ts
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "jugyivcx5l5y", // Replace with your Space ID
  accessToken: "wsbysV9sqCHbk676M3IhKwjwg499p-_eU2CDaeYZdtU", // Replace with your Access Token
});

export default client;
