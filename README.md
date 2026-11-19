# Contact Lens Care Log

Record lens opening and replacement dates from your eye-care provider's instructions.

## What it does

- Capture **lens label**.
- Capture **opened on**.
- Capture **replace by**.
- Capture **care notes**.
- Add, search, complete, and remove entries.
- See due/overdue date badges where a due date is configured.
- Export a JSON backup or CSV list.
- Keep data in this browser's local storage; no account or external service is used.

## Run locally

Open `index.html` in a current browser. No build step, npm install, or network connection is required. For local development, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Test

Node.js 18 or newer is needed for the dependency-free logic tests. The browser app itself has no runtime dependencies.

```sh
npm test
npm run check
```

## Privacy and scope

Records stay in this browser's `localStorage`. Clearing browser site data removes them. Follow your eye-care professional and manufacturer instructions; this is only a date log.

## License

MIT. See [LICENSE](./LICENSE).
