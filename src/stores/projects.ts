import { createSlice } from "@reduxjs/toolkit";
// projeto bloco de notas

interface Note {}

const initialState = [
  { id: 0, title: "Caixa de Entrada", notes: [] as Note [], delete: false },
  { id: 2, title: "Hoje", notes: [] as Note [], delete: false },
  { id: 3, title: "Essa Semana", notes: [] as Note [], delete: false },
];

export const projectSlicer = createSlice({
  name: "projects",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: state.length,
        title: action.payload,
        notes: [],
        delete: true,
      });
    },
    remove: (state, action) => {
      state = state.filter(project => project.id !== action.payload)
    },
    addNote: (state, action) => {
      const project = state.filter(project => project.id === action.payload.id)[0];

      project.notes.push(action.payload.note);
    },
  },
});

export const { add, remove } = projectSlicer.actions;

export default projectSlicer.reducer;