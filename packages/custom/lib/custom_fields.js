// Custom Post Field

Posts.addField({
  fieldName: 'Tags',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});
