import { CollectionConfig } from "payload/types";

export const Comments: CollectionConfig = {
  slug: "comments",
  admin: {
    useAsTitle: "content",
    defaultColumns: ["content", "author", "article", "status", "createdAt"]
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "content",
      type: "textarea",
      required: true
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true
    },
    {
      name: "article",
      type: "relationship",
      relationTo: "articles",
      required: true
    },
    {
      name: "parentComment",
      type: "relationship",
      relationTo: "comments",
      admin: {
        description: "Parent comment for nested replies"
      }
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" }
      ],
      defaultValue: "pending",
      required: true
    },
    {
      name: "likes",
      type: "number",
      defaultValue: 0
    },
    {
      name: "reports",
      type: "array",
      fields: [
        {
          name: "reason",
          type: "select",
          options: [
            { label: "Spam", value: "spam" },
            { label: "Inappropriate", value: "inappropriate" },
            { label: "Harassment", value: "harassment" },
            { label: "Other", value: "other" }
          ]
        },
        {
          name: "reportedBy",
          type: "relationship",
          relationTo: "users"
        },
        {
          name: "description",
          type: "textarea"
        }
      ]
    }
  ],
  timestamps: true
};
