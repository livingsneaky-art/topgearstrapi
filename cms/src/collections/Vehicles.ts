import { CollectionConfig } from 'payload/types';

const Vehicles: CollectionConfig = {
  slug: 'vehicles',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'brand', 'type', 'year'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'brand',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Car', value: 'car' },
        { label: 'SUV', value: 'suv' },
        { label: 'Truck', value: 'truck' },
        { label: 'Van', value: 'van' },
        { label: 'Motorcycle', value: 'motorcycle' },
      ],
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'specifications',
      type: 'array',
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'details',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Coming Soon', value: 'coming-soon' },
        { label: 'Discontinued', value: 'discontinued' },
      ],
      defaultValue: 'available',
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
  ],
};

export default Vehicles;
