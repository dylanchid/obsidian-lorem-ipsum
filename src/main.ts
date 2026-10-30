import { Editor, MarkdownView, Plugin } from "obsidian";
import { EditorView, keymap } from "@codemirror/view";
import { Prec } from "@codemirror/state";

/** Classic one-paragraph lorem ipsum. */
const LOREM_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/**
 * Trigger words at the cursor (case-insensitive):
 * - lorem
 * - lorem...
 * - lorem…
 * - lorem ...
 * - lorem …
 */
const TRIGGER_RE = /(?:^|[\s([{/\\"'*_~`])(lorem(?:\s*(?:\.{3}|…))?)$/i;

function findTriggerBeforeCursor(view: EditorView): {
  from: number;
  to: number;
} | null {
  const { state } = view;
  const sel = state.selection.main;
  if (!sel.empty) return null;

  const pos = sel.head;
  const line = state.doc.lineAt(pos);
  const textBefore = line.text.slice(0, pos - line.from);
  const match = textBefore.match(TRIGGER_RE);
  if (!match || match[1] === undefined) return null;

  const trigger = match[1];
  const from = pos - trigger.length;
  return { from, to: pos };
}

function expandLorem(view: EditorView): boolean {
  const range = findTriggerBeforeCursor(view);
  if (!range) return false;

  view.dispatch({
    changes: { from: range.from, to: range.to, insert: LOREM_PARAGRAPH },
    selection: { anchor: range.from + LOREM_PARAGRAPH.length },
  });
  return true;
}

function loremKeymapExtension() {
  return Prec.high(
    keymap.of([
      {
        key: "Tab",
        run: expandLorem,
      },
    ]),
  );
}

export default class LoremIpsumPlugin extends Plugin {
  async onload(): Promise<void> {
    this.registerEditorExtension(loremKeymapExtension());

    this.addCommand({
      id: "insert-lorem-ipsum",
      name: "Insert lorem ipsum paragraph",
      editorCallback: (editor: Editor, _view: MarkdownView) => {
        editor.replaceSelection(LOREM_PARAGRAPH);
      },
    });
  }
}
