import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import seoPlugin from '@payloadcms/plugin-seo'

import { Users, Media, Vehicles } from './collections'

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- TopGear CMS',
      favicon: '/assets/favicon.ico',
      ogImage: '/assets/og-image.jpg',
    },
  },
  editor: slateEditor({}),
  collections: [Users, Media, Vehicles],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seoPlugin({
      collections: ['vehicles', 'articles'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} | TopGear Philippines`,
      generateDescription: ({ doc }) => doc.excerpt || doc.description,
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/topgear',
  }),
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
})
