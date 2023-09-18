// contentlayer.config.js
import { makeSource, defineDatabase } from "contentlayer-source-notion";
import { Client } from "@notionhq/client";
var client = new Client({ auth: "secret_nIBpsNYaEczRK320SiecG1l6VGFJ3xi8EuF9Fmclo4Q" });
var Post = defineDatabase(() => ({
  name: "Post",
  databaseId: "ccd8578a498849d3b17cf4a36f9f3b54",
  query: {
    filter: {
      property: "Status",
      status: {
        equals: "Published"
      }
    }
  },
  properties: {
    date: {
      name: "Date"
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._id}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  client,
  databaseTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7IZLI3G3.mjs.map
