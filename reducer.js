const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "addTask") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          content: action.payload,
        },
      ],
    };
  }

  return state;
};

const addTaskAction = {
  type: "addTask",
  payload: "learn reducer",
};
