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
export const editTag = (id) => ({
  type: "EDIT_TAG",
  id,
});
export const saveEdit = (text,id) => ({
  type: "SAVE_EDIT",
  id,
  text
});
export const canselEdit = (text,id) => ({
  type: "CANSEL_EDIT",
  id,
  text
});
