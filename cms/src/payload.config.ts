import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { collections } from "./collections";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    bundler: webpackBundler(),
    user: "users",
  },
  editor: slateEditor({}),
  collections,
  db: mongooseAdapter({
    url: "mongodb://127.0.0.1/topgear-cms",
  }),
});
