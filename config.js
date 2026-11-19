window.APP_CONFIG = {
  "slug": "contact-lens-care-log",
  "title": "Contact Lens Care Log",
  "brand": "contact lens care log.",
  "category": "Personal utilities",
  "tagline": "Record lens opening and replacement dates from your eye-care provider's instructions.",
  "description": "Record lens opening and replacement dates from your eye-care provider's instructions.",
  "mode": "records",
  "kind": "default",
  "fields": [
    {
      "name": "lensType",
      "label": "Lens label",
      "required": true,
      "type": "text"
    },
    {
      "name": "openedOn",
      "label": "Opened on",
      "required": true,
      "type": "date"
    },
    {
      "name": "replaceBy",
      "label": "Replace by",
      "required": true,
      "type": "date"
    },
    {
      "name": "notes",
      "label": "Care notes",
      "required": false,
      "type": "textarea"
    }
  ],
  "dateField": "replaceBy",
  "timerField": "",
  "titleField": "lensType",
  "scope": "Follow your eye-care professional and manufacturer instructions; this is only a date log.",
  "emptyText": "No entries yet. Add one above to get started."
};
