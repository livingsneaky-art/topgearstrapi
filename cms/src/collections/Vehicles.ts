import { CollectionConfig } from "payload/types";

export const Vehicles: CollectionConfig = {
  slug: "vehicles",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "brand", "category", "status"],
    description: "Manage vehicle listings and specifications"
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "brand",
      type: "text",
      required: true,
      admin: {
        description: "Vehicle manufacturer"
      }
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Car", value: "car" },
        { label: "SUV", value: "suv" },
        { label: "Truck", value: "truck" },
        { label: "Van", value: "van" },
        { label: "Motorcycle", value: "motorcycle" }
      ],
      required: true
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true
        },
        {
          name: "caption",
          type: "text"
        }
      ]
    },
    {
      name: "specifications",
      type: "group",
      fields: [
        {
          name: "engine",
          type: "group",
          fields: [
            {
              name: "type",
              type: "text",
              required: true
            },
            {
              name: "displacement",
              type: "text"
            },
            {
              name: "power",
              type: "text"
            },
            {
              name: "torque",
              type: "text"
            }
          ]
        },
        {
          name: "transmission",
          type: "group",
          fields: [
            {
              name: "type",
              type: "text",
              required: true
            },
            {
              name: "gears",
              type: "number"
            }
          ]
        },
        {
          name: "performance",
          type: "group",
          fields: [
            {
              name: "acceleration",
              type: "text"
            },
            {
              name: "topSpeed",
              type: "text"
            }
          ]
        },
        {
          name: "dimensions",
          type: "group",
          fields: [
            {
              name: "length",
              type: "text"
            },
            {
              name: "width",
              type: "text"
            },
            {
              name: "height",
              type: "text"
            },
            {
              name: "wheelbase",
              type: "text"
            }
          ]
        }
      ]
    },
    {
      name: "price",
      type: "group",
      fields: [
        {
          name: "base",
          type: "number",
          required: true
        },
        {
          name: "currency",
          type: "select",
          options: [
            { label: "PHP", value: "PHP" },
            { label: "USD", value: "USD" }
          ],
          defaultValue: "PHP",
          required: true
        }
      ]
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
        { label: "Archived", value: "archived" }
      ],
      defaultValue: "draft",
      required: true
    },
    {
      name: "seo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          label: "SEO Title"
        },
        {
          name: "description",
          type: "textarea",
          label: "SEO Description"
        },
        {
          name: "keywords",
          type: "text",
          label: "SEO Keywords"
        }
      ]
    }
  ]
};
