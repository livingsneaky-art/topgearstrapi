import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import seoPlugin from "@payloadcms/plugin-seo";
import path from "path";
import { Users, Media, Vehicles, Articles, Comments } from "./collections";

export default buildConfig({
  serverURL: process.env.NODE_ENV === "production"
    ? "https://api.topgear.onrender.com"
    : "http://localhost:3001",
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  collections: [
    Users,
    Media,
    Vehicles,
    Articles,
    Comments,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seoPlugin({
      collections: ["articles", "vehicles"],
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://localhost:27017/topgear",
  }),
  editor: slateEditor({}),
});
