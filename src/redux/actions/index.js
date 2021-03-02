let nextTagId = 0;

export const addTag = (text) => ({
  type: "ADD_TAG",
  id: nextTagId++,
  text,
});

export const deleteTag = (id) => ({
  type: "DELETE_TAG",
  id,
});
