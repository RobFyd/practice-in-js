// reducer with "if"

{
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
}

// reducer with switch

// const initialState = {
//   tasks: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "addTask":
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           {
//             content: action.payload,
//           },
//         ],
//       };

//     default:
//       return state;
//   }
// };

// const addTaskAction = {
//   type: "addTask",
//   payload: "learn reducer",
// };


// store - npm install @reduxjs/toolkit in practise-React repo
