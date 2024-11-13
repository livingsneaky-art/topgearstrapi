import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    staticURL: "/media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre"
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre"
      },
      {
        name: "feature",
        width: 1920,
        height: 1080,
        position: "centre"
      }
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"]
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true
    },
    {
      name: "caption",
      type: "text"
    },
    {
      name: "credit",
      type: "text"
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Vehicle", value: "vehicle" },
        { label: "Article", value: "article" },
        { label: "User", value: "user" }
      ]
    }
  ]
};
