// contentlayer.config.js
import { makeSource, defineDatabase } from "contentlayer-source-notion";
import { Client } from "@notionhq/client";
var client = new Client({ auth: process.env.NOTION_TOKEN });
var contentlayer_config_default = makeSource({
  client,
  databaseTypes: []
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JT6KE3HE.mjs.map
