import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskState, taskProps } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

const initialState: taskState = {
    task: "",
    description: "",
    subtasks: [""],
    currentStatus: "",
    loading: false,
    error: "",
}

interface TaskWithId extends taskProps {
    id: String,
}

export const saveNewTask = createAsyncThunk(
    "task/new",
    async (task: taskProps, { rejectWithValue }) => {
        try {
            const storedTask = JSON.parse(localStorage.getItem("tasks") || "[]");
            const newTask: TaskWithId = {...task, id:uuidv4() };
            storedTask.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(storedTask));
            return newTask;
        } catch (error: any) {
          return rejectWithValue(error.response?.data || error.message);
        }
      }
);

export const fetchTask = createAsyncThunk(
    "task/fetch",
    async (_, {rejectWithValue }) => {
        try {
            const storedTask = JSON.parse(localStorage.getItem("tasks") || "[]");
            return storedTask as TaskWithId;
        } catch {
            return rejectWithValue("Failed to fetch tasks from local storage.");
        }
    }
)

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveNewTask.pending,(state, action)=>{
            state.loading = true;
        });
        builder.addCase(saveNewTask.fulfilled,(state, action)=>{
            state.loading = false;
            if(action.payload){
                state.task = action.payload.task;
                state.description = action.payload.description;
                state.subtasks = action.payload.subtasks;
                state.currentStatus = action.payload.currentStatus;

            }
        });
        builder.addCase(saveNewTask.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})