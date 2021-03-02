const INITIAL_STATE = { allTags: [] };
export const tags = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TAG": {
      return {
        ...state,
        allTags: [
          ...state.allTags,
          {
            id: action.id,
            text: action.text,
            deleted: false,
          },
        ],
      };
    }
    case "DELETE_TAG": {
      return {
        allTags: [...state.allTags.filter((tag) => tag.id !== action.id)],
      };
    }

    default:
      return state;
  }
};
