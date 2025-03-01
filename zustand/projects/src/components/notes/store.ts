import { create } from "zustand";

interface Note {
  text: string;
  color: string;
}

interface NoteStoreTypes {
  notes: Note[];
  search: string;
  editorContent: string;
  noteColor: string;
  currentNoteIndex: number | null;
  setNotes: (updatedNotes: Note[]) => void;
  setSearch: (searchValue: string) => void;
  setEditorContent: (content: string) => void;
  setNoteColor: (color: string) => void;
  setCurrentNoteIndex: (index: number | null) => void;
  addOrUpdateNote: () => void;
  selectNote: (index: number) => void;
}

const useNotesStore = create<NoteStoreTypes>((set) => ({
  notes: [],
  search: "",
  editorContent: "",
  noteColor: "#fff",
  currentNoteIndex: null,

  setNotes: (updatedNotes) => set(() => ({ notes: updatedNotes })),

  setSearch: (searchValue) => set(() => ({ search: searchValue })),

  setEditorContent: (content) => set(() => ({ editorContent: content })),

  setNoteColor: (color) => set(() => ({ noteColor: color })),

  setCurrentNoteIndex: (index) => set(() => ({ currentNoteIndex: index })),

  addOrUpdateNote: () =>
    set((state) => {
      const { editorContent, notes, noteColor, currentNoteIndex } = state;

      if (editorContent.trim()) {
        if (currentNoteIndex !== null) {
          const updatedNotes = [...notes];

          updatedNotes[currentNoteIndex] = {
            text: editorContent,
            color: noteColor,
          };

          return {
            notes: updatedNotes,
            editorContent: "",
            noteColor: "#ffffff",
            currentNoteIndex: null,
          };
        } else {
          return {
            notes: [...notes, { text: editorContent, color: noteColor }],
            editorContent: "",
            noteColor: "#ffffff",
            currentNoteIndex: null,
          };
        }
      } else {
        return state;
      }
    }),

  selectNote: (index) =>
    set((state) => ({
      currentNoteIndex: index,
      editorContent: state.notes[index].text,
      noteColor: state.notes[index].color,
    })),
}));

export default useNotesStore;
