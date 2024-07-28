// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     tasks: [],
//     task: {}
// }

// const taskSlice = createSlice({
//     name: 'taskslice',
//     initialState,
//     reducers: {
//         setTasks: (state , action) => {
//             state.tasks = [...action.payload]
//         },
//         setTask: (state , action) => {
//             state.task = action.payload
//         }
//     }
// })

// export const {setTasks , setTask} = taskSlice.actions

// export default taskSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    task: {}
};

const taskSlice = createSlice({
    name: 'taskslice',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.tasks = [...action.payload];
            } else {
                console.error('setTasks payload should be an array');
            }
        },
        setTask: (state, action) => {
            state.task = action.payload;
        }
    }
});

export const { setTasks, setTask } = taskSlice.actions;

export default taskSlice.reducer;
