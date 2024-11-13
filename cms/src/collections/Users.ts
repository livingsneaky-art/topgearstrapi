import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "role", "createdAt"]
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "Author", value: "author" },
        { label: "User", value: "user" }
      ],
      defaultValue: "user"
    },
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media"
    },
    {
      name: "bio",
      type: "textarea"
    },
    {
      name: "social",
      type: "group",
      fields: [
        {
          name: "twitter",
          type: "text",
          label: "Twitter Handle"
        },
        {
          name: "facebook",
          type: "text",
          label: "Facebook Profile"
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram Handle"
        }
      ]
    },
    {
      name: "preferences",
      type: "group",
      fields: [
        {
          name: "notifications",
          type: "checkbox",
          label: "Receive Email Notifications",
          defaultValue: true
        },
        {
          name: "newsletter",
          type: "checkbox",
          label: "Subscribe to Newsletter",
          defaultValue: true
        }
      ]
    }
  ],
  timestamps: true
};
