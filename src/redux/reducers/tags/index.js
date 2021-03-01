const INITIAL_STATE = { allTags: [] };
export const tags = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        allTags: [
          ...state.allTags,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    }
    default:
      return state;
  }
};
