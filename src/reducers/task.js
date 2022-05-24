
function taskReducer(state, action) {
  switch (action.type) {
    case "add": {
      return { tasks: state.tasks.push };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}