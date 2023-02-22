import {createSlice } from "@reduxjs/toolkit";

export const counterSlicer = createSlice({
  //nome, estado inicial e ações
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // cria as açoes(funçoes) para mudar os estados
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    sum: (state, action) => {
      state.value += action.payload;
      //passa um valor e soma ao estado
    },
  },
});

//exportando as funcoes
export const { increment, decrement, sum } = counterSlicer.actions;
//exportando o reducer
export default counterSlicer.reducer;
