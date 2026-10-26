import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import { useEffect } from "react";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline font-medium",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "min-h-[220px] w-full rounded-b-md border border-t-0 border-[#E8E4DC] bg-white p-4 text-sm text-[#181614] focus:outline-none focus:ring-1 focus:ring-[#181614] prose prose-sm max-w-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL:", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 rounded-t-md border border-[#E8E4DC] bg-[#FAF8F5] p-2 text-[#5A554E]">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("bold") ? "bg-black/10 text-[#181614] font-bold" : ""
          }`}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("italic") ? "bg-black/10 text-[#181614] italic" : ""
          }`}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-[#E8E4DC] mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("heading", { level: 2 }) ? "bg-black/10 text-[#181614] font-bold" : ""
          }`}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("heading", { level: 3 }) ? "bg-black/10 text-[#181614] font-bold" : ""
          }`}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-[#E8E4DC] mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("bulletList") ? "bg-black/10 text-[#181614]" : ""
          }`}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("orderedList") ? "bg-black/10 text-[#181614]" : ""
          }`}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={setLink}
          className={`rounded p-1.5 transition-colors hover:bg-black/5 ${
            editor.isActive("link") ? "bg-black/10 text-blue-600" : ""
          }`}
          title="Add Link"
        >
          <LinkIcon className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-[#E8E4DC] mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="rounded p-1.5 transition-colors hover:bg-black/5 disabled:opacity-40"
          title="Undo"
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="rounded p-1.5 transition-colors hover:bg-black/5 disabled:opacity-40"
          title="Redo"
        >
          <RotateCw className="h-4 w-4" />
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />
    </div>
  );
}
