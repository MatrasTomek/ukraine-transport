import {
  OPEN_TASK,
  CLOSE_TASK,
  TASK_MESSENGER_ONLY,
  CLEAR_MESSANGER,
} from "../actions";

const initialState = {
  isModalOpen: false,
  task: "",
};

export const taskReducer = (state = [initialState], action) => {
  switch (action.type) {
    case OPEN_TASK:
      return [{ isModalOpen: action.isModalOpen, task: action.task }];
    case CLOSE_TASK:
      return [{ isModalOpen: action.isModalOpen, task: "" }];
    case TASK_MESSENGER_ONLY:
      return [{ isModalOpen: action.isModalOpen, task: action.task }];
    case CLEAR_MESSANGER:
      return [{ isModalOpen: action.isModalOpen, task: "" }];
    default:
      // console.warn(`Nie ma akcji typu ${action.type}`);
      return state;
  }
};
