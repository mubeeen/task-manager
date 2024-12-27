export interface taskState {
    task: string,
    description: string,
    subtasks: Array<String>,
    currentStatus: string,
    loading: boolean,
    error: string,
}

export interface taskProps {
    task: string,
    description: string,
    subtasks: Array<String>,
    currentStatus: string,
}