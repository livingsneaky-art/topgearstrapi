import { CollectionConfig } from 'payload/types';

const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'author', 'publishedDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'News', value: 'news' },
        { label: 'Reviews', value: 'reviews' },
        { label: 'Features', value: 'features' },
        { label: 'Guides', value: 'guides' },
        { label: 'Events', value: 'events' },
      ],
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'relatedVehicles',
      type: 'relationship',
      relationTo: 'vehicles',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'recommendations',
      type: 'relationship',
      relationTo: 'articles',
      hasMany: true,
      admin: {
        description: 'Recommended articles that appear alongside this article',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.recommendations) {
          return data;
        }
        // Prevent self-reference in recommendations
        data.recommendations = data.recommendations.filter(
          (articleId) => articleId !== data.id
        );
        return data;
      },
    ],
  },
};

export default Articles;
