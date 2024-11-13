import { CollectionConfig } from "payload/types";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "status", "publishedDate"]
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "News", value: "news" },
        { label: "Reviews", value: "reviews" },
        { label: "Features", value: "features" },
        { label: "Guides", value: "guides" }
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
      name: "summary",
      type: "textarea",
      required: true
    },
    {
      name: "content",
      type: "richText",
      required: true
    },
    {
      name: "gallery",
      type: "array",
      admin: {
        description: "Image gallery for the article"
      },
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
      name: "embeddedMedia",
      type: "array",
      admin: {
        description: "Embedded videos, social media posts, etc."
      },
      fields: [
        {
          name: "type",
          type: "select",
          options: [
            { label: "YouTube Video", value: "youtube" },
            { label: "Instagram Post", value: "instagram" },
            { label: "Twitter Post", value: "twitter" }
          ],
          required: true
        },
        {
          name: "url",
          type: "text",
          required: true
        },
        {
          name: "caption",
          type: "text"
        }
      ]
    },
    {
      name: "relatedVehicles",
      type: "relationship",
      relationTo: "vehicles",
      hasMany: true
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text"
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
      name: "publishedDate",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime"
        }
      }
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
      name: "comments",
      type: "array",
      admin: {
        description: "User comments and reactions"
      },
      fields: [
        {
          name: "user",
          type: "relationship",
          relationTo: "users",
          required: true
        },
        {
          name: "content",
          type: "textarea",
          required: true
        },
        {
          name: "reaction",
          type: "select",
          options: [
            { label: "Like", value: "like" },
            { label: "Love", value: "love" },
            { label: "Helpful", value: "helpful" }
          ]
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
      name: "recommendations",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      admin: {
        description: "Related articles for recommendations"
      }
    },
    {
      name: "leadGeneration",
      type: "group",
      fields: [
        {
          name: "showLeadForm",
          type: "checkbox",
          label: "Show Lead Generation Form"
        },
        {
          name: "formType",
          type: "select",
          options: [
            { label: "Newsletter Signup", value: "newsletter" },
            { label: "Test Drive Request", value: "testDrive" },
            { label: "Price Quote", value: "priceQuote" }
          ]
        },
        {
          name: "formPosition",
          type: "select",
          options: [
            { label: "Top", value: "top" },
            { label: "Middle", value: "middle" },
            { label: "Bottom", value: "bottom" }
          ]
        }
      ]
    }
  ]
};
