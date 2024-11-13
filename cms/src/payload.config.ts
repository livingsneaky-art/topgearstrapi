import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import seoPlugin from '@payloadcms/plugin-seo'

import Users from './collections/Users'
import Vehicles from './collections/Vehicles'
import Articles from './collections/Articles'
import Comments from './collections/Comments'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- TopGear CMS',
      favicon: '/assets/favicon.ico',
      ogImage: '/assets/og-image.jpg',
    },
  },
  editor: slateEditor({}),
  collections: [Users, Vehicles, Articles, Comments],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seoPlugin({
      collections: ['articles', 'vehicles'],
      generateTitle: ({ doc }: any) => {
        return `${doc.title || doc.name} - TopGear Philippines`
      },
      generateDescription: ({ doc }: any) => {
        return doc.excerpt || doc.description || ''
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  upload: {
    staticDir: path.resolve(__dirname, '../media'),
    staticURL: '/media',
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 576,
        position: 'centre',
      },
      {
        name: 'feature',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
  },
})
