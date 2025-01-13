import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all', // Options: 'all', 'done', 'notDone'
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
        state.tasks.push(action.payload);
        },
    toggleTask: (state, action) => {
        const task = state.tasks.find((t) => t.id === action.payload);
        if (task) {
            task.isDone = !task.isDone;
        }
    },
    editTask: (state, action) => {
        const { id, description } = action.payload;
        const task = state.tasks.find((t) => t.id === id);
        if (task) {
            task.description = description;
        }
    },
    setFilter: (state, action) => {
        state.filter = action.payload;
    },
},
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
