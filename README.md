# Lorem Ipsum

Type a trigger and press **Tab** to insert one paragraph of classic lorem ipsum placeholder text.

## Triggers

| Type this | Then press | Result |
|-----------|------------|--------|
| `lorem` | Tab | One paragraph |
| `lorem...` | Tab | One paragraph |
| `lorem …` | Tab | One paragraph |
| `lorem ...` | Tab | One paragraph |

Triggers are case-insensitive (`Lorem`, `LOREM`, etc. all work).

## Command

**Command palette** → “Insert lorem ipsum paragraph” — inserts at the cursor (or replaces the selection).

## Install manually

Run `npm ci && npm run build`, then copy `manifest.json` and `main.js` into `<vault>/.obsidian/plugins/lorem-ipsum/`. Enable Lorem Ipsum under **Settings → Community plugins**.

## Develop

```bash
cd obsidian-lorem-ipsum
npm ci
npm run build    # production main.js
npm run dev      # watch mode
```

Reload the plugin after changes (or use the [Hot Reload](https://github.com/pjeby/hot-reload) community plugin).

## License

MIT. See [LICENSE](LICENSE).
