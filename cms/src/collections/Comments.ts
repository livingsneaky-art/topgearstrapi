import { CollectionConfig } from 'payload/types';

const Comments: CollectionConfig = {
  slug: 'comments',
  admin: {
    useAsTitle: 'content',
    defaultColumns: ['content', 'author', 'article', 'status', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'article',
      type: 'relationship',
      relationTo: 'articles',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'parentComment',
      type: 'relationship',
      relationTo: 'comments',
      admin: {
        description: 'Parent comment if this is a reply',
      },
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'reports',
      type: 'array',
      admin: {
        description: 'User reports for inappropriate content',
      },
      fields: [
        {
          name: 'reportedBy',
          type: 'relationship',
          relationTo: 'users',
        },
        {
          name: 'reason',
          type: 'text',
        },
        {
          name: 'reportedAt',
          type: 'date',
        },
      ],
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.createdAt) {
          data.createdAt = new Date();
        }
        return data;
      },
    ],
  },
};

export default Comments;
