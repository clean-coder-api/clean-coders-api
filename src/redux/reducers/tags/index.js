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
            edit: false,
          },
        ],
      };
    }
    case "DELETE_TAG": {
      return {
        allTags: [...state.allTags.filter((tag) => tag.id !== action.id)],
      };
    }
    case "EDIT_TAG": {
      return {
        ...state,
        allTags: [
          ...state.allTags.map((tag) => {
            if (tag.id === action.id) {
              return { id: tag.id, text: tag.text, edit: !tag.edit };
            } else {
              return tag;
            }
          }),
        ],
      };
    }
    case "SAVE_EDIT": {
      return {
        ...state,
        allTags: [
          ...state.allTags.map((tag) => {
            if (tag.id === action.id) {
              return { id: tag.id, text: action.text, edit: false };
            } else {
              return tag;
            }
          }),
        ],
      };
    }
    case "CANSEL_EDIT": {
      return {
        ...state,
        allTags: [
          ...state.allTags.map((tag) => {
            if (tag.id === action.id) {
              return { id: tag.id, text: tag.text, edit: false };
            } else {
              return tag;
            }
          }),
        ],
      };
    }

    default:
      return state;
  }
};
