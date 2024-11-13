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
        },
        {
          name: "metaImage",
          type: "upload",
          relationTo: "media",
          label: "Social Share Image"
        }
      ]
    },
    {
      name: "reviews",
      type: "array",
      admin: {
        description: "User reviews and ratings"
      },
      fields: [
        {
          name: "user",
          type: "relationship",
          relationTo: "users",
          required: true
        },
        {
          name: "rating",
          type: "select",
          options: [
            { label: "1 Star", value: "1" },
            { label: "2 Stars", value: "2" },
            { label: "3 Stars", value: "3" },
            { label: "4 Stars", value: "4" },
            { label: "5 Stars", value: "5" }
          ],
          required: true
        },
        {
          name: "comment",
          type: "textarea",
          required: true
        },
        {
          name: "createdAt",
          type: "date",
          admin: {
            readOnly: true
          }
        }
      ]
    },
    {
      name: "inquiries",
      type: "array",
      admin: {
        description: "Lead generation inquiries"
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "email",
          type: "email",
          required: true
        },
        {
          name: "phone",
          type: "text"
        },
        {
          name: "type",
          type: "select",
          options: [
            { label: "General Inquiry", value: "general" },
            { label: "Test Drive Request", value: "test_drive" },
            { label: "Price Quote", value: "price_quote" }
          ],
          required: true
        },
        {
          name: "message",
          type: "textarea",
          required: true
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "New", value: "new" },
            { label: "In Progress", value: "in_progress" },
            { label: "Completed", value: "completed" }
          ],
          defaultValue: "new",
          required: true
        },
        {
          name: "createdAt",
          type: "date",
          admin: {
            readOnly: true
          }
        }
      ]
    },
    {
      name: "relatedVehicles",
      type: "relationship",
      relationTo: "vehicles",
      hasMany: true,
      admin: {
        description: "Similar vehicles for recommendations"
      }
    }
  ]
};
