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

## Develop

```bash
cd .obsidian/plugins/lorem-ipsum
npm install
npm run build    # production main.js
npm run dev      # watch mode
```

Reload the plugin after changes (or use the [Hot Reload](https://github.com/pjeby/hot-reload) community plugin).
